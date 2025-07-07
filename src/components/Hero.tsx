
import React from 'react';
import { ShieldCheck, Timer, Wrench, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleCallNow = () => {
    console.log('Call Now clicked');
    window.location.href = 'tel:+15551234567';
  };

  const handleBrowseProducts = () => {
    console.log('Browse Products clicked');
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted');
    alert('Thank you for your quote request! Our team will contact you within 24 hours with a detailed estimate.');
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/20 rounded-full animate-pulse delay-2000"></div>
      </div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="text-yellow-400 animate-pulse" size={24} />
                <span className="text-yellow-400 font-semibold">Premium Electrical Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Power Your Projects with 
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent animate-pulse"> Quality Electrical Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                From residential wiring to commercial CCTV installations, we provide premium electrical products and professional services to contractors, electricians, and property owners across the region.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={handleCallNow}
                  className="btn-electric flex items-center space-x-2 hover:shadow-xl active:scale-95 transform transition-all duration-300 hover:-translate-y-1"
                >
                  <Phone size={20} className="animate-pulse" />
                  <span>Call Now: (555) 123-4567</span>
                </button>
                <button 
                  onClick={handleBrowseProducts}
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 hover:shadow-xl active:scale-95 hover:-translate-y-1"
                >
                  Browse Products
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
                  <div className="bg-green-500/20 p-3 rounded-full mb-2 group-hover:bg-green-500/30 transition-all duration-300">
                    <ShieldCheck className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <span className="text-sm font-medium">Certified Quality</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
                  <div className="bg-blue-500/20 p-3 rounded-full mb-2 group-hover:bg-blue-500/30 transition-all duration-300">
                    <Timer className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <span className="text-sm font-medium">Same Day Service</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
                  <div className="bg-orange-500/20 p-3 rounded-full mb-2 group-hover:bg-orange-500/30 transition-all duration-300">
                    <Wrench className="text-orange-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <span className="text-sm font-medium">Expert Installation</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="text-blue-600" size={20} />
                  <h3 className="text-2xl font-bold text-slate-800">Get Your Free Quote</h3>
                </div>
                <form onSubmit={handleGetQuote} className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                  />
                  <select 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                  >
                    <option value="">Select Service</option>
                    <option value="wiring">⚡ Electrical Wiring</option>
                    <option value="cctv">📹 CCTV Installation</option>
                    <option value="lighting">💡 Lighting Installation</option>
                    <option value="supplies">📦 Product Supply</option>
                    <option value="maintenance">🔧 Maintenance & Repair</option>
                  </select>
                  <textarea 
                    placeholder="Project Details" 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none transition-all duration-200 hover:border-blue-300"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full btn-electric hover:shadow-xl active:scale-95 transform transition-all duration-300 hover:-translate-y-1"
                  >
                    Get Free Quote ✨
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
