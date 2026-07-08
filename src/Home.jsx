import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import timelineHeading from "./assets/timeline-heading.png";
import smileyImg from "./assets/smiley.png";
import sprayImg from "./assets/spray.png";
import prizeHeading from "./assets/prize-heading.png";
import lineLeft from "./assets/line-left.png";
import lineRight from "./assets/line-right.png";
import box1 from "./assets/box1.png";
import box2 from "./assets/box2.png";
import box3 from "./assets/box3.png";
import box4 from "./assets/box4.png";

import prizeCards from "./assets/prize-cards.png";
import registrationHeading from "./assets/registration-heading.png";
import posterFrame from "./assets/poster-frame.png";
import registerBtn from "./assets/register-btn.png";
import iconPrize from "./assets/icon-prize.png";
import iconOffline from "./assets/icon-offline.png";
import iconClock from "./assets/icon-clock.png";
import iconParticipants from "./assets/icon-participants.png";
import decorStickers from "./assets/decor-stickers.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import line from "./assets/line.png";
import actslogo from "./assets/actslogo.png";
import keepOut from "./assets/keepout.png";

import myLogo from './assets/logos/logo2.png'
import spray from './assets/stickers/spray.png'
import spark from './assets/stickers/sparkblaze3.png'
import pose from './assets/stickers/pose.png'
import keepout from './assets/stickers/keepout.png'
import crown from './assets/stickers/crown.png'
import punk from './assets/stickers/punk.png'
import caution from './assets/stickers/caution.png'
import tag from './assets/stickers/green.png'
import register from './assets/images/register.png'
import join from './assets/images/joincomm.png'
import biglogo from './assets/logos/biglogo.png'
import coin from './assets/stickers/coin-half.png'
import smile from './assets/stickers/smile.png'
import lightning from './assets/stickers/lightning.png'
import specialdeal from './assets/stickers/specialdeal.png'
import triangle from './assets/stickers/skull_triangle.png'
import wheel from './assets/stickers/wheel.png'
import spark2 from './assets/stickers/sparkblaze2.png'
import check from './assets/stickers/check.png'
import qrcode from './assets/stickers/QRcode.png'
import timerbg from './assets/images/timerbg.png'
import date from './assets/images/date.png'
import MyLogo from './assets/logos/logo.png'
import Faq from './assets/images/FAQdesk.png'
import Faq2 from './assets/images/FAQ.png'
import decor from './assets/stickers/decor.png'
import instagram from "./assets/images/instagram.png";
import linkedin from "./assets/images/linkedin.png";
import gmail from "./assets/images/gmail.png";
import linktree from "./assets/images/linktree.png";
import "./index.css";
import aboutBrainwaveHeading from "./assets/about-brainwave-heading.png"
import smileyAbout from "./assets/smiley-about.png"
import lineRightAbout from "./assets/line-right-about.png";
import lineLeftAbout from "./assets/line-left-about.png"
import sponsorsHeading from "./assets/sponsorsHeading.png"
import { sponsors } from "./data/data.js"
import PersonCard from "./components/PersonCard.jsx";
import { people } from "./data/data.js";
import mentorsHeading from "./assets/mentorsHeading.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Tracks from "./components/Tracks.jsx";


const events = [
  { side: "left", name: "Registrations Open", date: "28 / 06 / 2026" },
  { side: "right", name: "Team Formation", date: "10 / 07 / 2026" },
  { side: "left", name: "Problem Statements", date: "20 / 07 / 2026" },
  { side: "right", name: "Round 1 — Prelims", date: "01 / 08 / 2026"},
  { side: "left", name: "Round 2 — Semis", date: "10 / 08 / 2026" },
  { side: "right", name: "Grand Finale", date: "16 / 08 / 2026" },
];

