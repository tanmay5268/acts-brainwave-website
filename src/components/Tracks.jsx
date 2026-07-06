import { useState, useEffect, useRef } from "react";
import tracksHeading from "../assets/tracks/Group 80.png";
import tracksLine from "../assets/tracks/Group 68.png";
import track1 from "../assets/tracks/Group 69.png";
import track2 from "../assets/tracks/Group 70.png";
import track3 from "../assets/tracks/Group 71.png";
import track4 from "../assets/tracks/Group 72.png";
import track5 from "../assets/tracks/Group 73.png";
import track6 from "../assets/tracks/Group 74.png";
import track7 from "../assets/tracks/Group 75.png";
import track8 from "../assets/tracks/Group 76.png";

const trackList = [
  { img: track1, name: "AI & Machine Learning" },
  { img: track2, name: "Web Development" },
  { img: track3, name: "Mobile Apps" },
  { img: track4, name: "Cybersecurity" },
  { img: track5, name: "Blockchain" },
  { img: track6, name: "IoT & Hardware" },
  { img: track7, name: "Open Innovation" },
  { img: track8, name: "Design & UI/UX" },
];

export default function TracksSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tracks" ref={sectionRef} className="relative w-full bg-[#060606] min-h-screen overflow-hidden py-20 px-5 pb-[120px]">
      {/* Heading - matches timeline/registration heading sizing */}
      <div className="text-center mb-12 md:mb-16 relative z-10">
        <img
          loading="lazy"
          src={tracksHeading}
          alt="TRACKS"
          className="w-[2000px] object-cover ml-7 mx-auto"
        />
      </div>

      {/* Track Grid - 2 cols on mobile, 4 cols on large screens */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-5 relative z-10">
        {trackList.map((track, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-3 md:gap-4 transition-all duration-500 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="w-full aspect-square max-w-[260px] flex items-center justify-center group">
              <img
                loading="lazy"
                src={track.img}
                alt={track.name}
                className="w-full h-full object-contain block transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(200,255,0,0.4)]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Decorative line at bottom */}
      <div className="flex justify-center mt-10 md:mt-16">
        <img
          src={tracksLine}
          alt=""
          className="w-[min(1000px,80vw)] "
        />
      </div>
    </section>
  );
}
