
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of electrical products do you supply?",
      answer: "We supply a comprehensive range of electrical products including cables & wires, electrical accessories, lighting solutions, CCTV systems, tools & equipment, and smart home automation systems. All our products are sourced from trusted manufacturers and meet international quality standards."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we offer professional installation services for all our products. Our certified electricians provide house & commercial wiring, CCTV installation, lighting design, and electrical repairs. All installations come with warranties and are completed to code compliance standards."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve residential, commercial, and industrial clients across the region. Our mobile service teams can reach most locations within 24 hours for installations and emergency repairs. Contact us to confirm service availability in your area."
    },
    {
      question: "Do you offer emergency electrical services?",
      answer: "Yes, we provide 24/7 emergency electrical services for urgent repairs and safety issues. Our emergency hotline is (555) 123-4568. We prioritize safety-critical situations and aim to respond within 2-4 hours for emergency calls."
    },
    {
      question: "What warranties do you provide?",
      answer: "All our products come with manufacturer warranties ranging from 1-5 years depending on the item. Our installation services include a 12-month workmanship warranty. We also offer extended warranty plans and maintenance contracts for commercial clients."
    },
    {
      question: "Can you help with bulk orders and commercial projects?",
      answer: "Absolutely! We specialize in bulk supply for contractors, electricians, and large commercial projects. We offer competitive pricing, flexible payment terms, and dedicated project management for large orders. Contact us for a custom quote."
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free quotes for all services and product requirements. You can request a quote through our website, phone, or visit our showroom. For complex projects, we offer free on-site consultations and detailed project estimates."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfers, mobile money, credit/debit cards, and offer credit terms for established commercial clients. For large projects, we can arrange flexible payment schedules to match project milestones."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="text-blue-600" size={32} />
            <Sparkles className="text-orange-500 animate-pulse" size={24} />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md mb-4 overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-4 group-hover:text-blue-700 transition-colors duration-300">{faq.question}</h3>
                <div className="flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-600" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" size={24} />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 animate-fade-in">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="text-blue-600 animate-pulse" size={24} />
              <h3 className="text-2xl font-bold text-slate-800">Still Have Questions?</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our expert team is ready to help you with any specific questions about our products or services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-electric hover:shadow-xl active:scale-95 transform transition-all duration-300 hover:-translate-y-1">
                Contact Support 💬
              </button>
              <button className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:from-gray-300 hover:to-gray-400 transition-all duration-300 hover:shadow-lg active:scale-95 transform hover:-translate-y-1">
                Live Chat 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
