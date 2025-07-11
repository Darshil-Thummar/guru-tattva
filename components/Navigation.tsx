'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../assets/img/Gurutattva-Logo-Regi.png'
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Seva', href: '/#offerings' },
    { name: 'Ashrams', href: '/#ashrams' },
    { name: 'Blog', href: '/blog' },
    { name: 'Awards', href: '/awards' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        window.location.href = href;
        return;
      }
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) {
      return pathname === '/' && typeof window !== 'undefined' && window.location.hash === href.substring(1);
    }
    return pathname === href;
  };

  // Check if we're on the home page to determine navbar styling
  const isHomePage = pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || !isHomePage
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200'
        : 'bg-white/20 backdrop-blur border-b border-white/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt={'Logo'} height={40}/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-200 font-medium ${
                    scrolled || !isHomePage
                      ? (isActive(item.href) ? 'text-orange-800' : 'text-orange-700 hover:text-orange-800')
                      : (isActive(item.href) ? 'text-orange-200' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    scrolled || !isHomePage
                      ? (isActive(item.href) ? 'text-orange-800' : 'text-orange-700 hover:text-orange-800')
                      : (isActive(item.href) ? 'text-orange-200' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link href="/login">
              <Button
                className="bg-orange-100 hover:bg-orange-200 text-orange-700 shadow px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mr-2"
              >
                Login
              </Button>
            </Link>
            <Button
              onClick={() => scrollToSection('/#donations')}
              className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-200 ${
                scrolled || !isHomePage ? 'text-orange-700 hover:text-orange-800' : 'text-white hover:text-orange-200'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-orange-200 rounded-b-lg shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-orange-700 hover:text-orange-800 hover:bg-orange-50 rounded-lg font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-orange-700 hover:text-orange-800 hover:bg-orange-50 rounded-lg font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link href="/login">
                <Button
                  className="w-full mt-2 bg-orange-100 hover:bg-orange-200 text-orange-700 shadow font-semibold mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Button>
              </Link>
              <Button
                onClick={() => scrollToSection('/#donations')}
                className="w-full mt-2 bg-orange-600 hover:bg-orange-700 shadow-lg font-semibold"
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
