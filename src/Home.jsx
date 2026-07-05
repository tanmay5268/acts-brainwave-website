import Navbar from "./components/Navbar";
import Dither from "./components/Dither";
// import timelineHeading from "../assets/timeline-heading.png";
// import elementImg from "../assets/element.png";
// import smileyImg from "../assets/smiley.png";
// import sprayImg from "../assets/spray.png";
// import prizeHeading from "../assets/prize-heading.png";
// import lineLeft from "../assets/line-left.png";
// import lineRight from "./assets/line-right.png";
// import prizeCards from "../assets/prize-cards.png";
// import registrationHeading from "../assets/registration-heading.png";
// import posterFrame from "../assets/poster-frame.png";
// import registerBtn from "../assets/register-btn.png";
// import iconPrize from "../assets/icon-prize.png";
// import iconOffline from "../assets/icon-offline.png";
// import iconClock from "../assets/icon-clock.png";
// import iconParticipants from "../assets/icon-participants.png";
// import decorStickers from "../assets/decor-stickers.jpeg";
// import card1 from "../assets/card1.png";
// import card2 from "../assets/card2.png";
// import card3 from "../assets/card3.png";
// import card4 from "../assets/card4.png";
// import line from "../assets/line.png";
// import actslogo from "../assets/actslogo.png";
// import keepOut from "../assets/keepout.png";
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

//    const events = [
//   { side: "left",  name: "Registrations Open",  date: "28 / 06 / 2026", info: "Sign up on the official portal" },
//   { side: "right", name: "Team Formation",       date: "10 / 07 / 2026", info: "Build your squad of 2–4 members" },
//   { side: "left",  name: "Problem Statements",   date: "20 / 07 / 2026", info: "Problem sets released to all teams" },
//   { side: "right", name: "Round 1 — Prelims",    date: "01 / 08 / 2026", info: "Online qualifying round" },
//   { side: "left",  name: "Round 2 — Semis",      date: "10 / 08 / 2026", info: "Top 50 teams advance" },
//   { side: "right", name: "Grand Finale",         date: "16 / 08 / 2026", info: "Live event · ₹20 Lakh prize pool" },
// ];




export default function Home() {

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-white">

      {/* ========================================================== */}
      {/*                  GLOBAL WEBSITE BACKGROUND                 */}
      {/* ========================================================== */}

      <div className="fixed inset-0 -z-50">

        <Dither
          waveColor={[0.9372549019607843, 0.9686274509803922, 0.24705882352941178]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />

      </div>

      {/* ========================================================== */}
      {/*                        DARK OVERLAY                        */}
      {/* ========================================================== */}

      <div className="fixed inset-0 bg-black/85 -z-40" />

      {/* =============================================================== */}
      {/*                            NAVBAR                              */}
      {/* =============================================================== */}

      <Navbar />



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                        HERO SECTION                            */}
      {/*                                                                */}
      {/* Assigned To :                                                  */}
      {/*                                                                */}
      {/* Instructions:                                                  */}
      {/* 1. Write ONLY inside this section.                             */}
      {/* 2. Do not modify any code outside this block.                  */}
      {/* 3. Use relative positioning whenever possible.                 */}
      {/* 4. Do NOT add another background.                             */}
      {/* 5. Keep the design responsive.                                */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="hero" className="relative w-full">

        {/* ================= HERO START ================= */}



        {/* ================= HERO END =================== */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                      ABOUT BRAINWAVE                           */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="about" className="relative w-full mt-20">

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
                  w-[360px]
                  sm:w-[360px]
                  md:w-[520px]
                  lg:w-[631px]

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
            <div className="mt-8">

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



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                    HIGHLIGHTS / GALLERY                        */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="gallery" className="relative w-full">

        {/* =============== GALLERY START =============== */}



        {/* ================ GALLERY END ================= */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                      COUNTDOWN TIMER                           */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="countdown" className="relative w-full">

        {/* ============== COUNTDOWN START ============== */}



        {/* =============== COUNTDOWN END =============== */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                         TIMELINE                              */}
      {/*                                                                */}
      {/* =============================================================== */}




      {/* =============================================================== */}
      {/*                                                                */}
      {/*                         SPONSORS                              */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="sponsors" className="relative w-full py-24 overflow-hidden">

        <div className="w-full px-4 md:px-8 lg:px-12">

          {/* Heading */}
          <div className="flex items-center gap-5 mb-16">

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

              py-8

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

                    w-[170px]
                    h-[170px]

                    md:w-[210px]
                    md:h-[210px]

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
      {/*                                                                */}
      {/*                    MENTORS / JUDGES                           */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="mentors" className="relative w-full">

        {/* =============== MENTORS START =============== */}

        <div className="w-full px-4 md:px-8 lg:px-12 py-24">

          {/* Heading */}

          <div className="flex items-center gap-5 mb-16">

            <img
              src={lineLeftAbout}
              alt=""
              className="
                      hidden
                      md:block

                      flex-1

                      h-3
                      object-fill
                    "
            />

            <img
              src={mentorsHeading}
              alt="Mentors"
              className="
                      w-[320px]
                      md:w-[450px]
                      lg:w-[560px]

                      h-auto
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
                    "
            />

          </div>

          {/* ================= Mentor Carousel ================= */}

          <div className="mt-16">

            <Splide
              options={{
                type: "loop",

                perPage: 7,
                perMove: 1,

                gap: "24px",

                autoplay: true,
                interval: 3000,

                pauseOnHover: true,
                pauseOnFocus: true,

                arrows: true,
                pagination: true,

                drag: true,

                speed: 800,

                breakpoints: {
                  1800: {
                    perPage: 6,
                  },

                  1500: {
                    perPage: 5,
                  },

                  1200: {
                    perPage: 4,
                  },

                  900: {
                    perPage: 3,
                  },

                  640: {
                    perPage: 2,
                  },

                  480: {
                    perPage: 1,
                  },
                },
              }}
            >
              {people.map((person) => (
                <SplideSlide key={person.id}>

                  <div className="flex justify-center">
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
      {/*                                                                */}
      {/*                            FAQ                                */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="faq" className="relative w-full">

        {/* ================== FAQ START ================ */}



        {/* =================== FAQ END ================= */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                           FOOTER                              */}
      {/*                                                                */}
      {/* =============================================================== */}

      <footer id="footer" className="relative w-full">

        {/* ================= FOOTER START ============== */}



        {/* ================== FOOTER END =============== */}

      </footer>

    </main >
  );
}