// ===== Single event row =====
function EventRow({ event }) {
  const [lineVisible, setLineVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const rowRef = useRef(null);
  const isLeft = event.side === "left";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          setTimeout(() => setTextVisible(true), 900);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -30% 0px" }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef} style={{ position: "relative", display: "flex", alignItems: "center", minHeight: "140px" }}>
      {/* Dot */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: "14px", height: "14px", borderRadius: "50%",
        backgroundColor: "#c8ff00",
        boxShadow: "0 0 10px #c8ff00, 0 0 20px rgba(200,255,0,0.4)",
        opacity: lineVisible ? 1 : 0,
        transition: "opacity 0.4s ease",
        zIndex: 20,
      }} />

      {/* Horizontal line */}
      <div style={{
        position: "absolute", top: "50%", transform: "translateY(-50%)",
        height: "2px", backgroundColor: "#c8ff00",
        boxShadow: "0 0 6px #c8ff00",
        right: isLeft ? "calc(50% + 14px)" : "auto",
        left: isLeft ? "auto" : "calc(50% + 14px)",
        width: lineVisible ? "38%" : "0%",
        transition: "width 0.8s ease-out",
        zIndex: 10,
      }} />

      {/* Text above line */}
      <div style={{
        position: "absolute", top: "50%", transform: "translateY(-120%)",
        right: isLeft ? "calc(50% + 20px)" : "auto",
        left: isLeft ? "auto" : "calc(50% + 20px)",
        textAlign: isLeft ? "right" : "left",
        opacity: textVisible ? 1 : 0,
        transition: "opacity 0.5s ease",
        zIndex: 20,
      }}>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.2rem, 2.5vw, 3rem)", letterSpacing: "3px", color: "#ffffff", }}>
          {event.name}
        </p>
        <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize:"clamp(0.8rem, 1.2vw, 3rem)", color: "#c8ff00", letterSpacing: "2px", margin: "2px 0 0" }}>
          {event.date}
        </p>
      </div>
    </div>
  );
}

// ===== Timeline Section =====
function TimelineSection() {
  return (
    <div id="timeline" style={{
      position: "relative",
      width: "100%",
     
      minHeight: "100vh",
      overflowX: "hidden",
      paddingBottom: "120px",
    }}>

      {/* Google Fonts */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Share+Tech+Mono&display=swap" />

      {/* ── BACKGROUND ELEMENTS ── */}


      {/* Smiley — bottom left, half peeking out */}
      <img src={smileyImg} alt="" style={{
        position: "absolute",
        bottom: "60px",        /* change to move up or down */
        left: "-55px",         /* negative = peek from edge */
        width: "240px",        /* change to resize */
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 1,
      }} />

      {/* Spray can — bottom center-right */}
      <img src={sprayImg} alt="" style={{
        position: "absolute",
        bottom: "10px",        /* change to move up or down */
        right: "-35px",         /* change to move left or right */
        width: "130px",        /* change to resize */
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 1,
      }} />

      {/* ── HEADING ── */}
      <div style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "80px", position: "relative", zIndex: 2 }}>
        <img
          src={timelineHeading}
          alt="TIMELINE"
          style={{ width: "min(1000px, 95vw)", margin: "0 auto", display: "block" }}
        />
      </div>

      {/* ── VERTICAL SPINE LINE ── */}
      <div style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: "180px",
        bottom: "100px",
        width: "4px",
        backgroundColor: "rgba(200,255,0,0.3)",
        zIndex: 2,
      }} />

      {/* ── EVENT ROWS ── */}
      <div style={{
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        zIndex: 3,             /* above background images */
      }}>
        {events.map((event, index) => (
          <EventRow key={index} event={event} />
        ))}
      </div>

    </div>
  );
}

