'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          {/* Left Side */}
          <div className="flex flex-col gap-1">
            <h3 className="font-light mb-2">KONTAKT OS PÅ</h3>
            <a href="mailto:support@woodblock.dk" className="text-sm hover:underline">
              E-mail: support@woodblock.dk
            </a>
            <a href="tel:+4553953334" className="text-sm hover:underline">
              Telefon: 5395 3334
            </a>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-2xl font-light">[logo]</span>
            <span className="text-sm font-light">[certifikat]</span>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-end gap-1">
            <h3 className="font-light mb-2">FIND OS PÅ</h3>
            <a 
              href="https://instagram.com/woodblock" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Instagram: @woodblock
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
