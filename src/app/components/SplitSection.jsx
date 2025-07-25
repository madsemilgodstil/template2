"use client";
import Image from "next/image";

export default function SplitSection() {
  return (
    <section className="h-screen w-full flex">
      {/* Left Column */}
      <div className="w-1/2 h-full relative group cursor-pointer">
        <Image
          src="/mand2.jpg"
          alt="Venstre kolonne billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-start items-start text-black p-64 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">
            <span className="inline-block transition-transform group-hover:rotate-45 mr-1">
              +
            </span>
            Håndværk med sans for detaljer
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 h-full relative group cursor-pointer">
        <Image
          src="/mand.jpg"
          alt="Højre kolonne billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-start items-start text-black p-64 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">
            <span className="inline-block transition-transform group-hover:rotate-45 mr-1">
              +
            </span>
            Moderne løsninger til dit hjem
          </p>
        </div>
      </div>
    </section>
  );
}
