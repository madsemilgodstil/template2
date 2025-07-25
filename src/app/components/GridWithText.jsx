'use client';
import Image from 'next/image';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function GridWithText() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <div className="absolute inset-0 flex flex-col justify-start items-start text-black p-8 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">
            <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Moderne løsninger
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
        <div className="absolute inset-0 flex flex-col justify-start items-start text-black p-8 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">
            <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Kreativt design
          </p>
        </div>
      </div>

      {/* Bottom Left - Text Section */}
      <div className="bg-white text-black p-16 flex flex-col">
        <h2 className="text-3xl font-light mb-8 group-hover:cursor-pointer"><span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Kvalitet & Håndværk</h2>
        <p className="text-lg font-light tracking-wide leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-lg font-light tracking-wide mt-auto hover:underline text-left"
        >
          + Kontakt os
        </button>
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>

      {/* Bottom Right */}
      <div className="relative group cursor-pointer">
        <Image
          src="/stock_3.jpg"
          alt="Fjerde billede"
          className="object-cover"
          fill
          loading="eager"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start text-black p-8 pt-32 z-10">
          <p className="text-lg font-light tracking-wide">
            <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Professionel service
          </p>
        </div>
      </div>
    </section>
  );
}
