import ContactUsForm from '@/components/common/ContactUsForm';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl p-8">
        <div className="lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Your Dream Home: Explore, Compare, and Secure Properties with Ease!r</h2>
          <p className="text-gray-700 mb-8">Have a question, suggestion, or just want to say hello? We'd love to hear from you. Feel free to reach out to us!</p>
          <div className="mb-8">
            <div className="text-gray-800 font-semibold mb-2">Reception Contact</div>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89-2.63a1 1 0 011.17.36l3.7 5.14a1 1 0 010 1.18l-3.7 5.14a1 1 0 01-1.17.36L3 16V8z" />
              </svg>
              <span>+251915579335</span>
            </div>
            <div className="flex items-center mb-6">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12c0 3.866-3.582 7-8 7s-8-3.134-8-7a8 8 0 1116 0zM3.051 4.507A11.96 11.96 0 0012 2c2.019 0 3.937.49 5.636 1.363M5.636 1.363A11.96 11.96 0 0112 2a11.96 11.96 0 016.364 1.363" />
              </svg>
              <span>kidustilahunet@gmail.com</span>
            </div>
            <div className="text-gray-800 font-semibold mb-2">HR Contact</div>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89-2.63a1 1 0 011.17.36l3.7 5.14a1 1 0 010 1.18l-3.7 5.14a1 1 0 01-1.17.36L3 16V8z" />
              </svg>
              <span>+251915579335</span>
            </div>
            <div className="flex items-center mb-6">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12c0 3.866-3.582 7-8 7s-8-3.134-8-7a8 8 0 1116 0zM3.051 4.507A11.96 11.96 0 0012 2c2.019 0 3.937.49 5.636 1.363M5.636 1.363A11.96 11.96 0 0112 2a11.96 11.96 0 016.364 1.363" />
              </svg>
              <span>kidustilahunet@gmail.com</span>
            </div>
            <div className="flex items-center mb-6">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89-2.63a1 1 0 011.17.36l3.7 5.14a1 1 0 010 1.18l-3.7 5.14a1 1 0 01-1.17.36L3 16V8z" />
              </svg>
              <span>Address: Bole, Namibia Street, Sheger building,
              Office 701, Addis Ababa,Addis Ababa,Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-8 bg-gray-50 rounded-lg">
          <ContactUsForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
