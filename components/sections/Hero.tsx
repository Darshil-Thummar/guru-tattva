'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, HandHeart } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with spiritual gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>
      
      {/* Decorative spiritual elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-orange-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
                Guru Tattva
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-800 max-w-4xl mx-auto leading-relaxed">
              Join us in the divine journey with <span className="font-semibold text-orange-900">Shree Shivkrupanand Swami</span>. 
              Experience spiritual transformation through seva, devotion, and community service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={() => scrollToSection('#offerings')}
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Seva
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#donations')}
              variant="outline" 
              size="lg"
              className="border-orange-500 text-orange-700 hover:bg-orange-100 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <HandHeart className="mr-2 h-5 w-5" />
              Donate for Noble Cause
            </Button>
            
            <Link href="/blog">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-orange-700 hover:text-orange-800 hover:bg-orange-100 px-8 py-3 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Read Our Blog
              </Button>
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-orange-800 mb-2">5+</div>
              <div className="text-orange-700">Ashrams Established</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-orange-800 mb-2">50,000+</div>
              <div className="text-orange-700">Devotees Connected</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-orange-800 mb-2">₹10L+</div>
              <div className="text-orange-700">Monthly Donations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;