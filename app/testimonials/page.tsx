import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Testimonials from '@/components/sections/Testimonials';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}