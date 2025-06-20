'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Laptop, 
  Building, 
  Utensils, 
  BookOpen, 
  Heart, 
  Users,
  ArrowRight 
} from 'lucide-react';

const Offerings = () => {
  const sevaOpportunities = [
    {
      title: 'Digital Gurukarya',
      description: 'Spread spiritual wisdom through digital platforms, social media management, and online content creation.',
      icon: <Laptop className="h-8 w-8" />,
      color: 'bg-orange-100 text-orange-700',
      bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50',
      features: ['Social Media Management', 'Content Creation', 'Website Development', 'Online Events']
    },
    {
      title: 'Ashram Gurukarya',
      description: 'Participate in daily ashram activities, maintenance, and spiritual practices.',
      icon: <Building className="h-8 w-8" />,
      color: 'bg-amber-100 text-amber-700',
      bgColor: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      features: ['Daily Seva', 'Ashram Maintenance', 'Event Organization', 'Spiritual Practices']
    },
    {
      title: 'Annadan Seva',
      description: 'Serve free meals to devotees and the community, spreading love through food.',
      icon: <Utensils className="h-8 w-8" />,
      color: 'bg-yellow-100 text-yellow-700',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      features: ['Meal Preparation', 'Food Distribution', 'Kitchen Management', 'Community Service']
    },
    {
      title: 'Education Seva',
      description: 'Teach spiritual values, conduct workshops, and share knowledge with others.',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'bg-red-100 text-red-700',
      bgColor: 'bg-gradient-to-br from-red-50 to-orange-50',
      features: ['Teaching', 'Workshop Conducting', 'Study Groups', 'Mentoring']
    },
    {
      title: 'Healthcare Seva',
      description: 'Provide medical assistance and health awareness in communities.',
      icon: <Heart className="h-8 w-8" />,
      color: 'bg-rose-100 text-rose-700',
      bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50',
      features: ['Medical Camps', 'Health Awareness', 'First Aid', 'Community Health']
    },
    {
      title: 'Community Outreach',
      description: 'Connect with communities and organize events to spread spiritual awareness.',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-pink-100 text-pink-700',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sevaOpportunities.map((seva, index) => (
            <Card 
              key={index} 
              className={`${seva.bgColor} border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group backdrop-blur-sm`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`${seva.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {seva.icon}
                </div>
                <CardTitle className="text-xl font-bold text-orange-900">{seva.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-orange-800 text-center">{seva.description}</p>
                
                <div className="space-y-2">
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

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  Join This Seva
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12 border border-orange-200 shadow-xl">
            <h3 className="text-3xl font-bold text-orange-900 mb-4">
              Ready to Begin Your Seva Journey?
            </h3>
            <p className="text-lg text-orange-800 mb-6 max-w-2xl mx-auto">
              Every form of seva is a step towards spiritual growth. Join our community and 
              make a meaningful difference in the world through selfless service.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 shadow-lg">
              <Users className="mr-2 h-5 w-5" />
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