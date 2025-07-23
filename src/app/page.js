import Navigation from './components/Navigation';
import SplitSection from './components/SplitSection';
import Hero from './components/Hero';
import GridSection from './components/GridSection';
import HeroLight from './components/HeroLight';
import GridWithText from './components/GridWithText';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <Navigation />
        <SplitSection />
        <Hero />
        <GridSection />
        <HeroLight />
        <GridWithText />
      </main>
      <Footer />
    </div>
  );
}
