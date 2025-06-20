import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Gallery from '@/components/sections/Gallery';

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}