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
import Children_Spiritual_Education from '../../assets/img/6188388514907926337.jpg'

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
    // Background images for different album types
    const backgroundImages:any = {
      'mahudi-prayer': 'data:image/jpeg;base64,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', // Temple/Prayer
      'annadan-seva': 'https://donations.hkmgokulakshetram.org/wp-content/uploads/2024/04/vlcsnap-2021-04-23-14h28m02s484.png', // Community service
      'guru-purnima': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBhxXaAIHNiwM0bhedOeI8oiiN9NoXTMuZw&s', // Festival celebration
      'youth-workshop': 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80', // Workshop/Education
      'construction': 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&q=80', // Construction
      'digital-seva': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', // Digital/Meeting
      'medical-camp': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80', // Medical/Healthcare
      'discourse': 'https://i.ytimg.com/vi/kKtkNP0jUdk/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCf4Q7_WeH6TZCixrZYMM0S_2CEXA', // Speaking/Teaching
      'children-education': Children_Spiritual_Education.src
    };

    const icons:any = {
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
      <div
        className="aspect-video bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative group-hover:scale-105 transition-transform duration-300 rounded-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${backgroundImages[imageType] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'})`
        }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Expand className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    );
  };

  const getCategoryColor = (category: string) => {
    const colors:any = {
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
