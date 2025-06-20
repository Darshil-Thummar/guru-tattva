'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, IndianRupee, ArrowRight } from 'lucide-react';

const AshramProgress = () => {
  const [hoveredAshram, setHoveredAshram] = useState<number | null>(null);

  const ashrams = [
    {
      name: 'Shree Gurushaktidham Mahudi',
      location: 'Mahudi, Gujarat',
      progress: 33,
      totalBudget: 5000000,
      raised: 1650000,
      remainingNeeded: 3350000,
      established: '2005',
      devotees: 15000,
      description: 'The first and primary ashram where the spiritual journey began.',
      milestones: ['Foundation Laid', 'Main Temple Completed', 'Residential Complex In Progress'],
      currentPhase: 'Residential Complex Construction',
      estimatedCompletion: 'December 2025'
    },
    {
      name: 'Shree Gurushaktidham Rajkot',
      location: 'Rajkot, Gujarat',
      progress: 67,
      totalBudget: 3500000,
      raised: 2345000,
      remainingNeeded: 1155000,
      established: '2012',
      devotees: 8500,
      description: 'A growing spiritual center serving the devotees of Saurashtra region.',
      milestones: ['Foundation Laid', 'Main Complex Completed', 'Garden Development'],
      currentPhase: 'Interior Finishing & Gardens',
      estimatedCompletion: 'June 2025'
    },
    {
      name: 'Shree Gurushaktidham Ajmer',
      location: 'Ajmer, Rajasthan',
      progress: 47,
      totalBudget: 4200000,
      raised: 1974000,
      remainingNeeded: 2226000,
      established: '2018',
      devotees: 6200,
      description: 'A sacred space in the holy city of Ajmer, spreading divine wisdom.',
      milestones: ['Land Acquisition', 'Foundation Work', 'Structure Development'],
      currentPhase: 'Main Structure Construction',
      estimatedCompletion: 'March 2026'
    },
    {
      name: 'Shree Gurushaktidham Dwarka',
      location: 'Dwarka, Gujarat',
      progress: 15,
      totalBudget: 6000000,
      raised: 900000,
      remainingNeeded: 5100000,
      established: '2022',
      devotees: 3500,
      description: 'The newest addition in Lord Krishna\'s holy city of Dwarka.',
      milestones: ['Land Blessing', 'Planning Approved', 'Foundation Work Started'],
      currentPhase: 'Foundation & Basic Structure',
      estimatedCompletion: 'December 2027'
    }
  ];

  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <section id="ashrams" className="py-20 bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            Ashram <span className="text-amber-700">Progress Tracker</span>
          </h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Follow the divine construction journey of our spiritual centers. 
            Your contributions help build these sacred spaces for spiritual growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {ashrams.map((ashram, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white/80 backdrop-blur-sm"
              onMouseEnter={() => setHoveredAshram(index)}
              onMouseLeave={() => setHoveredAshram(null)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-orange-900 mb-2">
                      {ashram.name}
                    </CardTitle>
                    <div className="flex items-center text-orange-800 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{ashram.location}</span>
                    </div>
                    <div className="flex items-center text-orange-800 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Established: {ashram.established}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 px-3 py-1 rounded-full border border-orange-200">
                    <span className="text-orange-800 font-bold">{ashram.progress}%</span>
                  </div>
                </div>
                <p className="text-orange-800 text-sm">{ashram.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-800">Construction Progress</span>
                    <span className="font-semibold text-orange-900">{ashram.progress}% Complete</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={ashram.progress} 
                      className="h-3 bg-orange-200"
                    />
                    {hoveredAshram === index && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-orange-800 text-white px-3 py-1 rounded text-xs whitespace-nowrap">
                        Need: {formatCurrency(ashram.remainingNeeded)} more
                      </div>
                    )}
                  </div>
                </div>

                {/* Financial Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                    <div className="flex items-center text-green-700 mb-1">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Raised</span>
                    </div>
                    <div className="text-green-800 font-bold">
                      {formatCurrency(ashram.raised)}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-3 rounded-lg border border-orange-200">
                    <div className="flex items-center text-orange-700 mb-1">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Needed</span>
                    </div>
                    <div className="text-orange-800 font-bold">
                      {formatCurrency(ashram.remainingNeeded)}
                    </div>
                  </div>
                </div>

                {/* Current Phase & Milestones */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-orange-900 mb-2">Current Phase</h4>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-medium text-sm">{ashram.currentPhase}</p>
                      <p className="text-blue-700 text-xs mt-1">Est. completion: {ashram.estimatedCompletion}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-orange-900 mb-2">Milestones Achieved</h4>
                    <div className="space-y-1">
                      {ashram.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-center text-sm text-orange-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {milestone}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Devotees Count */}
                <div className="flex items-center justify-between pt-2 border-t border-orange-200">
                  <div className="flex items-center text-orange-800">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{ashram.devotees.toLocaleString()} devotees</span>
                  </div>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg">
                    Contribute Now
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12 border border-orange-200 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-900 mb-4">
              Together We Build Sacred Spaces
            </h3>
            <p className="text-lg text-orange-800 mb-6 max-w-3xl mx-auto">
              Every contribution, big or small, helps us create divine spaces for spiritual growth 
              and community service. Join thousands of devotees in this sacred mission of building tomorrow's spiritual centers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-800 mb-2">4</div>
                <div className="text-orange-700">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-800 mb-2">₹69L</div>
                <div className="text-orange-700">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-800 mb-2">33,200</div>
                <div className="text-orange-700">Total Devotees</div>
              </div>
            </div>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 shadow-lg">
              <IndianRupee className="mr-2 h-5 w-5" />
              Support All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AshramProgress;