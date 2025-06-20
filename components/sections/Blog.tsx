'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowRight, BookOpen, Heart, Star } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Path of Selfless Service: Understanding True Seva',
      excerpt: 'Discover how selfless service becomes a spiritual practice that transforms both the giver and receiver, leading to divine realization.',
      category: 'Spiritual Teachings',
      author: 'Shree Shivkrupanand Swami',
      date: '2024-01-15',
      readTime: '8 min',
      image: 'spiritual-teaching',
      featured: true
    },
    {
      title: 'Guru Purnima: Celebrating the Divine Light Within',
      excerpt: 'A deep reflection on the significance of Guru Purnima and how the Guru\'s grace illuminates our spiritual journey.',
      category: 'Festivals',
      author: 'Ashram Editorial',
      date: '2024-01-10',
      readTime: '6 min',
      image: 'guru-purnima'
    },
    {
      title: 'My Journey from Doubt to Devotion',
      excerpt: 'A devotee shares their transformative experience of finding peace and purpose through Guruji\'s teachings and community service.',
      category: 'Devotee Experiences',
      author: 'Priya Patel',
      date: '2024-01-08',
      readTime: '5 min',
      image: 'devotee-story'
    },
    {
      title: 'The Power of Community in Spiritual Growth',
      excerpt: 'Exploring how being part of a spiritual community accelerates personal transformation and collective consciousness.',
      category: 'Community',
      author: 'Dr. Rajesh Sharma',
      date: '2024-01-05',
      readTime: '7 min',
      image: 'community'
    },
    {
      title: 'Daily Practices for Inner Peace',
      excerpt: 'Simple yet powerful daily spiritual practices that can be incorporated into modern life for lasting peace and joy.',
      category: 'Spiritual Practices',
      author: 'Ashram Editorial',
      date: '2024-01-03',
      readTime: '4 min',
      image: 'meditation'
    },
    {
      title: 'The Miracle of Annadan: Feeding with Love',
      excerpt: 'Understanding the deep spiritual significance of food service and how it becomes a medium of divine grace.',
      category: 'Seva Stories',
      author: 'Kitchen Seva Team',
      date: '2024-01-01',
      readTime: '6 min',
      image: 'annadan'
    }
  ];

  const categories = [
    { name: 'All', count: 24, active: true },
    { name: 'Spiritual Teachings', count: 8 },
    { name: 'Devotee Experiences', count: 12 },
    { name: 'Seva Stories', count: 6 },
    { name: 'Festivals', count: 4 },
    { name: 'Community', count: 3 }
  ];

  const getImagePlaceholder = (type: string) => {
    const colors:any = {
      'spiritual-teaching': 'from-purple-200 to-indigo-200',
      'guru-purnima': 'from-orange-200 to-amber-200',
      'devotee-story': 'from-green-200 to-emerald-200',
      'community': 'from-blue-200 to-cyan-200',
      'meditation': 'from-pink-200 to-rose-200',
      'annadan': 'from-yellow-200 to-orange-200'
    };

    const icons:any = {
      'spiritual-teaching': <BookOpen className="h-12 w-12" />,
      'guru-purnima': <Star className="h-12 w-12" />,
      'devotee-story': <Heart className="h-12 w-12" />,
      'community': <User className="h-12 w-12" />,
      'meditation': <Star className="h-12 w-12" />,
      'annadan': <Heart className="h-12 w-12" />
    };

    return (
      <div className={`h-48 bg-gradient-to-br ${colors[type] || 'from-gray-200 to-gray-300'} flex items-center justify-center text-white`}>
        {icons[type] || <BookOpen className="h-12 w-12" />}
      </div>
    );
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spiritual <span className="text-orange-600">Wisdom & Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore devotional articles, guru teachings, spiritual experiences, and inspiring stories
            from our community of devotees.
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

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="border-0 bg-gradient-to-r from-orange-50 to-amber-50 hover:shadow-xl transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-orange-500 text-white">Featured</Badge>
                  <Badge variant="outline">{blogPosts[0].category}</Badge>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                  {blogPosts[0].title}
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="text-sm">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Jan 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{blogPosts[0].readTime} read</span>
                  </div>
                </div>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="lg:order-first">
                {getImagePlaceholder(blogPosts[0].image)}
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="overflow-hidden rounded-t-lg">
                {getImagePlaceholder(post.image)}
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center text-gray-500 text-xs">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>

                  <Button size="sm" variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Connected with Divine Wisdom
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive weekly spiritual insights, ashram updates,
            and inspiring stories directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Join 15,000+ devotees receiving our weekly spiritual updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
