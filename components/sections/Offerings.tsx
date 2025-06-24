'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Globe,
  Building2,
  ChefHat,
  GraduationCap,
  Stethoscope,
  HandHeart,
  ArrowRight
} from 'lucide-react';

const Offerings = () => {
  const sevaOpportunities = [
    {
      title: 'Digital Gurukarya',
      description: 'Spread spiritual wisdom through digital platforms, social media management, and online content creation.',
      icon: <Globe className="h-12 w-12" />,
      color: 'bg-orange-500 text-white',
      bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Social Media Management', 'Content Creation', 'Website Development', 'Online Events']
    },
    {
      title: 'Ashram Gurukarya',
      description: 'Participate in daily ashram activities, maintenance, and spiritual practices.',
      icon: <Building2 className="h-12 w-12" />,
      color: 'bg-amber-500 text-white',
      bgColor: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      bgImage: 'https://cottages.live/wp-content/uploads/2022/08/dol-ashram1.jpg',
      features: ['Daily Seva', 'Ashram Maintenance', 'Event Organization', 'Spiritual Practices']
    },
    {
      title: 'Annadan Seva',
      description: 'Serve free meals to devotees and the community, spreading love through food.',
      icon: <ChefHat className="h-12 w-12" />,
      color: 'bg-yellow-500 text-white',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      bgImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Meal Preparation', 'Food Distribution', 'Kitchen Management', 'Community Service']
    },
    {
      title: 'Education Seva',
      description: 'Teach spiritual values, conduct workshops, and share knowledge with others.',
      icon: <GraduationCap className="h-12 w-12" />,
      color: 'bg-red-500 text-white',
      bgColor: 'bg-gradient-to-br from-red-50 to-orange-50',
      bgImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Teaching', 'Workshop Conducting', 'Study Groups', 'Mentoring']
    },
    {
      title: 'Healthcare Seva',
      description: 'Provide medical assistance and health awareness in communities.',
      icon: <Stethoscope className="h-12 w-12" />,
      color: 'bg-rose-500 text-white',
      bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50',
      bgImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Medical Camps', 'Health Awareness', 'First Aid', 'Community Health']
    },
    {
      title: 'Community Outreach',
      description: 'Connect with communities and organize events to spread spiritual awareness.',
      icon: <HandHeart className="h-12 w-12" />,
      color: 'bg-pink-500 text-white',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      bgImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Event Organization', 'Community Connect', 'Volunteer Coordination', 'Outreach Programs']
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            Seva <span className="text-amber-700">Opportunities</span>
          </h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Join our spiritual community through various forms of selfless service.
            Find your path to contribute to the divine mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 mt-16 items-stretch h-full min-h-[500px] lg:auto-rows-fr">
          {sevaOpportunities.map((seva, index) => (
            <div
              key={index}
              className={`relative group flex flex-col h-full`}
            >
              {/* Large Circle Icon - Half outside the card */}
              <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 ${seva.color} w-20 h-20 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white`}>
                {seva.icon}
              </div>

              {/* Background Image Section */}
              <div
                className="h-32 rounded-t-lg mb-0 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${seva.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <Card
                className={`${seva.bgColor} border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm pt-8 rounded-t-none flex flex-col h-full`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <CardHeader className="text-center pb-4 pt-4">
                    <CardTitle className="text-xl font-bold text-orange-900">{seva.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-orange-800 text-center flex-0">{seva.description}</p>

                    <div className="space-y-2 flex-0">
                      <h4 className="font-semibold text-orange-900 text-sm">What you'll do:</h4>
                      <ul className="space-y-1">
                        {seva.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-orange-800 flex items-center">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1" /> {/* Spacer to push button to bottom */}

                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white group-hover:scale-105 transition-transform duration-300 shadow-lg mt-4">
                      Join This Seva
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12 border border-orange-200 shadow-xl">
            <h3 className="text-3xl font-bold text-orange-900 mb-4">
              Ready to Begin Your Seva Journey?
            </h3>
            <p className="text-lg text-orange-800 mb-6 max-w-2xl mx-auto">
              Every form of seva is a step towards spiritual growth. Join our community and
              make a meaningful difference in the world through selfless service.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 shadow-lg">
              <HandHeart className="mr-2 h-5 w-5" />
              Connect With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
