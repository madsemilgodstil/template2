"use client";
import Image from "next/image";

export default function GridSection() {
  return (
    <section className="w-full grid grid-cols-2 grid-rows-2 h-screen">
      {/* Top Left */}
      <div className="relative group cursor-pointer">
        <Image
          src="/stock_1.jpg"
          alt="Første billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-8 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">
            + Kvalitet i hver detalje
          </p>
        </div>
      </div>

      {/* Top Right */}
      <div className="relative group cursor-pointer">
        <Image
          src="/stock_2.jpg"
          alt="Andet billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-8 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">+ Tidløst design</p>
        </div>
      </div>

      {/* Bottom Left */}
      <div className="relative group cursor-pointer">
        <Image
          src="/stock_3.jpg"
          alt="Tredje billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-8 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">
            + Bæredygtige materialer
          </p>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="relative group cursor-pointer">
        <Image
          src="/stock_4.jpg"
          alt="Fjerde billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-8 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">
            + Professionel rådgivning
          </p>
        </div>
      </div>
    </section>
  );
}
