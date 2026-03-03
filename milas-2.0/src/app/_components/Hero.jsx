import Image from "next/image";
import HeroDescription from "./HeroDescription";

export default function Hero() {
  return (
    <section
      id="hero"
      className="lg:flex items-center gap-10 w-[90%] m-auto bg-white shadow-xl"
    >
      <Image
        src="/img/hero-image-1600.webp"
        alt="Taller de tractocamiones con sistema de lubricación MILAS"
        width={1600}
        height={1200}
        className="w-full h-auto object-cover aspect-4/3 lg:aspect-auto lg:w-1/2 lg:h-full"
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority
      />
      <HeroDescription />
    </section>
  );
}