// ===== Prize Pool Section =====
function PrizeSection() {
  return (
    <section className="w-full overflow-hidden">

  {/* ================= Heading ================= */}
  <div className="max-w-7xl mx-auto flex items-center gap-4 lg:gap-8 mb-12 mt-0">

    <img
      src={lineLeft}
      alt=""
      className="hidden md:block flex-1 h-2 object-fill"
    />

    <img
      src={prizeHeading}
      alt="Prize Pool"
      className="
        w-[360px]
        sm:w-[320px]
        md:w-[420px]
        lg:w-[520px]
        xl:w-[600px]
        h-auto
        shrink-0
        mx-auto
      "
    />

    <img
      src={lineRight}
      alt=""
      className="hidden md:block flex-1 h-2 object-fill"
    />

  </div>

  {/* ================= Prize Cards ================= */}

  <div className="max-w-6xl mx-auto">

    {/* Mobile */}
    <div className="flex md:hidden flex-col items-center gap-6">

      <img
        src={box4}
        alt="Prize Pool"
        className="w-full max-w-[320px] h-auto"
      />

      <img
        src={box2}
        alt="1st Runner Up"
        className="w-full max-w-[340px] h-auto ml-[4vw]"
      />

      <img
        src={box1}
        alt="Winner"
        className="w-full max-w-[320px] h-auto"
      />

      <img
        src={box3}
        alt="2nd Runner Up"
        className="w-full max-w-[345px] h-auto ml-[4vw]"
      />

    </div>

    {/* Desktop */}
    <div className="hidden md:flex flex-col items-center">

      {/* Top Prize */}
      <img
        src={box4}
        alt="Prize Pool"
        className="
          w-[260px]
          lg:w-[320px]
          xl:w-[360px]
          h-auto
        "
      />

      {/* Bottom Three */}
      <div className="mt-10 ml-10 flex justify-center items-end gap-6 lg:gap-8 xl:gap-10">

        <img
          src={box1}
          alt="1st Runner Up"
          className="
            w-[220px]
            lg:w-[270px]
            xl:w-[320px]
            h-auto
          "
        />

        <img
          src={box2}
          alt="Winner"
          className="
            w-[220px]
            lg:w-[290px]
            xl:w-[340px]
            h-auto
          "
        />

        <img
          src={box3}
          alt="2nd Runner Up"
          className="
            w-[220px]
            lg:w-[270px]
            xl:w-[340px]
            h-auto
          "
        />

      </div>

    </div>

  </div>

</section>
  );
}

// ===== Registration Section =====

  

