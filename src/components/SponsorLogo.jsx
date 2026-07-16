export default function SponsorLogo({ sponsor }) {
  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        justify-center

        transition-all
        duration-300

        hover:opacity-80
      "
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        draggable={false}
        loading="lazy"
        className="
          max-w-full

          h-20
          sm:h-24
          md:h-28
          lg:h-32

          w-auto

          object-contain
          select-none
        "
      />
    </a>
  );
}