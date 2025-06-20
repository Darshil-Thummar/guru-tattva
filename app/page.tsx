import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Offerings from '@/components/sections/Offerings';
import AshramProgress from '@/components/sections/AshramProgress';
import Donations from '@/components/sections/Donations';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Offerings />
      <AshramProgress />
      <Donations />
      <Footer />
    </main>
  );
}