function RegistrationSection() {
  const REGISTER_LINK = "https://unstop.com/hackathons/brainwave-2026-guru-gobind-singh-indraprastha-university-ggsipu-delhi-1711474";

  return (
    <>
      <style>{`
        .reg-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Heading */
        .reg-heading {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding-top: 24px;
          position: relative;
          z-index: 10;
        }

        .reg-heading-title {
          width: min(700px, 90vw);
          height: auto;
        }

        .reg-heading-line {
          flex: 1;
          min-width: 0;
          height: 12px;
          object-fit: fill;
        }

        /* Main content row */
        .reg-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 10px;
          padding: 0 16px 100px;
          box-sizing: border-box;
          flex-wrap: wrap;
        }

        /* LEFT side */
        .reg-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .reg-left a img {
          width: min(280px, 80vw);
          height: auto;
          transition: transform .2s;
        }

        .reg-left a img:hover {
          transform: scale(1.08);
        }

        /* Divider line */
        .reg-line {
          height: min(400px, 50vw);
          width: auto;
        }

        /* Background */
        .reg-bg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          object-fit: cover;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        @media (max-width:480px) {
          .reg-line {
            display: none;
          }

          .reg-content {
            gap: 32px;
            margin-top: 24px;
          }
        }
      `}</style>

      <div className="reg-page" id="register">
        {/* Background */}
        <img
          src={decorStickers}
          alt=""
          className="reg-bg"
        />

        {/* Heading */}
        <div className="reg-heading mb-20">
          <img
            src={lineLeft}
            alt=""
            className="reg-heading-line "
          />

          <img
            src={registrationHeading}
            alt="Registration"
            className="reg-heading-title"
          />

          <img
            src={lineRight}
            alt=""
            className="reg-heading-line"
          />
        </div>

        {/* Main Content */}
        <div className="reg-content">
          {/* Left */}
          <div className="reg-left">
            <a
              href={REGISTER_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={registerBtn}
                alt="Register"
                className="w-[300px] hover:scale-110 transition"
              />
            </a>

            <div
              className="relative w-[320px] h-[320px] bg-center bg-cover flex items-center justify-center"
              style={{
                backgroundImage: `url(${posterFrame})`,
              }}
            >
              <img
                src={actslogo}
                alt="Poster"
                className="w-[240px] h-[240px] object-contain"
              />
            </div>
          </div>

          {/* Divider */}
          <img
            src={line}
            alt=""
            className="reg-line"
          />

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="relative w-[200px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card1})` }}
            >
              <img
                src={iconPrize}
                alt=""
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-48"
              />
            </div>

            <div
              className="relative w-[200px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card2})` }}
            >
              <img
                src={iconOffline}
                alt=""
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-48"
              />
            </div>

            <div
              className="relative w-[200px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card3})` }}
            >
              <img
                src={iconClock}
                alt=""
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-64"
              />
            </div>

            <div
              className="relative w-[200px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card4})` }}
            >
              <img
                src={iconParticipants}
                alt=""
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-28"
              />
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src={keepOut}
            alt="Keep Out"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

// ===== Main page =====
export default function Home() {
  const targetDate = new Date("August 21, 2026 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full text-white">

      <div className="fixed inset-0 bg-black/85 -z-40" />

      {/* =============================================================== */}
      {/*                            NAVBAR                              */}
      {/* =============================================================== */}

      <Navbar />

      {/* =============================================================== */}
      {/*                        HERO SECTION                            */}
      {/* Assigned To :                                                  */}
      {/* Instructions:                                                  */}
      {/* 1. Write ONLY inside this section.                             */}
      {/* 2. Do not modify any code outside this block.                  */}
      {/* 3. Use relative positioning whenever possible.                 */}
      {/* 4. Do NOT add another background.                             */}
      {/* 5. Keep the design responsive.                                */}
      {/* =============================================================== */}



      <section id="hero" className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[412/915] lg:aspect-[1513/732]">

          {/* ================= Decorative Stickers ================= */}


          <img className="absolute h-[26.21vw] -right-[9vw] top-[-8vw] lg:right-[-3vw] lg:top-[-4vw] lg:h-[13.55vw] popup" src={wheel} />
          <img className="absolute h-[19.42vw] left-[25.1vw] lg:left-[20.72vw] lg:h-[8.56vw] popup" src={specialdeal} />
          <img className="absolute h-[3.61vw] lg:left-[61.11vw] lg:h-[7.78vw] lg:top-[-1.11vw] hidden lg:block popup" src={lightning} />

          {/* FIXED: Brought the missing white spark sticker back to its top-left quadrant position */}
          <img className="absolute h-[16.5vw] top-[27.18vw] left-[4.85vw] lg:top-[18.06vw] lg:left-[10.44vw] lg:h-[7.5vw] popup" src={spark} />

          <img className="absolute h-[25.24vw] top-[170vw] left-[-3vw] lg:top-[31.68vw] lg:left-[-4vw] lg:h-[12vw] popup" src={check} />

          <img className="absolute h-[21.36vw] top-[165vw] -right-[7.77vw] lg:top-[30vw] lg:right-[-1.78vw] lg:h-[8vw] popup" src={qrcode} />

          <img className="absolute h-[29.13vw] top-[34.95vw] rotate-6 -right-[8.74vw] lg:top-[9.17vw] lg:right-[-6.67vw] lg:h-[16.67vw] popup" src={triangle} />

          <img className="absolute h-[38.83vw] top-[75.34vw] -left-[3.88vw] lg:top-[16.67vw] lg:h-[15.83vw] lg:left-[-2.22vw] popup" src={coin} />

          <img className="absolute -rotate-10 top-[199.03vw] -right-[7.77vw] h-[28.16vw] lg:h-[16.67vw] lg:right-[-5.56vw] lg:top-[34.72vw] popup" src={smile} />

          {/* FIXED: Repositioned Crown to match Figma (Higher up, further right, proper scaling) */}
          <img className="absolute top-[19.42vw] left-[77.67vw] h-[21.36vw] lg:top-[13vw] lg:left-[78%] lg:h-[11vw] popup" src={crown} />

          <img className="absolute -rotate-11 top-[154vw] right-[1.94vw] w-[10.68vw] lg:top-[22.78vw] lg:right-[5.28vw] lg:w-[5.56vw] popup" src={pose} />

          <img className="absolute h-[34.95vw] top-[-5.83vw] -left-[26.21vw] lg:left-[-8.33vw] lg:top-[-1.94vw] lg:h-[18.06vw]" src={keepout} />

          <img className="absolute top-[185.15vw] -left-[5.83vw] h-[39.81vw] lg:h-[20vw] lg:-left-[0.56vw] lg:top-[34.17vw] popup" src={spray} />

          <img className="absolute right-[9.5vw] -top-[11.65vw] h-[33.01vw] lg:right-[5.28vw] lg:-top-[8.61vw] lg:h-[20.83vw] popup" src={punk} />

          {/* Mobile caution */}
          <img
            className="absolute block lg:hidden max-w-[118vw] h-[12.62vw] top-[212vw] popup"
            src={caution}
            alt=""
          />

          {/* Desktop caution */}
          <img
            className="absolute hidden lg:block left-1/2 -translate-x-1/2 top-[43.2vw] w-full max-w-[1800px] h-auto popup"
            src={caution}
            alt=""
          />

          <img
            className="absolute w-[12.62vw] left-[25.24vw] top-[171.26vw] lg:top-[31.67vw] lg:left-[16.11vw] lg:w-[5.28vw] popup"
            src={tag}
            alt=""
          />

          {/* ================= CENTER CONTENT ================= */}

          <div className="absolute inset-0 flex justify-center pt-[50.42vw] lg:pt-[7.5vw]">

            <div className="flex flex-col items-center gap-[3.5vw] lg:gap-[0.2vw]">

              {/* Logo */}
              <img
                src={myLogo}
                className="block lg:hidden w-[87.25vw] fade-in mb-[10vw]"
                alt=""
              />
              <img
                src={biglogo}
                className="hidden lg:block w-[50vw] fade-in"
                alt=""
              />

              {/* Timer */}
              <div className="relative">
                <img
                  src={timerbg}
                  className="w-[87.96vw] lg:w-[40vw]"
                  alt=""
                />
                <div
                  className="
          absolute inset-0
          flex items-center justify-center
          text-black
          font-mono
          font-bold
          pt-1.5
          text-[7.8vw]
          lg:text-[4vw]
        "
                >
                  {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col lg:flex-row gap-[0.5vw] lg:gap-[1.8vw] mt-[5vw] lg:mt-[0px]">

                <a
                  href="https://unstop.com/o/PxlVshT?utm_medium=Share&utm_source=aditysin8668&utm_campaign=Online_coding_challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links"
                >
                  <img
                    src={register}
                    className="h-[20.65vw] lg:h-[5.56vw] popup"
                    alt=""
                  />
                </a>

                <a
                  href="https://chat.whatsapp.com/KO79BBDUoqH7RqcepXjB1J?s=cl&p=a&ilr=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links"
                >
                  <img
                    src={join}
                    className="h-[21.65vw] lg:h-[5.56vw] popup"
                    alt=""
                  />
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =============================================================== */}
      {/*                      ABOUT BRAINWAVE                           */}
      {/* =============================================================== */}
      <section id="about" className="relative w-full pt-20 overflow-x-hidden">

        <div
          className="
            relative
            w-full
            min-h-[470px]
            lg:h-[48vh]

            px-4
            md:px-10
            lg:px-12
            xl:px-16
          "
        >

          {/* Content */}
          <div className="relative z-10 w-full">

            {/* Heading */}
            <div className="relative flex items-start">

              <img
                src={aboutBrainwaveHeading}
                alt="About Brainwave"
                className="
                  w-full
                  max-w-[340px]

                  sm:max-w-[360px]
                  md:max-w-[520px]
                  lg:max-w-[631px]

                  h-auto
                  shrink-0

                  select-none
                  pointer-events-none
                "
              />

              {/* Desktop line */}
              <img
                src={lineRightAbout}
                alt=""
                className="
                  hidden
                  md:block

                  ml-5
                  mt-3

                  w-[220px]
                  lg:w-[300px]
                  xl:w-[720px]

                  h-auto
                  object-contain
                  shrink-0

                  pointer-events-none
                  select-none
                "
              />

              {/* Smiley */}
              <img
                src={smileyAbout}
                alt=""
                className="
                  absolute

                  -top-6
                  -right-14

                  w-20
                  sm:w-14

                  md:w-20
                  lg:w-28
                  xl:w-36

                  md:top-0
                  md:-right-20

                  lg:-top-8
                  lg:-right-32

                  pointer-events-none
                  select-none
                "
              />

            </div>

            {/* Paragraph */}
            <div className="mt-8 mb-8">

              <p
                className="
                  font-exo
                  font-medium

                  text-base
                  sm:text-lg
                  md:text-2xl
                  lg:text-[32px]

                  leading-relaxed
                  lg:leading-[1.45]

                  text-white
                "
              >
                BrainWave 2026, organized by ACTS – EDC (Association for Computer
                Technology Students – EDC), is New Delhi's biggest student-led
                hackathon, bringing together students, innovators, developers,
                designers, and entrepreneurs from across India and around the world.
                Returning for its 2nd edition, BrainWave 2026 is an immersive
                24-hour hackathon where participants collaborate, innovate, and
                build impactful solutions to solve real-world challenges.

              </p>
              <br />
              <br />
              <p
                className="
                  font-exo
                  font-bold

                  text-base
                  sm:text-lg
                  md:text-2xl
                  lg:text-[32px]

                  leading-relaxed
                  lg:leading-[1.45]

                  text-white
                "
              >
                Join us as we shape the future of innovation, push the boundaries
                of technology, and empower the next generation of changemakers at
                BrainWave 2026.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* TIMELINE SECTION */}
      <div className='relative min-h-screen'>
        <TimelineSection />
      </div>


      <Tracks/>


      {/* PRIZE POOL SECTION */}
      <PrizeSection />

      {/* REGISTRATION SECTION */}
      <RegistrationSection />

      {/* =============================================================== */}
      {/*                         SPONSORS                              */}
      {/* =============================================================== */}
      <section id="sponsors" className="relative w-full py-10 md:py-24 overflow-hidden hidden">

        <div className="w-full px-4 md:px-8 lg:px-12">

          {/* Heading */}
          <div className="flex items-center justify-center gap-5 mb-10 md:mb-16 w-full">

            <img
              src={lineLeftAbout}
              alt=""
              className="
              hidden
              md:block

              flex-1

              h-3
              object-fill
              min-w-0
            "
            />

            <img
              src={sponsorsHeading}
              alt="Sponsors"
              className="
              w-[300px]
              md:w-[420px]
              lg:w-[520px]
              
              
              h-auto
              shrink-0
            "
            />

            <img
              src={lineRightAbout}
              alt=""
              className="
              hidden
              md:block

              flex-1

              h-3
              object-fill
              min-w-0
            "
            />

          </div>

          {/* Carousel */}

          <div
            className="
              overflow-hidden
              rounded-3xl
              
              md:py-8

              relative
              isolate
            "
          >
            <div className="sponsors-track mt-5">

              {[...sponsors, ...sponsors].map((sponsor, index) => (

                <div
                  key={`${sponsor.id}-${index}`}
                  className="
                    flex
                    items-center
                    justify-center

                    shrink-0

                    w-[80px]
                    h-[80px]

                    sm:w-[150px]
                    sm:h-[150px]

                    md:w-[190px]
                    md:h-[190px]

                    lg:w-[250px]
                    lg:h-[250px]
                  "
                >

                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    loading="lazy"
                    draggable={false}
                    className="
                      w-[120px]
                      h-[120px]

                      md:w-[150px]
                      md:h-[150px]

                      lg:w-[180px]
                      lg:h-[180px]

                      object-contain

                      select-none
                      pointer-events-none
                    "
                  />

                </div>

              ))}

            </div>
          </div>

        </div>

      </section>

      {/* =============================================================== */}
      {/*                    MENTORS / JUDGES                           */}
      {/* =============================================================== */}
      <section id="mentors" className="relative w-full mt-10">

        {/* =============== MENTORS START =============== */}

        <div className="w-full px-4 md:px-8 lg:px-12 py-10 md:py-24">

          {/* Heading */}

          <div className="flex items-center justify-center gap-5 mb-16 w-full">

            <img
              src={lineLeftAbout}
              alt=""
              className="
                hidden
                md:block

                flex-1

                h-3
                object-fill
                min-w-0
              "
            />

            <img
              src={mentorsHeading}
              alt="Mentors & Judges"
              className="
                w-[420px]
                sm:w-[480px]
                md:w-[640px]
                lg:w-[840px]

                h-auto
                object-contain

                shrink-0
              "
            />

            <img
              src={lineRightAbout}
              alt=""
              className="
                hidden
                md:block

                flex-1

                h-3
                object-fill
                min-w-0
              "
            />


          </div>

          {/* ================= Mentor Carousel ================= */}

          <div className="mt-5 md:mt-25">

            <Splide
              extensions={{ AutoScroll }}
              options={{
                type: "loop",

                perPage: 7,
                gap: "24px",

                arrows: true,
                pagination: true,
                drag: true,

                autoWidth: false,

                autoScroll: {
                  autoStart: true,
                  speed: 0.7,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                },

                breakpoints: {
                  1700: {
                    perPage: 5,
                    gap: "20px",
                  },
                  1200: {
                    perPage: 4,
                    gap: "36px",
                  },

                  900: {
                    perPage: 3,
                    gap: "32px",
                  },

                  640: {
                    perPage: 2,
                    gap: "24px",
                  },

                  480: {
                    fixedWidth: "170px",
                    focus: "center",
                    gap: "16px",
                    padding: "2.5rem",
                    arrows: false,
                    pagination: true,
                  },
                },
              }}
            >
              {people.map((person) => (
                <SplideSlide key={person.id}>

                  <div className="flex justify-center mb-5">
                    <PersonCard person={person} />
                  </div>

                </SplideSlide>
              ))}
            </Splide>

          </div>

        </div>

        {/* ================ MENTORS END ================ */}

      </section>

      {/* =============================================================== */}
      {/*                            FAQ                                */}
      {/* =============================================================== */}
      <section id="faq" className="relative w-full">
        <div className="w-full h-full  relative">
          <div className=''>
            <img className='hidden lg:block' src={Faq} alt='faq'/> 
            <img className='block lg:hidden h-[8vw]' src={Faq2} alt='faq'/> 
          </div>
          <div className='main-content'>
            <ul className="accordion">
              <li className="rounded-2xl overflow-hidden ">
                <input type="radio" name="accordion" id="first" />
                <label htmlFor="first">What is Brainwave?</label>
                <div className="content">
                  <p className="p-4">BrainWave is the flagship hackathon organized by ACTS EDC, bringing together innovative minds to solve real-world challenges through technology, creativity, and collaboration. The event provides participants with an opportunity to learn, build impactful solutions, network with industry experts, and showcase their skills in a competitive environment.</p>
                </div>
              </li>
              <li className="rounded-2xl overflow-hidden ">
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second">What is the Code of Conduct for BrainWave?</label>
                <div className="content">
                  <p className="p-4">All participants are expected to maintain a respectful, inclusive, and professional environment throughout the event. Any form of misconduct, discrimination, harassment, plagiarism, or violation of the event guidelines may result in disqualification. Participants are encouraged to read the complete Code of Conduct before the event. <a href="https://docs.google.com/document/d/1OP3FN9Tqv-fwOR1cGzRP5MLUuoGF-EXNmiMAm4ZF3uY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500">*Read the full Code of Conduct here*</a></p>
                </div>
              </li>
              <li className="rounded-2xl overflow-hidden ">
                <input type="radio" name="accordion" id="Third" />
                <label htmlFor="Third">Who can participate in BrainWave, and can students from different branches form a team?</label>
                <div className="content">
                  <p className="p-4">BrainWave is open to all eligible students who are passionate about innovation, technology, and problem-solving. Teams must consist of 2–4 members, and interdisciplinary teams with students from different branches or skill sets are highly encouraged, as they bring diverse perspectives and strengthen project development.</p>
                </div>
              </li>
              <li className="rounded-2xl overflow-hidden ">
                <input type="radio" name="accordion" id="forth" />
                <label htmlFor="forth">What is the team size, and is there any registration fee?</label>
                <div className="content">
                  <p className="p-4">Each team must consist of 2–4 members. Solo participants and teams with more than four members are not eligible to participate. Registration for BrainWave is completely free, with no participation fee.</p>
                </div>
              </li>
              <li className="rounded-2xl overflow-hidden ">
                <input type="radio" name="accordion" id="fifth" />
                <label htmlFor="fifth">Does brainwave 2026 have any offical community channel ?</label>
                <div className="content">
                  <p className="p-4">Yes, Join the official <a href="https://chat.whatsapp.com/KO79BBDUoqH7RqcepXjB1J?s=cl&p=a&ilr=2" target="_blank" rel="noopener noreferrer" className="text-green-500">BrainWave WhatsApp community</a> , all important announcements, schedules, and event updates will be shared there.</p>
                </div>
              </li>
              <li className="rounded-2xl overflow-hidden ">
                <input type="radio" name="accordion" id="sixth" />
                <label htmlFor="sixth">Can we use existing projects, AI tools, or open-source libraries?</label>
                <div className="content">
                  <p className="p-4">No. All projects and code must be developed during the hackathon. Pre-built projects or copied code are strictly prohibited and will lead to disqualification if plagiarism is detected. However, participants are allowed to use AI tools, open-source libraries, and frameworks, provided they are used ethically and proper credit is given where applicable.</p>
                </div>
              </li>
            </ul>
          </div>
          <img className='absolute h-[13vw] top-[205vw] left-[2vw] lg:top-[54.56vw] lg:left-[2.22vw] lg:h-[6.50vw]' src={MyLogo} alt='logo'/>
          <img className='absolute h-[14vw] top-[205vw] lg:h-[5.10svw] lg:top-[55.38vw] -right-[0.5vw]' src={decor} alt='decor'/>
          <div className="social-links absolute top-[207.55vw] right-[2vw] lg:top-[56.27svw] lg:right-[1.93vw] lg:w-[14.91vw] lg:h-[3.55vw] flex flex-row justify-evenly gap-1 items-center bg-black rounded-xl">
            <a href="https://linktr.ee/ACTS_EDC" target="_blank" rel="noopener noreferrer">
              <img className='w-[8vw] lg:w-[3.3vw] rounded-xl' src={linktree} alt="linktree" />
            </a>
            <a href="https://www.instagram.com/acts_edc/" target="_blank" rel="noopener noreferrer">
              <img className='w-[8vw] lg:w-[3.3vw] rounded-xl' src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/acts-edc/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <img className='w-[8vw] lg:w-[3.3vw] rounded-xl' src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=acts.edc@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className='w-[8vw] lg:w-[3.3vw] rounded-xl' src={gmail} alt="gmail" />
            </a>
          </div>
        </div>
      </section>

      {/* =============================================================== */}
      {/*                           FOOTER                              */}
      {/* =============================================================== */}
      <footer id="footer" className="relative w-full">
        {/* ================= FOOTER START ============== */}


        {/* ================== FOOTER END =============== */}
      </footer>

    </main >
  );
}