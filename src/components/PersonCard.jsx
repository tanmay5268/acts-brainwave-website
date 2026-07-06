import linkedinIcon from "../assets/sponsorsandmentors/linkedin.jpg"

export default function PersonCard({ person }) {
  return (
    <div
      className="
        w-[180px]
        h-[290px]

        sm:w-[180px]
        sm:h-[285px]

        md:w-[210px]
        md:h-[325px]

        lg:w-[232px]
        lg:h-[346px]

        rounded-[18px]
        border-2
        border-black

        bg-linear-to-r
        from-[#DFFF4F]
        via-[#F5FFD8]
        to-[#FFFDF2]

        p-3

        flex
        flex-col

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_0_25px_rgba(220,255,80,.22)]
      "
    >
      {/* Image */}
      <div className="relative">

        <div
          className="
            aspect-square
            rounded-xl
            overflow-hidden

            border
            border-black
          "
        >
          <img
            src={person.image}
            alt={person.name}
            draggable={false}
            className="
              w-full
              h-full
              object-cover
              select-none
            "
          />
        </div>

        {/* Role Badge */}

        <div
          className="
            absolute

            left-1/2
            -bottom-3

            -translate-x-1/2

            px-3
            py-0.5
            md:px-4
            md:py-1

            rounded-full

            bg-[#06160F]

            border-2
            border-lime-300

            text-white
            text-[10px]
            md:text-[11px]
            font-medium

            whitespace-nowrap
          "
        >
          {person.role}
        </div>

      </div>

      {/* Bottom */}

      <div
        className="
          flex-1

          flex
          flex-col

          pt-6
        "
      >

        {/* Name */}

        <h3
          className="
            text-center

            text-black

            font-bold
            text-m
            md:text-lg

            leading-tight
          "
        >
          {person.name}
        </h3>

        {/* Job + LinkedIn */}

        <div
            className="
                mt-auto

                flex
                items-end
                justify-between

                gap-2
            "
        >

          <p
            className="
                  flex-1
                  text-[13px]
                  md:text-[16px]
                  leading-5

                  font-medium

                  text-black/80
              "
          >
            {person.description}
          </p>

          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="
                  w-5
                  h-5
                  md:w-7
                  md:h-7

                  object-contain

                  opacity-80
                  hover:opacity-100

                  transition
                "
              />
            </a>
          )}

        </div>

      </div>
    </div>
  );
}