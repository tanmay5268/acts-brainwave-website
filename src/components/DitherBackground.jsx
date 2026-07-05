import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Max simultaneous ripples on screen at once
const MAX_CLICKS = 10;

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec2  uResolution;
  uniform float uTime;
  uniform vec2  uClickPos[${MAX_CLICKS}];
  uniform float uClickTimes[${MAX_CLICKS}];
  uniform vec3  uColor;
  uniform float uDensity;
  uniform vec2  uMousePos;
  uniform float uMouseTime;

  varying vec2 vUv;

  // --- Bayer ordered-dithering matrices (recursive, 2x2 -> 8x8) ---
  float Bayer2(vec2 a) {
    a = floor(a);
    return fract(a.x / 2.0 + a.y * a.y * 0.75);
  }
  #define Bayer4(a)  (Bayer2(0.5 * (a)) * 0.25 + Bayer2(a))
  #define Bayer8(a)  (Bayer4(0.5 * (a)) * 0.25 + Bayer2(a))

  // --- cheap value-noise + fbm for an organic, drifting mask ---
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v += amp * noise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 fragCoord = vUv * uResolution;
    float aspect = uResolution.x / uResolution.y;

    // Continuous, per-pixel UV for the noise field (NOT quantized to a grid —
    // that's what was causing the hard rectangular block edges).
    vec2 uv = vUv * vec2(aspect, 1.0);

    // Slowly drifting organic blobs, kept as a smooth gradient (0..1),
    // not binarized, so the dither step below can render soft density
    // transitions instead of flat filled regions.
    float n = fbm(uv * 5.0 + uTime * 0.35);
    float mask = smoothstep(0.15, 0.85, n);

    // Ripples from clicks
    float feed = 0.0;
    for (int i = 0; i < ${MAX_CLICKS}; i++) {
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0 && pos.y < 0.0) continue;

      vec2 cuv = (pos / uResolution) * vec2(aspect, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);

      float waveR  = 0.6 * t;
      float ring   = exp(-pow((r - waveR) / 0.05, 2.0));
      float atten  = exp(-1.0 * t) * exp(-2.0 * r);
      feed = max(feed, ring * atten);
    }

    // Soft glow that follows the cursor while it's moving, fading out
    // ~0.6s after it stops (rather than a decaying ring like clicks —
    // this one just tracks position directly).
    if (uMousePos.x >= 0.0) {
      vec2 muv = (uMousePos / uResolution) * vec2(aspect, 1.0);
      float mDist = distance(uv, muv);
      float mAge = max(uTime - uMouseTime, 0.0);
      float hoverFade = exp(-mAge * 3.0);
      float hoverGlow = exp(-(mDist * mDist) / (2.0 * 0.09 * 0.09)) * hoverFade;
      feed = max(feed, hoverGlow);
    }

    // Cap the max value fed into the dither threshold — at 1.0 the Bayer
    // step renders 100% solid fill (no dots left). uDensity < 1.0 keeps
    // even the "brightest" blobs as a dense dot pattern instead of solid.
    float combined = clamp((mask + feed) * uDensity, 0.0, 1.0);

    // Fine-grained per-pixel dithering, independent of the noise sampling
    // resolution above — this is what gives the varying dot DENSITY
    // (sparse in dark areas, dense in light areas) instead of a hard cutoff.
    const float PIXEL_SIZE = 2.0;
    vec2 pixelId = floor(fragCoord / PIXEL_SIZE);
    float dither = Bayer8(pixelId);
    float bit = step(dither, combined);

    vec3 color = mix(vec3(0.0), uColor, bit);
    gl_FragColor = vec4(color, 1.0);
  }
`;

function DitherPlane({ color = "#e5e5e5", density = 0.55 }) {
  const materialRef = useRef();
  const { size, gl } = useThree();

  // Ring buffer of active clicks, sent to the shader as uniform arrays
  const clickPositions = useRef(
    Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1))
  );
  const clickTimes = useRef(new Array(MAX_CLICKS).fill(0));
  const nextSlot = useRef(0);

  // Continuous cursor tracking for the hover glow
  const mousePos = useRef(new THREE.Vector2(-1, -1));
  const mouseMoveTime = useRef(-1000);
  const elapsedTime = useRef(0);

  const uniforms = useMemo(
    () => ({
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uClickPos: { value: clickPositions.current },
      uClickTimes: { value: clickTimes.current },
      uColor: { value: new THREE.Color(color) },
      uDensity: { value: density },
      uMousePos: { value: mousePos.current },
      uMouseTime: { value: -1000 },
    }),
    [color, density]
  );

  useEffect(() => {
    const dpr = gl.getPixelRatio();
    uniforms.uResolution.value.set(size.width * dpr, size.height * dpr);
  }, [size, gl, uniforms]);

  useEffect(() => {
    const handlePointerDown = (e) => {
      const dpr = gl.getPixelRatio();
      const x = e.clientX * dpr;
      // flip Y: DOM origin is top-left, shader UV origin is bottom-left
      const y = (size.height - e.clientY) * dpr;

      const slot = nextSlot.current;
      clickPositions.current[slot].set(x, y);
      clickTimes.current[slot] = elapsedTime.current;
      nextSlot.current = (slot + 1) % MAX_CLICKS;
    };

    const handlePointerMove = (e) => {
      const dpr = gl.getPixelRatio();
      const x = e.clientX * dpr;
      const y = (size.height - e.clientY) * dpr;

      mousePos.current.set(x, y);
      mouseMoveTime.current = elapsedTime.current;
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [gl, size]);

  useFrame((state) => {
    elapsedTime.current = state.clock.elapsedTime;
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsedTime.current;
      materialRef.current.uniforms.uMouseTime.value = mouseMoveTime.current;
    }
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

/**
 * Fixed, full-viewport Bayer-dither WebGL background.
 * Drop this once near the root of your app (e.g. in App.jsx), it sits
 * behind everything else via z-index and pointer-events.
 */
export default function DitherBackground({ color = "#e5e5e5", density = 0.55 }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none", // let clicks pass through to page content
      }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false }}
        dpr={[1, 2]}
      >
        <DitherPlane color={color} density={density} />
      </Canvas>
    </div>
  );
}
