import Navigation from './components/Navigation';
import SplitSection from './components/SplitSection';
import Hero from './components/Hero';
import GridSection from './components/GridSection';
import HeroLight from './components/HeroLight';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <SplitSection />
      <Hero />
      <GridSection />
      <HeroLight />
    </main>
  );
}
