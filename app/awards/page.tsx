import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Awards from '@/components/sections/Awards';

export default function AwardsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Awards />
      </div>
      <Footer />
    </main>
  );
}