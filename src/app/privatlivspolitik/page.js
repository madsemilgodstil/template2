'use client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
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
                Privatlivspolitik
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
                  Dataansvarlig
                </h2>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  [Firmanavn] er dataansvarlig for behandlingen af de personoplysninger, 
                  som vi har modtaget om dig.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4">
                  <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>
                  Personoplysninger
                </h2>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Vi behandler følgende personoplysninger: Navn, e-mail, telefonnummer 
                  og eventuelle oplysninger, du selv giver os i forbindelse med din henvendelse.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4">
                  <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>
                  Formål
                </h2>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Vi behandler dine personoplysninger til følgende formål:
                  Besvarelse af henvendelser, udarbejdelse af tilbud, og opfyldelse af 
                  vores aftale med dig.
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
