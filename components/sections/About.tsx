'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '1995',
      title: 'Spiritual Awakening',
      description: 'Shree Shivkrupanand Swami began his spiritual journey',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2005',
      title: 'First Ashram - Mahudi',
      description: 'Established the first Shree Gurushaktidham Ashram',
      icon: <MapPin className="h-6 w-6" />
    },
    {
      year: '2012',
      title: 'Rajkot Ashram',
      description: 'Expanded divine presence with second ashram',
      icon: <MapPin className="h-6 w-6" />
    },
    {
      year: '2018',
      title: 'Ajmer Ashram',
      description: 'Established spiritual center in Rajasthan',
      icon: <MapPin className="h-6 w-6" />
    },
    {
      year: '2023',
      title: '50,000+ Devotees',
      description: 'Growing spiritual community worldwide',
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            About <span className="text-amber-700">Shree Shivkrupanand Swami</span>
          </h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            A divine soul dedicated to spreading spiritual wisdom and serving humanity through 
            the establishment of ashrams and community service initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-orange-900 mb-4">The Divine Journey</h3>
            <p className="text-lg text-orange-800 leading-relaxed">
              Shree Shivkrupanand Swami's journey began with a profound spiritual awakening that led him 
              to dedicate his life to serving humanity and spreading divine wisdom. Through years of 
              meditation, service, and devotion, he has established multiple ashrams across India.
            </p>
            <p className="text-lg text-orange-800 leading-relaxed">
              His teachings emphasize the importance of seva (selfless service), devotion, and 
              spiritual practice. Under his guidance, thousands of devotees have found peace, 
              purpose, and spiritual growth.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-lg border border-orange-200">
              <p className="text-lg text-orange-900 italic">
                "Service to humanity is service to the divine. Every act of kindness 
                brings us closer to our true nature."
              </p>
              <p className="text-orange-800 font-semibold mt-2">- Shree Shivkrupanand Swami</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-orange-200 to-amber-200 rounded-2xl p-1 shadow-xl">
              <div className="w-full h-96 bg-gradient-to-br from-orange-300 to-amber-300 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Swamiji's Portrait</p>
                  <p className="text-sm opacity-90">Divine Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-orange-900 text-center mb-12">
            Milestones in Our Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-700 mr-4">
                      {milestone.icon}
                    </div>
                    <div className="text-2xl font-bold text-amber-700">{milestone.year}</div>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-900 mb-2">{milestone.title}</h4>
                  <p className="text-orange-800">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;