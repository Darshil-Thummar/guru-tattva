"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  IndianRupee, 
  Heart, 
  Users, 
  Building, 
  Utensils, 
  BookOpen,
  Award,
  ArrowUpRight,
  Calendar
} from 'lucide-react';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const donationCategories = [
    {
      title: 'Ashram Construction',
      description: 'Help build spiritual centers and infrastructure',
      icon: <Building className="h-6 w-6" />,
      color: 'bg-orange-100 text-orange-700',
      bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50',
      monthlyGoal: 500000,
      raised: 320000,
      priority: 'High'
    },
    {
      title: 'Annadan Seva',
      description: 'Sponsor free meals for devotees and community',
      icon: <Utensils className="h-6 w-6" />,
      color: 'bg-amber-100 text-amber-700',
      bgColor: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      monthlyGoal: 200000,
      raised: 180000,
      priority: 'Medium'
    },
    {
      title: 'Education & Books',
      description: 'Support spiritual education and literature',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-yellow-100 text-yellow-700',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      monthlyGoal: 100000,
      raised: 85000,
      priority: 'Medium'
    },
    {
      title: 'General Donations',
      description: 'Support overall ashram operations and activities',
      icon: <Heart className="h-6 w-6" />,
      color: 'bg-red-100 text-red-700',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
      monthlyGoal: 300000,
      raised: 245000,
      priority: 'High'
    }
  ];

  const quickAmounts = [501, 1001, 2001, 5001, 10001, 25001];

  const topDonors = [
    {
      name: 'Shri Ramesh Patel',
      designation: 'Agriculture Minister',
      amount: 6000000,
      purpose: 'Mahudi Ashram Construction',
      month: 'November 2024'
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Medical Officer',
      amount: 500000,
      purpose: 'Healthcare Seva',
      month: 'October 2024'
    },
    {
      name: 'Shri Vikram Shah',
      designation: 'Business Leader',
      amount: 1500000,
      purpose: 'Annadan Seva Annual',
      month: 'September 2024'
    }
  ];

  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <section id="donations" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            Support Our <span className="text-amber-700">Divine Mission</span>
          </h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Your donations help us build spiritual centers, serve the community, and spread divine wisdom. 
            Every contribution makes a meaningful difference.
          </p>
        </div>

        {/* Monthly Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-orange-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <ArrowUpRight className="h-8 w-8 text-green-700" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">₹8.3L</div>
              <div className="text-green-700 font-medium">Average Monthly Donations</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-orange-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <div className="text-3xl font-bold text-blue-800 mb-2">2,547</div>
              <div className="text-blue-700 font-medium">Monthly Contributors</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-orange-700" />
              </div>
              <div className="text-3xl font-bold text-orange-800 mb-2">₹12.5L</div>
              <div className="text-orange-700 font-medium">This Month's Goal</div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {donationCategories.map((category, index) => (
            <Card key={index} className={`${category.bgColor} border-orange-200 hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`${category.color} p-2 rounded-lg shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-orange-900">{category.title}</CardTitle>
                      <Badge variant={category.priority === 'High' ? 'destructive' : 'secondary'} className="mt-1">
                        {category.priority} Priority
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-orange-800 text-sm mt-2">{category.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-800">Monthly Progress</span>
                    <span className="font-semibold text-orange-900">{formatCurrency(category.raised)} / {formatCurrency(category.monthlyGoal)}</span>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-amber-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(category.raised, category.monthlyGoal)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-orange-800">
                    {getProgressPercentage(category.raised, category.monthlyGoal).toFixed(0)}% of monthly goal achieved
                  </div>
                </div>
                
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg">
                  <IndianRupee className="mr-2 h-4 w-4" />
                  Donate to {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Donation Form */}
        <Card className="max-w-2xl mx-auto mb-12 border-orange-200 bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-orange-900">Make a Donation</CardTitle>
            <p className="text-orange-800">Choose an amount or enter a custom donation</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-3">
              {quickAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "default" : "outline"}
                  className={`${selectedAmount === amount ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'hover:bg-orange-50 hover:text-orange-700 border-orange-300 text-orange-800'} shadow-lg`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  ₹{amount.toLocaleString()}
                </Button>
              ))}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-orange-900">Custom Amount</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-orange-600" />
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white/80"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
              </div>
            </div>
            
            <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now - ₹{selectedAmount ? selectedAmount.toLocaleString() : customAmount || '0'}
            </Button>
            
            <p className="text-xs text-orange-700 text-center">
              Your donation is secure and helps support our spiritual mission. Tax exemption certificate will be provided.
            </p>
          </CardContent>
        </Card>

        {/* Top Donors Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-orange-900 text-center mb-8">
            Gratitude to Our <span className="text-amber-700">Noble Contributors</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {topDonors.map((donor, index) => (
              <Card key={index} className="border-orange-200 bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="h-6 w-6 text-orange-700" />
                  </div>
                  <h4 className="font-bold text-orange-900 mb-1">{donor.name}</h4>
                  <p className="text-sm text-orange-800 mb-2">{donor.designation}</p>
                  <div className="text-2xl font-bold text-orange-800 mb-2">
                    {formatCurrency(donor.amount)}
                  </div>
                  <p className="text-xs text-orange-800 mb-1">For: {donor.purpose}</p>
                  <div className="flex items-center justify-center text-xs text-orange-700">
                    <Calendar className="h-3 w-3 mr-1" />
                    {donor.month}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12 border border-orange-200 shadow-xl">
          <h3 className="text-3xl font-bold text-orange-900 mb-4">
            Be Part of Something Greater
          </h3>
          <p className="text-lg text-orange-800 mb-6 max-w-2xl mx-auto">
            Your contribution, no matter the size, helps us serve the community, build sacred spaces, 
            and spread spiritual wisdom. Join thousands of devotees in this noble mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 shadow-lg">
              <IndianRupee className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-700 hover:bg-orange-50 px-8 py-3 shadow-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Set Monthly Donation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;