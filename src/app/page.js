import Navigation from './components/Navigation';
import SplitSection from './components/SplitSection';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <SplitSection />
      <Hero />
    </main>
  );
}
