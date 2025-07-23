'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Desktop Navigation - Left Side */}
          <div className="hidden sm:flex sm:items-center">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Forside
              </Link>
              <Link href="/ydelser" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Ydelser
              </Link>
              <Link href="/projekter" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Projekter
              </Link>
            </div>
          </div>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">[Firma Navn]</span>
            </Link>
          </div>
          
          {/* Right side spacer for balance */}
          <div className="w-[200px]"></div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white border-t`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900">
            Forside
          </Link>
          <Link href="/ydelser" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900">
            Ydelser
          </Link>
          <Link href="/projekter" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900">
            Projekter
          </Link>
          <Link href="/om-os" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900">
            Om Os
          </Link>
          <Link href="/kontakt" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
