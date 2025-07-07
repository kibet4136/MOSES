import React, { useState } from 'react';
import { Zap, Sun, Shield, Building, Users, Eye, Phone, MessageCircle, FileCheck, Award } from 'lucide-react';

const Partners = () => {
  const [activeTab, setActiveTab] = useState('partners');
  const [showCertificates, setShowCertificates] = useState(false);

  const partners = [
    {
      name: "Kenya Power",
      logo: <Zap size={48} className="text-red-600" />,
      description: "Official supplier for Kenya Power electrical infrastructure projects",
      partnership: "Authorized Distributor"
    },
    {
      name: "Solar Energy Solutions", 
      logo: <Sun size={48} className="text-yellow-500" />,
      description: "Leading provider of solar panels and renewable energy systems",
      partnership: "Strategic Partner"
    },
    {
      name: "SecureGuard Systems",
      logo: <Shield size={48} className="text-blue-600" />,
      description: "Professional security installation and monitoring services", 
      partnership: "Security Partner"
    },
    {
      name: "SafeTech Security",
      logo: <Eye size={48} className="text-green-600" />,
      description: "Comprehensive CCTV and access control system solutions",
      partnership: "Installation Partner"
    }
  ];

  const projects = {
    commercial: [
      {
        title: "Westlands Office Complex",
        description: "Complete electrical installation for 15-story commercial building including backup power systems",
        details: "• 500+ power outlets installation\n• Emergency lighting systems\n• Backup generator connection\n• Smart building automation",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        value: "KSh 8.5M",
        duration: "6 months"
      },
      {
        title: "Nakumatt Supermarket Chain",
        description: "CCTV surveillance system installation across 12 branches nationwide",
        details: "• 240 HD security cameras\n• Central monitoring system\n• 24/7 surveillance setup\n• Remote access capabilities",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
        value: "KSh 12.2M",
        duration: "8 months"
      },
      {
        title: "Industrial Park Lighting",
        description: "LED street lighting and security systems for Nairobi Industrial Park",
        details: "• Solar-powered LED street lights\n• Motion sensor security lighting\n• Energy-efficient solutions\n• 5-year maintenance contract",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        value: "KSh 15.8M",
        duration: "4 months"
      }
    ],
    cooperative: [
      {
        title: "Kiambu Coffee Cooperative",
        description: "Solar power system installation for coffee processing facility",
        details: "• 100kW solar panel installation\n• Battery backup systems\n• Grid-tie inverter setup\n• Energy monitoring system",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
        value: "KSh 6.8M",
        duration: "3 months"
      },
      {
        title: "Meru Farmers Cooperative",
        description: "Complete electrical infrastructure for new warehouse and processing center",
        details: "• Three-phase power distribution\n• Cold storage electrical systems\n• Security lighting installation\n• Fire safety systems",
        image: "https://images.unsplash.com/photo-1586880244386-8b3c2b8f5d8c?w=400&h=300&fit=crop",
        value: "KSh 4.2M",
        duration: "2 months"
      },
      {
        title: "Nyeri Tea Cooperative",
        description: "CCTV security system and smart automation for tea processing plant",
        details: "• 60 IP security cameras\n• Access control systems\n• Automated lighting controls\n• Remote monitoring setup",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
        value: "KSh 3.8M",
        duration: "6 weeks"
      }
    ],
    private: [
      {
        title: "Villa Estate Security System",
        description: "High-end residential security installation for luxury villa community",
        details: "• Perimeter security cameras\n• Smart home integration\n• Mobile app monitoring\n• 24/7 alarm response",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
        value: "KSh 2.8M",
        duration: "3 weeks"
      },
      {
        title: "Karen Home Automation",
        description: "Complete smart home electrical system with automation controls",
        details: "• Smart lighting controls\n• Automated curtain systems\n• Climate control integration\n• Voice control setup",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
        value: "KSh 1.9M",
        duration: "4 weeks"
      }
    ],
    residential: [
      {
        title: "Kileleshwa Apartments",
        description: "Electrical wiring and CCTV installation for 48-unit apartment complex",
        details: "• Complete electrical wiring\n• Common area CCTV system\n• Intercom installation\n• Backup power systems",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        value: "KSh 5.2M",
        duration: "10 weeks"
      },
      {
        title: "Eastlands Housing Project",
        description: "Affordable housing electrical infrastructure for 120 housing units",
        details: "• Standard electrical installations\n• Energy-efficient lighting\n• Safety compliance systems\n• Meter installation",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        value: "KSh 3.6M",
        duration: "8 weeks"
      }
    ],
    public: [
      {
        title: "Kenyatta University Campus",
        description: "Campus-wide electrical infrastructure upgrade and security system installation",
        details: "• Laboratory electrical systems\n• Campus-wide CCTV network\n• Emergency lighting systems\n• Fire safety installations",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
        value: "KSh 25.5M",
        duration: "12 months"
      },
      {
        title: "District Hospital Makueni",
        description: "Medical facility electrical systems and backup power installation",
        details: "• Operating theater electrical systems\n• UPS backup systems\n• Medical equipment power supply\n• Emergency generator installation",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
        value: "KSh 18.7M",
        duration: "14 months"
      }
    ]
  };

  const handleViewProject = (projectTitle: string) => {
    console.log(`Viewing project details: ${projectTitle}`);
    const projectDetails = `
PROJECT: ${projectTitle}

FULL SPECIFICATIONS:
• Detailed engineering drawings and layouts
• Quality assurance documentation
• Safety compliance certificates
• Project timeline and milestones
• Material specifications and sourcing
• Installation methodology
• Testing and commissioning reports
• Warranty and maintenance agreements

Our team can provide similar solutions for your project with:
✓ Professional consultation and site assessment
✓ Custom design and engineering
✓ Quality materials and certified installation
✓ Project management and timely delivery
✓ Post-installation support and maintenance

Contact us for a detailed proposal tailored to your requirements.
    `;
    alert(projectDetails);
  };

  const handleContactForProject = () => {
    console.log('Contact for similar project clicked');
    alert('Thank you for your interest! Our project team will contact you within 24 hours to discuss your requirements. Please call +254 700 123 456 or WhatsApp us for immediate assistance.');
  };

  const handleViewCertificates = () => {
    console.log('View Certificates clicked');
    setShowCertificates(true);
    alert('CERTIFICATIONS & LICENSES:\n\n✓ Electrical Installation License (ERC/LIC/2023/001)\n✓ ISO 9001:2015 Quality Management\n✓ OSHA Safety Compliance Certificate\n✓ Professional Indemnity Insurance\n✓ Public Liability Insurance (KSh 50M coverage)\n✓ Certified Electrical Contractors Association Member\n✓ Kenya Bureau of Standards Certification\n\nAll certificates are valid and up-to-date. Contact us to view original documents.');
  };

  const handleLiveChat = () => {
    console.log('Live Chat clicked');
    // WhatsApp integration
    const phoneNumber = "254700123456"; // Replace with actual WhatsApp business number
    const message = "Hello! I'm interested in your electrical services and would like to discuss my project requirements.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallSupport = () => {
    console.log('Call Support clicked');
    window.location.href = 'tel:+254700123456';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Partners & Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted partnerships and successful project implementations across Kenya
          </p>
        </div>

        {/* Contact Support Section */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={handleCallSupport}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <Phone size={20} />
            Call Support: +254 700 123 456
          </button>
          <button 
            onClick={handleLiveChat}
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <MessageCircle size={20} />
            WhatsApp Live Chat
          </button>
          <button 
            onClick={handleViewCertificates}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <FileCheck size={20} />
            View Licenses & Permits
          </button>
        </div>

        {/* Safety & Licensing Banner */}
        <div className="bg-slate-800 text-white rounded-xl p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Award className="text-yellow-400" size={48} />
              <div>
                <h3 className="text-xl font-bold">Licensed & Insured Professionals</h3>
                <p className="text-gray-300">Fully certified electrical contractors with comprehensive insurance coverage</p>
              </div>
            </div>
            <button 
              onClick={handleViewCertificates}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Safety First - View Credentials
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="bg-gray-100 rounded-lg p-1 flex min-w-max">
            {[
              { key: 'partners', label: 'Partners' },
              { key: 'commercial', label: 'Commercial' },
              { key: 'cooperative', label: 'Cooperative' },
              { key: 'private', label: 'Private Projects' },
              { key: 'residential', label: 'Residential' },
              { key: 'public', label: 'Public Institutions' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.key 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Tab */}
        {activeTab === 'partners' && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center card-hover group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{partner.name}</h3>
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {partner.partnership}
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Project Tabs */}
        {['commercial', 'cooperative', 'private', 'residential', 'public'].includes(activeTab) && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[activeTab as keyof typeof projects].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg card-hover group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-bold ${
                    activeTab === 'commercial' ? 'bg-green-600' : 
                    activeTab === 'cooperative' ? 'bg-orange-600' :
                    activeTab === 'private' ? 'bg-purple-600' :
                    activeTab === 'residential' ? 'bg-blue-600' :
                    'bg-red-600'
                  }`}>
                    {project.value}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <div>Duration: {project.duration}</div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <pre className="text-sm text-gray-600 whitespace-pre-line">{project.details}</pre>
                  </div>
                  <button 
                    onClick={() => handleViewProject(project.title)}
                    className={`w-full text-white py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 ${
                      activeTab === 'commercial' ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' : 
                      activeTab === 'cooperative' ? 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800' :
                      activeTab === 'private' ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' :
                      activeTab === 'residential' ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                      'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                    }`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-slate-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Join our network of satisfied clients or partner with us for your next electrical project
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleContactForProject}
                className="btn-electric hover:shadow-lg active:scale-95"
              >
                Discuss Your Project
              </button>
              <button 
                onClick={handleLiveChat}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-md active:scale-95"
              >
                WhatsApp Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
