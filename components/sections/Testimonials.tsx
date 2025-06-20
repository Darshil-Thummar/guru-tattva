'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Quote, Star, MapPin, Calendar } from 'lucide-react';

const Testimonials = () => {
  const videoTestimonials = [
    {
      name: 'Rajesh Patel',
      location: 'Ahmedabad, Gujarat',
      title: 'Transformation Through Seva',
      duration: '3:45',
      category: 'Spiritual Growth',
      date: '2024-01-10',
      thumbnail: 'rajesh-patel',
      description: 'How participating in ashram seva completely transformed my perspective on life and brought inner peace.',
      rating: 5
    },
    {
      name: 'Dr. Priya Sharma',
      location: 'Mumbai, Maharashtra',
      title: 'Healing Through Divine Grace',
      duration: '4:20',
      category: 'Personal Experience',
      date: '2024-01-05',
      thumbnail: 'priya-sharma',
      description: 'My journey from illness to complete recovery through Swamiji\'s blessings and spiritual practices.',
      rating: 5
    },
    {
      name: 'Amit Joshi',
      location: 'Rajkot, Gujarat',
      title: 'From Stress to Serenity',
      duration: '2:55',
      category: 'Life Change',
      date: '2023-12-28',
      thumbnail: 'amit-joshi',
      description: 'How meditation and community service helped me overcome work stress and find life balance.',
      rating: 5
    },
    {
      name: 'Mrs. Sunita Desai',
      location: 'Surat, Gujarat',
      title: 'Family Unity Through Faith',
      duration: '5:15',
      category: 'Family Experience',
      date: '2023-12-20',
      thumbnail: 'sunita-desai',
      description: 'Our family\'s journey to stronger bonds and shared spiritual values through ashram activities.',
      rating: 5
    },
    {
      name: 'Kiran Mehta',
      location: 'Pune, Maharashtra',
      title: 'Youth Empowerment Journey',
      duration: '3:30',
      category: 'Youth Development',
      date: '2023-12-15',
      thumbnail: 'kiran-mehta',
      description: 'How joining digital seva helped me find purpose and develop leadership skills as a young person.',
      rating: 5
    },
    {
      name: 'Mr. Vikram Shah',
      location: 'Vadodara, Gujarat',
      title: 'Business Success with Values',
      duration: '4:05',
      category: 'Professional Growth',
      date: '2023-12-10',
      thumbnail: 'vikram-shah',
      description: 'Balancing business success with spiritual values and how it led to both prosperity and peace.',
      rating: 5
    }
  ];

  const categories = [
    { name: 'All', count: 24, active: true },
    { name: 'Spiritual Growth', count: 8 },
    { name: 'Personal Experience', count: 6 },
    { name: 'Life Change', count: 5 },
    { name: 'Family Experience', count: 3 },
    { name: 'Youth Development', count: 2 }
  ];

  const getVideoThumbnail = (thumbnail: string) => {
    const colors:any = {
      'rajesh-patel': 'from-blue-300 to-blue-400',
      'priya-sharma': 'from-pink-300 to-rose-400',
      'amit-joshi': 'from-green-300 to-emerald-400',
      'sunita-desai': 'from-purple-300 to-violet-400',
      'kiran-mehta': 'from-orange-300 to-amber-400',
      'vikram-shah': 'from-indigo-300 to-blue-400'
    };

    return (
      <div className={`aspect-video bg-gradient-to-br ${colors[thumbnail] || 'from-gray-300 to-gray-400'} rounded-lg flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300`}>
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300">
          <Play className="h-8 w-8 text-white fill-current" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {videoTestimonials.find(v => v.thumbnail === thumbnail)?.duration}
        </div>
      </div>
    );
  };

  const getCategoryColor = (category: string) => {
    const colors:any = {
      'Spiritual Growth': 'bg-purple-100 text-purple-700',
      'Personal Experience': 'bg-pink-100 text-pink-700',
      'Life Change': 'bg-green-100 text-green-700',
      'Family Experience': 'bg-blue-100 text-blue-700',
      'Youth Development': 'bg-orange-100 text-orange-700',
      'Professional Growth': 'bg-indigo-100 text-indigo-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Voices of <span className="text-orange-600">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Listen to inspiring stories from our devotees who have experienced profound
            transformation through spiritual practice and community service.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`${
                category.active
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200'
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white cursor-pointer">
              <div className="p-4">
                {getVideoThumbnail(testimonial.thumbnail)}
              </div>

              <CardContent className="px-6 pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(testimonial.category)}>
                    {testimonial.category}
                  </Badge>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {testimonial.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonial.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-700 font-medium">
                    <Quote className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{testimonial.name}</span>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{testimonial.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{new Date(testimonial.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white group-hover:scale-105 transition-transform duration-300">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Testimony
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Share Your Story Section */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Share Your Transformation Story
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Have you experienced transformation through your spiritual journey with us?
            We'd love to hear your story and share it with our community to inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Submit Video Testimony
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3">
              <Quote className="mr-2 h-5 w-5" />
              Write Your Story
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Join 150+ devotees who have shared their inspiring transformation stories
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
            <div className="text-gray-700 font-medium">Video Testimonials</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">4.9</div>
            <div className="text-gray-700 font-medium">Average Rating ⭐</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">25K+</div>
            <div className="text-gray-700 font-medium">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-700 font-medium">Positive Feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
