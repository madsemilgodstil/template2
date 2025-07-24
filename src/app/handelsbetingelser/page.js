'use client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-black text-white py-24">
          <div className="container mx-auto px-8 h-full flex items-center justify-center group">
            <div className="max-w-3xl text-center">
              <h1 className="text-3xl font-light mb-6">
                <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>
                Handelsbetingelser
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-4">
                  <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>
                  Generelt
                </h2>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Disse handelsbetingelser gælder for alle aftaler om udførelse af 
                  håndværksarbejde mellem [Firmanavn] og kunden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4">
                  <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>
                  Tilbud og Aftaler
                </h2>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Alle tilbud er gældende i 30 dage fra tilbudsdato, medmindre andet er 
                  angivet. Aftaler er først bindende, når vi har bekræftet ordren skriftligt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4">
                  <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>
                  Betaling
                </h2>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Betalingsbetingelser er 8 dage netto, medmindre andet er aftalt. 
                  Ved forsinket betaling beregnes renter efter renteloven.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
