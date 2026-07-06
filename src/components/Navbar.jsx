import { useState, useEffect, useRef } from "react";
import sparkblaze3 from "../assets/stickers/sparkblaze3.png";

// Hand-traced SVG reproducing the sharp, layered sci-fi raptor/creature icon on the left
function LogoMark() {
  return (
    <img className="h-[3.21vw] min-h-[30px]" src={sparkblaze3} alt="Logo" />
  );
}

// 3x4 Dot Grid block matching the right-side control point
function DotGrid() {
  return (
    <div className="grid grid-cols-3 gap-[4px] px-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="h-[3.5px] w-[3.5px] rounded-full bg-[#d4ff2a]"
          style={{ boxShadow: "0 0 6px #d4ff2a, 0 0 2px #d4ff2a" }}
        />
      ))}
    </div>
  );
}

const NAV_ITEMS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Timeline", href: "#timeline", id: "timeline" },
  { label: "Prizes", href: "#prizes", id: "prizes" },
  { label: "Register", href: "#register", id: "register" },
  { label: "Sponsors and Mentors", href: "#sponsors", id: "sponsors" },
  { label: "FAQs", href: "#faq", id: "faq" },
];

// Reconstructed precision clip paths that map out the mechanical bottom drops
const TECH_OUTER_CLIP = 
  "polygon(40px 0%, calc(100% - 40px) 0%, 100% 50%, calc(100% - 40px) 100%, calc(100% - 110px) 100%, calc(100% - 130px) 86%, 130px 86%, 110px 100%, 40px 100%, 0% 50%)";
const TECH_INNER_CLIP = 
  "polygon(39px 0%, calc(100% - 39px) 0%, 99.6% 50%, calc(100% - 39px) 100%, calc(100% - 110px) 100%, calc(100% - 129px) 86%, 129px 86%, 110px 100%, 39px 100%, 0.4% 50%)";

export default function Navbar() {
  const [active, setActive] = useState(""); 
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // States to keep track of the moving neon line's dimensions
  const [indicatorStyles, setIndicatorStyles] = useState({ left: 0, width: 0, opacity: 0 });
  
  // Create references to individual nav links to calculate bounding rect offsets
  const itemRefs = useRef({});

  // 1. Hook to handle dynamic visibility and scroll-spy highlight syncing
  useEffect(() => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setShowNavbar(!entry.isIntersecting);
        },
        { threshold: 0.15 }
      );
      heroObserver.observe(heroElement);
    } else {
      setShowNavbar(true);
    }

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchedItem = NAV_ITEMS.find(item => item.id === entry.target.id);
            if (matchedItem) {
              setActive(matchedItem.label);
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0
      }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) navObserver.observe(el);
    });

    const topObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive("");
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0 }
    );
    if (heroElement) topObserver.observe(heroElement);

    return () => {
      navObserver.disconnect();
      topObserver.disconnect();
    };
  }, []);

  // 2. Hook to dynamically measure active nodes and animate the single shared selector line
  useEffect(() => {
    const activeNode = itemRefs.current[active];

    if (activeNode) {
      const { offsetLeft, offsetWidth } = activeNode;
      setIndicatorStyles({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    } else {
      // Fade out indicator smoothly if nothing is selected (e.g., inside hero viewport)
      setIndicatorStyles((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [active]);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:px-8 transition-all duration-500 ease-in-out ${
        showNavbar 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <nav className="relative w-full max-w-6xl">
        {/* Outer Frame with neon edge mapping */}
        <div
          className="absolute inset-0 h-16 sm:h-[72px]"
          style={{
            clipPath: TECH_OUTER_CLIP,
            background: "linear-gradient(90deg, #d4ff2a 0%, rgba(212,255,42,0.2) 20%, rgba(212,255,42,0.2) 80%, #d4ff2a 100%)",
            boxShadow: "0 0 20px rgba(212,255,42,0.35)",
          }}
        />
        {/* Inner Panel body */}
        <div
          className="relative mx-[1.5px] mt-[1.5px] flex h-[61px] items-center justify-between px-10 sm:h-[69px] sm:px-16"
          style={{
            clipPath: TECH_INNER_CLIP,
            background: "linear-gradient(180deg, #141514 0%, #080908 45%, #010101 100%)",
          }}
        >
          {/* Faint UI horizontal texture grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_5px] pointer-events-none opacity-50" />
          
          {/* Left: Raptor Logo */}
          <div className="flex shrink-0 items-center">
            <a href="#hero" className="transition-transform duration-200 hover:scale-105">
              <LogoMark />
            </a>
          </div>
          
          {/* Center Links */}
          <div className="relative hidden h-full items-center md:flex">
            <ul className="flex h-full items-center gap-6 lg:gap-10">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.label;
                return (
                  <li 
                    key={item.label} 
                    ref={(el) => (itemRefs.current[item.label] = el)}
                    className="relative flex h-full items-center justify-center"
                  >
                    <a
                      href={item.href}
                      className="relative z-10 text-[14px] font-black uppercase tracking-[0.18em] transition-colors duration-300 select-none whitespace-nowrap"
                      style={{ 
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        color: isActive ? "#d4ff2a" : "rgba(255, 255, 255, 0.95)",
                        textShadow: isActive 
                          ? "0 0 8px rgba(212,255,42,0.8), 0 0 20px rgba(212,255,42,0.2)" 
                          : "none"
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* ================= FLUID SELECTOR ENGINE ================= */}
            {/* Ambient Background Glow Tracker */}
            <div 
              className="absolute bottom-0 top-4 -z-0 bg-gradient-to-t from-[#d4ff2a]/20 via-[#d4ff2a]/4 to-transparent blur-md pointer-events-none transition-all duration-300 ease-out"
              style={{
                left: `${indicatorStyles.left - 12}px`,
                width: `${indicatorStyles.width + 24}px`,
                opacity: indicatorStyles.opacity,
              }}
            />

            {/* Sharp Underline Selector Pill Tracker */}
            <span
              className="absolute h-[4px] bg-[#d4ff2a] transition-all duration-300 ease-out"
              style={{
                bottom: "9px",
                left: `${indicatorStyles.left}px`,
                width: `${indicatorStyles.width}px`,
                opacity: indicatorStyles.opacity,
                boxShadow: "0 0 14px 4px rgba(212,255,42,0.95), 0 0 4px 1px #ffffff",
                borderRadius: "2px"
              }}
            />
          </div>
          
          {/* Right Area Control Block */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex shrink-0 items-center justify-center rounded-sm p-2 transition-transform active:scale-95 md:cursor-default"
            aria-label="Toggle Panel Matrix"
          >
            <DotGrid />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Viewport */}
      {mobileOpen && (
        <div className="absolute left-4 right-4 top-[88px] z-40 rounded border border-[#d4ff2a]/30 bg-[#080908]/95 p-5 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.label;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm font-bold uppercase tracking-[0.12em] py-2 px-4 rounded transition-all duration-200 ${
                      isActive 
                        ? "bg-[#d4ff2a]/10 text-[#d4ff2a] border-l-2 border-[#d4ff2a]" 
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}