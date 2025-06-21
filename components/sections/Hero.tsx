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
    <section id="hero" className="min-h-screen flex items-end sm:items-center justify-center relative overflow-hidden py-12 sm:py-0">
      {/* Background with spiritual gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>

      {/* Decorative spiritual elements - adjusted for mobile */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-amber-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-8 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-200 rounded-full opacity-30 animate-pulse delay-500"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20 sm:pb-0 pt-20 sm:pt-0">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <div className="animate-fade-in w-full max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 mb-4 sm:mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
                Guru Tattva
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-800 leading-relaxed mx-auto max-w-3xl">
              Join us in the divine journey with <span className="font-semibold text-orange-900">Shree Shivkrupanand Swami</span>.
              Experience spiritual transformation through seva, devotion, and community service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto">
            <Button
              onClick={() => scrollToSection('#offerings')}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto min-w-[200px]"
            >
              <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Join Our Seva
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <Button
              onClick={() => scrollToSection('#donations')}
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-700 hover:bg-orange-100 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto min-w-[200px]"
            >
              <HandHeart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Donate for Noble Cause
            </Button>

            <Link href="/blog" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                size="lg"
                className="text-orange-700 hover:text-orange-800 hover:bg-orange-100 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto min-w-[200px]"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Read Our Blog
              </Button>
            </Link>
          </div>

          {/* Statistics */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800 mb-2">5+</div>
                <div className="text-orange-700 text-sm sm:text-base">Ashrams Established</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800 mb-2">50,000+</div>
                <div className="text-orange-700 text-sm sm:text-base">Devotees Connected</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-800 mb-2">₹10L+</div>
                <div className="text-orange-700 text-sm sm:text-base">Monthly Donations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
