'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  User, 
  Send,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const ashramLocations = [
    {
      name: 'Shree Gurushaktidham Mahudi',
      address: 'Village Mahudi, Taluka Mahudha, District Kheda, Gujarat - 387320',
      phone: '+91 2692-245678',
      email: 'mahudi@gurutattva.org',
      manager: 'Shri Ramesh Patel',
      timings: '5:00 AM - 9:00 PM',
      services: ['Daily Aarti', 'Annadan', 'Spiritual Counseling', 'Library']
    },
    {
      name: 'Shree Gurushaktidham Rajkot',
      address: 'Near Rajkot Airport, Rajkot, Gujarat - 360006',
      phone: '+91 281-234567',
      email: 'rajkot@gurutattva.org',
      manager: 'Shri Vikram Shah',
      timings: '5:30 AM - 8:30 PM',
      services: ['Morning Prayer', 'Yoga Classes', 'Community Kitchen', 'Guest House']
    },
    {
      name: 'Shree Gurushaktidham Ajmer',
      address: 'Pushkar Road, Ajmer, Rajasthan - 305001',
      phone: '+91 145-267890',
      email: 'ajmer@gurutattva.org',
      manager: 'Shri Mohan Sharma',
      timings: '4:30 AM - 9:00 PM',
      services: ['Meditation Hall', 'Religious Discourses', 'Pilgrimage Tours']
    },
    {
      name: 'Shree Gurushaktidham Dwarka',
      address: 'Near Dwarkadheesh Temple, Dwarka, Gujarat - 361335',
      phone: '+91 2892-234567',
      email: 'dwarka@gurutattva.org',
      manager: 'Shri Krishna Joshi',
      timings: '5:00 AM - 8:00 PM',
      services: ['Under Construction', 'Limited Services Available']
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com/gurutattva', followers: '25K' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/gurutattva', followers: '18K' },
    { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com/gurutattva', followers: '35K' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/gurutattva', followers: '12K' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect With <span className="text-orange-600">Our Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to us for spiritual guidance, ashram visits, seva opportunities, 
            or any questions about our divine mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Send className="mr-3 h-6 w-6 text-orange-600" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Message subject"
                        required
                        className="focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      rows={6}
                      required
                      className="focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    You will receive a confirmation email with a copy of your message.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-orange-100 to-amber-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">admin@gurutattva.org</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-gray-600">+91 7383626702</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors group"
                    >
                      <div className="group-hover:scale-110 transition-transform mr-3">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className="text-xs text-gray-500">{social.followers}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ashram Locations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-orange-600">Ashram Locations</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ashramLocations.map((ashram, index) => (
              <Card key={index} className="border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">{ashram.name}</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                      <p className="text-gray-700 text-sm">{ashram.address}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-orange-600 mr-3" />
                      <p className="text-gray-700 text-sm">{ashram.phone}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-orange-600 mr-3" />
                      <p className="text-gray-700 text-sm">{ashram.email}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-orange-600 mr-3" />
                      <p className="text-gray-700 text-sm">Manager: {ashram.manager}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-orange-600 mr-3" />
                      <p className="text-gray-700 text-sm">Timings: {ashram.timings}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Services Available:</h5>
                    <div className="flex flex-wrap gap-2">
                      {ashram.services.map((service, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Visit Us in Person
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Experience the divine energy and peaceful atmosphere of our ashrams. 
            All are welcome to join our prayers, participate in seva, and seek spiritual guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <MapPin className="mr-2 h-5 w-5" />
              Plan Your Visit
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call for Guidance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;