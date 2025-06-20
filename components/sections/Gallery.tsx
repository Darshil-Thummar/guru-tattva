'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Calendar, 
  MapPin, 
  Users, 
  Heart, 
  Building,
  Utensils,
  BookOpen,
  Award,
  Expand
} from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      title: 'Mahudi Ashram Morning Prayer',
      category: 'Ashram Life',
      location: 'Mahudi, Gujarat',
      date: '2024-01-15',
      type: 'photo',
      description: 'Devotees gathering for morning prayers at the main temple',
      image: 'mahudi-prayer',
      participants: 200
    },
    {
      title: 'Annadan Seva - Community Kitchen',
      category: 'Seva Activities',
      location: 'Rajkot Ashram',
      date: '2024-01-12',
      type: 'photo',
      description: 'Volunteers serving free meals to devotees and community members',
      image: 'annadan-seva',
      participants: 150
    },
    {
      title: 'Guru Purnima Celebration 2023',
      category: 'Events',
      location: 'Ajmer Ashram',
      date: '2023-07-03',
      type: 'photo',
      description: 'Grand celebration of Guru Purnima with thousands of devotees',
      image: 'guru-purnima',
      participants: 5000
    },
    {
      title: 'Youth Spiritual Workshop',
      category: 'Educational',
      location: 'Dwarka Ashram',
      date: '2024-01-08',
      type: 'photo',
      description: 'Young devotees participating in spiritual education session',
      image: 'youth-workshop',
      participants: 80
    },
    {
      title: 'Ashram Construction Progress',
      category: 'Construction',
      location: 'Dwarka, Gujarat',
      date: '2024-01-05',
      type: 'photo',
      description: 'Latest progress on the new Dwarka ashram construction',
      image: 'construction',
      participants: 25
    },
    {
      title: 'Digital Seva Team Meeting',
      category: 'Digital Initiatives',
      location: 'Virtual/Online',
      date: '2024-01-03',
      type: 'photo',
      description: 'Monthly meeting of our digital seva volunteers',
      image: 'digital-seva',
      participants: 35
    },
    {
      title: 'Medical Camp Service',
      category: 'Healthcare Seva',
      location: 'Mahudi Village',
      date: '2023-12-28',
      type: 'photo',
      description: 'Free medical checkup camp organized for rural community',
      image: 'medical-camp',
      participants: 300
    },
    {
      title: 'Spiritual Discourse by Swamiji',
      category: 'Teachings',
      location: 'Rajkot Ashram',
      date: '2023-12-25',
      type: 'photo',
      description: 'Swamiji delivering spiritual discourse to gathered devotees',
      image: 'discourse',
      participants: 1000
    },
    {
      title: 'Children\'s Spiritual Education',
      category: 'Educational',
      location: 'Mahudi Ashram',
      date: '2023-12-20',
      type: 'photo',
      description: 'Children learning spiritual values and traditions',
      image: 'children-education',
      participants: 60
    }
  ];

  const categories = [
    { name: 'All', count: galleryItems.length, icon: <Camera className="h-4 w-4" /> },
    { name: 'Ashram Life', count: 2, icon: <Building className="h-4 w-4" /> },
    { name: 'Seva Activities', count: 3, icon: <Heart className="h-4 w-4" /> },
    { name: 'Events', count: 1, icon: <Calendar className="h-4 w-4" /> },
    { name: 'Educational', count: 2, icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Construction', count: 1, icon: <Building className="h-4 w-4" /> }
  ];

  const getImagePlaceholder = (imageType: string) => {
    const colors = {
      'mahudi-prayer': 'from-purple-300 to-indigo-400',
      'annadan-seva': 'from-orange-300 to-amber-400',
      'guru-purnima': 'from-yellow-300 to-orange-400',
      'youth-workshop': 'from-green-300 to-emerald-400',
      'construction': 'from-gray-400 to-slate-500',
      'digital-seva': 'from-blue-300 to-cyan-400',
      'medical-camp': 'from-red-300 to-pink-400',
      'discourse': 'from-indigo-300 to-purple-400',
      'children-education': 'from-pink-300 to-rose-400'
    };

    const icons = {
      'mahudi-prayer': <Building className="h-12 w-12" />,
      'annadan-seva': <Utensils className="h-12 w-12" />,
      'guru-purnima': <Award className="h-12 w-12" />,
      'youth-workshop': <Users className="h-12 w-12" />,
      'construction': <Building className="h-12 w-12" />,
      'digital-seva': <Camera className="h-12 w-12" />,
      'medical-camp': <Heart className="h-12 w-12" />,
      'discourse': <BookOpen className="h-12 w-12" />,
      'children-education': <Users className="h-12 w-12" />
    };

    return (
      <div className={`aspect-video bg-gradient-to-br ${colors[imageType] || 'from-gray-300 to-gray-400'} flex items-center justify-center text-white relative group-hover:scale-105 transition-transform duration-300 rounded-lg`}>
        {icons[imageType] || <Camera className="h-12 w-12" />}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Expand className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Ashram Life': 'bg-purple-100 text-purple-700',
      'Seva Activities': 'bg-orange-100 text-orange-700',
      'Events': 'bg-yellow-100 text-yellow-700',
      'Educational': 'bg-green-100 text-green-700',
      'Construction': 'bg-gray-100 text-gray-700',
      'Digital Initiatives': 'bg-blue-100 text-blue-700',
      'Healthcare Seva': 'bg-red-100 text-red-700',
      'Teachings': 'bg-indigo-100 text-indigo-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sacred <span className="text-orange-600">Moments Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore beautiful moments from our ashrams, seva activities, spiritual events, 
            and community gatherings that showcase our divine journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category.name ? "default" : "outline"}
              className={`${
                selectedCategory === category.name
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200'
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white cursor-pointer">
              <div className="p-4">
                {getImagePlaceholder(item.image)}
              </div>
              
              <CardContent className="px-6 pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{item.participants}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{new Date(item.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white group-hover:scale-105 transition-transform duration-300">
                  <Expand className="mr-2 h-4 w-4" />
                  View Full Image
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Share Your Sacred Moments
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Have beautiful photos from our events, seva activities, or ashram visits? 
            Share them with our community to inspire others and preserve these divine memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Camera className="mr-2 h-5 w-5" />
              Upload Photos
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              View All Albums
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Join 500+ devotees who have shared their beautiful moments with us
          </p>
        </div>

        {/* Gallery Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">1,200+</div>
            <div className="text-gray-700 font-medium">Total Photos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Events Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">4</div>
            <div className="text-gray-700 font-medium">Ashram Locations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">25K+</div>
            <div className="text-gray-700 font-medium">Community Views</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;