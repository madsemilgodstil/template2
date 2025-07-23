'use client';
import Image from 'next/image';

export default function SplitSection() {
  return (
    <section className="h-screen w-full flex">
      {/* Left Column */}
      <div className="w-1/2 h-full relative group cursor-pointer">
        <Image
          src="/stock_1.jpg"
          alt="Venstre kolonne billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-10">
          <h2 className="text-4xl font-bold mb-4">Håndværk & Kvalitet</h2>
          <p className="text-xl text-center">
            Professionelt arbejde med fokus på detaljer og holdbare løsninger
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 h-full relative group cursor-pointer">
        <Image
          src="/stock_2.jpg"
          alt="Højre kolonne billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-10">
          <h2 className="text-4xl font-bold mb-4">Moderne Design</h2>
          <p className="text-xl text-center">
            Tidssvarende løsninger der matcher dine behov og ønsker
          </p>
        </div>
      </div>
    </section>
  );
}
