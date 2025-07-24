'use client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-black text-white py-24">
          <div className="container mx-auto px-8 h-full flex items-center justify-center">
            <div className="max-w-3xl text-center">
              <h1 className="text-3xl font-light mb-6">+ Vores Team</h1>
              <p className="text-lg font-light tracking-wide leading-relaxed">
                + Mød vores dedikerede team af professionelle håndværkere
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="flex flex-col">
              <div className="relative aspect-square mb-6">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-light">[billede]</span>
                </div>
              </div>
              <h3 className="text-xl font-light mb-2">+ Anders Jensen</h3>
              <p className="text-lg font-light text-gray-600">Tømrer & Indehaver</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col">
              <div className="relative aspect-square mb-6">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-light">[billede]</span>
                </div>
              </div>
              <h3 className="text-xl font-light mb-2">+ Mads Nielsen</h3>
              <p className="text-lg font-light text-gray-600">Snedker</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col">
              <div className="relative aspect-square mb-6">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-light">[billede]</span>
                </div>
              </div>
              <h3 className="text-xl font-light mb-2">+ Peter Madsen</h3>
              <p className="text-lg font-light text-gray-600">Tømrer</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
