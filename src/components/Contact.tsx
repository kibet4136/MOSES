
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted');
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  const handleVisitShop = () => {
    console.log('Visit Our Shop clicked');
    alert('Visit us at: 123 Electric Avenue, Tech City, TC 12345. We are open Monday-Friday 8AM-6PM, Saturday 9AM-4PM.');
  };

  const handleCallUs = () => {
    console.log('Call Us clicked');
    window.location.href = 'tel:+15551234567';
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Visit Our Shop or Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our extensive product range in person or contact us for expert advice and quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <MapPin className="text-blue-600 mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Shop Address</h4>
                    <p className="text-gray-600">123 Electric Avenue<br />Tech City, TC 12345<br />United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Phone className="text-blue-600 mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone Numbers</h4>
                    <p className="text-gray-600">Main: +1 (555) 123-4567<br />Emergency: +1 (555) 123-4568</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Mail className="text-blue-600 mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Email Addresses</h4>
                    <p className="text-gray-600">info@electrohubsolutions.com<br />quotes@electrohubsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Clock className="text-blue-600 mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose ElectroHub Solutions?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Over 15 years of industry experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Competitive wholesale and retail pricing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Same-day delivery within 50-mile radius</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Expert technical support and consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Partnerships with leading electrical brands</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  required
                  className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  required
                  className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <select 
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select Inquiry Type</option>
                <option value="product">Product Information</option>
                <option value="quote">Request Quote</option>
                <option value="installation">Installation Service</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
              <textarea 
                placeholder="Your Message" 
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none transition-all duration-200"
              ></textarea>
              <button 
                type="submit" 
                className="w-full btn-electric hover:shadow-lg active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Electrical Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get expert advice, competitive quotes, and professional installation services all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleVisitShop}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Visit Our Shop Today
              </button>
              <button 
                onClick={handleCallUs}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 active:scale-95"
              >
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
