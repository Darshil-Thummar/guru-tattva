'use client';

import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Seva Opportunities', href: '/#offerings' },
    { name: 'Ashram Progress', href: '/#ashrams' },
    { name: 'Donate Now', href: '/#donations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const ashramLinks = [
    { name: 'Mahudi Ashram', location: 'Gujarat' },
    { name: 'Rajkot Ashram', location: 'Gujarat' },
    { name: 'Ajmer Ashram', location: 'Rajasthan' },
    { name: 'Dwarka Ashram', location: 'Gujarat (Under Construction)' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon:  <Facebook className="h-5 w-5" />, url: 'https://facebook.com/gurutattva' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/gurutattva' },
    { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com/gurutattva' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/gurutattva' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      if (window.location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-orange-900 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-300" />
              <span className="text-2xl font-bold text-orange-100">Guru Tattva</span>
            </div>
            <p className="text-orange-200 leading-relaxed">
              Spreading divine wisdom and serving humanity through the teachings of 
              Shree Shivkrupanand Swami. Join our spiritual journey of transformation 
              and community service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-orange-200">
                <Mail className="h-4 w-4 mr-2 text-orange-300" />
                <span className="text-sm">admin@gurutattva.org</span>
              </div>
              <div className="flex items-center text-orange-200">
                <Phone className="h-4 w-4 mr-2 text-orange-300" />
                <span className="text-sm">+91 7383626702</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-orange-100">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-orange-200 hover:text-orange-100 transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-orange-200 hover:text-orange-100 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Ashram Locations */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-orange-100">Our Ashrams</h3>
            <ul className="space-y-3">
              {ashramLinks.map((ashram, index) => (
                <li key={index} className="text-orange-200">
                  <div className="text-sm">
                    <div className="font-medium">{ashram.name}</div>
                    <div className="text-xs text-orange-300">{ashram.location}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-orange-100">Stay Connected</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-800 p-2 rounded-lg hover:bg-orange-700 transition-colors group"
                >
                  <div className="group-hover:scale-110 transition-transform text-orange-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-100">Newsletter</h4>
              <p className="text-orange-200 text-sm">
                Subscribe for weekly spiritual insights and ashram updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-orange-800 border border-orange-700 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm text-orange-100 placeholder-orange-300"
                />
                <button className="bg-orange-700 hover:bg-orange-600 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="h-4 w-4 text-orange-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-orange-300 text-sm">
              © 2024 Guru Tattva. All rights reserved. Built with devotion and love.
            </div>
            <div className="flex items-center space-x-6 text-sm text-orange-300">
              <button className="hover:text-orange-200 transition-colors">Privacy Policy</button>
              <button className="hover:text-orange-200 transition-colors">Terms of Service</button>
              <button className="hover:text-orange-200 transition-colors">Donation Policy</button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-orange-800">
            <p className="text-orange-300 text-sm italic">
              "Service to humanity is service to the divine" - Shree Shivkrupanand Swami
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;