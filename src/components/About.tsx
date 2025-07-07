
import React from 'react';
import { Users, Award, Target, Heart, CheckCircle, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '2,500+', label: 'Projects Completed' },
    { number: '500+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: <Award size={32} />,
      title: 'Quality First',
      description: 'We use only premium materials and proven installation techniques to ensure long-lasting results.'
    },
    {
      icon: <Users size={32} />,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver solutions that exceed expectations.'
    },
    {
      icon: <Target size={32} />,
      title: 'Professional Excellence',
      description: 'Licensed, certified, and continuously trained technicians committed to industry best practices.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Community Commitment',
      description: 'Supporting local communities through reliable electrical services and sustainable practices.'
    }
  ];

  const milestones = [
    { year: '2009', event: 'ElectroHub Solutions founded with a vision to revolutionize electrical services' },
    { year: '2012', event: 'Expanded to commercial and industrial projects, obtained major certifications' },
    { year: '2015', event: 'Launched CCTV and security systems division, serving 1000+ customers' },
    { year: '2018', event: 'Introduced smart home automation and energy-efficient lighting solutions' },
    { year: '2021', event: 'Achieved ISO certification and expanded to serve regional markets' },
    { year: '2024', event: 'Leading electrical solutions provider with 2,500+ successful projects' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About ElectroHub Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been the trusted electrical partner for homes, businesses, and institutions across the region. 
            Our commitment to quality, safety, and customer satisfaction has made us a leader in electrical solutions.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=400&fit=crop" 
              alt="Professional electrician working on electrical panel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Professional Excellence</h3>
                <p className="text-xl">Powering Kenya's Future with Reliable Electrical Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-xl p-6 card-hover">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide comprehensive electrical solutions that power progress, ensure safety, and enhance quality of life. 
              We are committed to delivering exceptional service through innovation, expertise, and unwavering dedication to our clients' success.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading electrical solutions provider in the region, recognized for our technical excellence, 
              innovative approaches, and positive impact on communities. We envision a future where reliable electrical 
              infrastructure empowers growth and sustainability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company History */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 group">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-4 h-4 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>}
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6 group-hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-blue-600 mr-2" />
                    <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                  </div>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Expert Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" 
                  alt="Licensed electrician with safety equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Licensed Electricians</h4>
              <p className="text-gray-600">Certified professionals with extensive training and experience</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop" 
                  alt="Engineering team planning electrical systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Design Engineers</h4>
              <p className="text-gray-600">Expert system designers and project planners</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" 
                  alt="Customer service team"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Support Team</h4>
              <p className="text-gray-600">Dedicated customer service and technical support</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-800 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">Why Choose ElectroHub Solutions?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Licensed & Insured Professionals',
              'Quality Materials & Equipment',
              '24/7 Emergency Support',
              'Competitive & Transparent Pricing',
              'Comprehensive Warranties',
              'Code Compliance Guarantee',
              'Free Consultations & Quotes',
              'Ongoing Maintenance Support'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
