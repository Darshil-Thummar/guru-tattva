import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Blog from '@/components/sections/Blog';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Blog />
      </div>
      <Footer />
    </main>
  );
}