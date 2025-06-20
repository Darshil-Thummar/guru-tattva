'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, MapPin, User, Star, Trophy, Medal } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Spiritual Leadership Excellence Award',
      awardedBy: 'International Spiritual Council',
      date: '2023-09-15',
      location: 'New Delhi, India',
      description: 'Recognized for outstanding contribution to spiritual awakening and community service through establishment of multiple ashrams.',
      category: 'Leadership',
      image: 'spiritual-leadership',
      significance: 'International Recognition'
    },
    {
      title: 'Seva Ratna Award',
      awardedBy: 'Gujarat State Government',
      date: '2022-01-26',
      location: 'Gandhinagar, Gujarat',
      description: 'Honored for exceptional service to society through free food distribution and spiritual guidance to millions.',
      category: 'Social Service',
      image: 'seva-ratna',
      significance: 'State Honor'
    },
    {
      title: 'Dharma Shiromani',
      awardedBy: 'All India Dharmic Council',
      date: '2021-10-02',
      location: 'Haridwar, Uttarakhand',
      description: 'Conferred for preserving and propagating ancient spiritual wisdom in modern times.',
      category: 'Spiritual Teaching',
      image: 'dharma-shiromani',
      significance: 'National Recognition'
    },
    {
      title: 'Community Builder of the Year',
      awardedBy: 'National NGO Alliance',
      date: '2020-12-10',
      location: 'Mumbai, Maharashtra',
      description: 'Awarded for building strong spiritual communities and fostering unity among diverse groups.',
      category: 'Community Service',
      image: 'community-builder',
      significance: 'National Award'
    },
    {
      title: 'Humanitarian Excellence Certificate',
      awardedBy: 'UNESCO Peace Foundation',
      date: '2019-06-21',
      location: 'Paris, France',
      description: 'Certified for contributions to global peace through spiritual education and humanitarian activities.',
      category: 'Humanitarian',
      image: 'humanitarian',
      significance: 'International Certificate'
    },
    {
      title: 'Spiritual Heritage Preservation Award',
      awardedBy: 'Ministry of Culture, India',
      date: '2018-08-15',
      location: 'New Delhi, India',
      description: 'Recognized for efforts in preserving and promoting Indian spiritual heritage and traditions.',
      category: 'Cultural',
      image: 'heritage',
      significance: 'Government Recognition'
    }
  ];

  const certifications = [
    {
      title: 'Certified Spiritual Counselor',
      issuedBy: 'International Association of Spiritual Counselors',
      date: '2017-03-20',
      validUntil: 'Lifetime',
      credentialId: 'IASC-2017-SC-1247'
    },
    {
      title: 'Meditation Teacher Certification',
      issuedBy: 'Global Meditation Institute',
      date: '2015-11-30',
      validUntil: 'Lifetime',
      credentialId: 'GMI-2015-MT-8956'
    },
    {
      title: 'Yoga Philosophy Master',
      issuedBy: 'Ancient Wisdom University',
      date: '2012-07-15',
      validUntil: 'Lifetime',
      credentialId: 'AWU-2012-YPM-3421'
    }
  ];

  const getImagePlaceholder = (type: string) => {
    const colors:any = {
      'spiritual-leadership': 'from-purple-300 to-indigo-300',
      'seva-ratna': 'from-orange-300 to-amber-300',
      'dharma-shiromani': 'from-blue-300 to-cyan-300',
      'community-builder': 'from-green-300 to-emerald-300',
      'humanitarian': 'from-red-300 to-pink-300',
      'heritage': 'from-yellow-300 to-orange-300'
    };

    const icons:any = {
      'spiritual-leadership': <Trophy className="h-16 w-16" />,
      'seva-ratna': <Award className="h-16 w-16" />,
      'dharma-shiromani': <Star className="h-16 w-16" />,
      'community-builder': <Medal className="h-16 w-16" />,
      'humanitarian': <Award className="h-16 w-16" />,
      'heritage': <Trophy className="h-16 w-16" />
    };

    return (
      <div className={`h-64 bg-gradient-to-br ${colors[type] || 'from-gray-300 to-gray-400'} flex items-center justify-center text-white rounded-lg`}>
        {icons[type] || <Award className="h-16 w-16" />}
      </div>
    );
  };

  const getCategoryColor = (category: string) => {
    const colors:any = {
      'Leadership': 'bg-purple-100 text-purple-700',
      'Social Service': 'bg-orange-100 text-orange-700',
      'Spiritual Teaching': 'bg-blue-100 text-blue-700',
      'Community Service': 'bg-green-100 text-green-700',
      'Humanitarian': 'bg-red-100 text-red-700',
      'Cultural': 'bg-yellow-100 text-yellow-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Awards & <span className="text-orange-600">Recognitions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the recognition received for spiritual leadership, community service,
            and contributions to humanity's spiritual growth.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white">
              <div className="overflow-hidden rounded-t-lg">
                {getImagePlaceholder(award.image)}
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(award.category)}>
                    {award.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {award.significance}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {award.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <User className="h-4 w-4 mr-2 text-orange-500" />
                    <span className="font-medium">Awarded by:</span>
                    <span className="ml-1">{award.awardedBy}</span>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{new Date(award.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{award.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Professional <span className="text-orange-600">Certifications</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-blue-600 font-medium text-sm mb-3">{cert.issuedBy}</p>

                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center justify-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Issued: {new Date(cert.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <div>Valid: {cert.validUntil}</div>
                    <div className="font-mono text-gray-500">ID: {cert.credentialId}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Recognition Summary
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These honors reflect our commitment to spiritual service and community welfare,
              motivating us to continue our divine mission with greater dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-gray-700 font-medium">Major Awards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-700 font-medium">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-gray-700 font-medium">International Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-700 font-medium">Years of Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
