
import React, { useState } from 'react';
import { House, Camera, Lightbulb, Wrench, Shield, Timer, ArrowLeft } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: <House size={48} />,
      title: "House & Commercial Wiring",
      description: "Complete electrical wiring solutions for homes, offices, and commercial buildings",
      features: ["New installations", "Rewiring projects", "Panel upgrades", "Code compliance", "Safety inspections"],
      details: {
        overview: "Professional electrical wiring services for residential and commercial properties",
        included: [
          "Site assessment and electrical load calculation",
          "Detailed wiring design and planning",
          "Quality copper wiring and accessories",
          "Circuit breaker and distribution board installation",
          "Earthing and bonding systems",
          "Electrical safety testing and certification",
          "Code compliance documentation",
          "1-year workmanship warranty"
        ],
        process: [
          "Initial consultation and site survey",
          "Electrical design and permit application",
          "Material procurement and delivery",
          "Professional installation by certified electricians",
          "Testing and commissioning",
          "Final inspection and certification"
        ]
      }
    },
    {
      icon: <Camera size={48} />,
      title: "CCTV Installation",
      description: "Professional security camera systems for homes and businesses",
      features: ["System design", "Professional installation", "Remote monitoring setup", "Maintenance plans", "24/7 support"],
      details: {
        overview: "Complete CCTV surveillance system installation and monitoring services",
        included: [
          "Security assessment and camera placement design",
          "High-definition IP or analog cameras",
          "Digital video recorder (DVR/NVR) setup",
          "Professional cable management and installation",
          "Mobile app configuration for remote viewing",
          "Night vision and motion detection setup",
          "User training and system handover",
          "2-year equipment warranty and 1-year service warranty"
        ],
        process: [
          "Security consultation and site survey",
          "Custom system design and quotation",
          "Equipment procurement and testing",
          "Professional installation and configuration",
          "System testing and optimization",
          "User training and maintenance schedule setup"
        ]
      }
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Lighting Design",
      description: "Custom lighting solutions for residential and commercial spaces",
      features: ["LED conversions", "Smart lighting", "Landscape lighting", "Security lighting", "Energy audits"],
      details: {
        overview: "Comprehensive lighting design and installation services for all applications",
        included: [
          "Lighting design consultation and planning",
          "Energy-efficient LED lighting solutions",
          "Smart lighting controls and automation",
          "Decorative and architectural lighting",
          "Outdoor and landscape lighting systems",
          "Emergency and security lighting",
          "Energy consumption analysis and optimization",
          "Maintenance and upgrade services"
        ],
        process: [
          "Lighting assessment and design consultation",
          "Custom lighting plan development",
          "Product selection and procurement",
          "Professional installation and setup",
          "System commissioning and testing",
          "User training and maintenance planning"
        ]
      }
    },
    {
      icon: <Wrench size={48} />,
      title: "Electrical Repairs",
      description: "Fast and reliable electrical problem diagnosis and repair services",
      features: ["Emergency repairs", "Fault finding", "Component replacement", "Safety testing", "Preventive maintenance"],
      details: {
        overview: "Expert electrical repair and maintenance services with emergency response",
        included: [
          "24/7 emergency response service",
          "Professional fault diagnosis and testing",
          "Quality component replacement",
          "Safety inspection and compliance check",
          "Preventive maintenance recommendations",
          "Electrical system upgrades",
          "Code compliance updates",
          "90-day repair warranty"
        ],
        process: [
          "Emergency call response within 2 hours",
          "On-site diagnosis and problem assessment",
          "Repair quotation and approval",
          "Professional repair work execution",
          "Safety testing and verification",
          "System handover and maintenance advice"
        ]
      }
    }
  ];

  const handleServiceClick = (service: any) => {
    console.log(`Service clicked: ${service.title}`);
    setSelectedService(service);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  const handleBookService = (serviceTitle: string) => {
    console.log(`Booking service: ${serviceTitle}`);
    alert(`Thank you for your interest in ${serviceTitle}! Our service team will contact you within 24 hours to schedule a consultation and provide a detailed quotation.`);
  };

  // Show service details
  if (selectedService) {
    return (
      <section id="services" className="py-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={handleBackToServices}
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </button>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="text-blue-600">
                  {selectedService.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">{selectedService.title}</h2>
                  <p className="text-xl text-gray-600">{selectedService.details.overview}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {selectedService.details.included.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Process</h3>
                  <ol className="space-y-3">
                    {selectedService.details.process.map((step: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => handleBookService(selectedService.title)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg active:scale-95 transform"
                >
                  Request Service Consultation
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Free consultation • Custom quotation • Professional service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show services overview
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Installation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified electricians provide expert installation and maintenance services 
            with warranties and guaranteed quality workmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 card-hover group">
              <div className="flex items-start space-x-6">
                <div className="text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => handleServiceClick(service)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors hover:shadow-lg active:scale-95 transform duration-200"
                    >
                      Service Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-slate-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center group cursor-pointer">
              <Shield className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h4 className="text-xl font-bold mb-2">Licensed & Insured</h4>
              <p className="text-gray-300">All our technicians are fully licensed, certified, and insured for your peace of mind.</p>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <Timer className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h4 className="text-xl font-bold mb-2">Emergency Support</h4>
              <p className="text-gray-300">24/7 emergency electrical services available for urgent repairs and installations.</p>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <Wrench className="text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h4 className="text-xl font-bold mb-2">Quality Guarantee</h4>
              <p className="text-gray-300">All installations come with comprehensive warranties and quality guarantees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
