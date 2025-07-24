'use client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-black text-white py-24">
          <div className="container mx-auto px-8 h-full flex items-center justify-center">
            <div className="max-w-3xl text-center">
              <h1 className="text-3xl font-light mb-6 group-hover:cursor-pointer"><span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Vores Ydelser</h1>
              <p className="text-lg font-light tracking-wide leading-relaxed">
                + Professionelt håndværk med sans for detaljer
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Service 1 */}
            <div className="flex flex-col">
              <div className="relative aspect-video mb-6">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-light">[billede]</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 group-hover:cursor-pointer"><span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Tømrerarbejde</h3>
              <p className="text-lg font-light text-gray-600 mb-6 leading-relaxed">
                Specialiseret i alt fra mindre renoveringer til store byggeprojekter. 
                Vi leverer kvalitetsarbejde med fokus på holdbare løsninger og æstetisk finish.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-lg font-light hover:underline mt-auto text-left"
              >
                + Kontakt os om dette
              </button>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col">
              <div className="relative aspect-video mb-6">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-light">[billede]</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 group-hover:cursor-pointer"><span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Snedkerarbejde</h3>
              <p className="text-lg font-light text-gray-600 mb-6 leading-relaxed">
                Skræddersyede løsninger i træ, fra indbyggede møbler til specialfremstillede 
                køkkener. Vi kombinerer traditionelt håndværk med moderne design.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-lg font-light hover:underline mt-auto text-left"
              >
                + Kontakt os om dette
              </button>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col">
              <div className="relative aspect-video mb-6">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-light">[billede]</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 group-hover:cursor-pointer"><span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Renovering</h3>
              <p className="text-lg font-light text-gray-600 mb-6 leading-relaxed">
                Totalrenovering af både private hjem og erhvervsejendomme. Vi håndterer 
                projektet fra start til slut med fokus på kvalitet og tidsstyring.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-lg font-light hover:underline mt-auto text-left"
              >
                + Kontakt os om dette
              </button>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col">
              <div className="relative aspect-video mb-6">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-light">[billede]</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 group-hover:cursor-pointer"><span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Vinduer & Døre</h3>
              <p className="text-lg font-light text-gray-600 mb-6 leading-relaxed">
                Professionel montering og udskiftning af vinduer og døre. Vi rådgiver om 
                energioptimering og sikrer en præcis installation.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-lg font-light hover:underline mt-auto text-left"
              >
                + Kontakt os om dette
              </button>
            </div>
          </div>
        </section>

        {/* Contact Modal */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </main>
      <Footer />
    </div>
  );
}
