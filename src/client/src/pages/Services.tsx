import ContactUsForm from '@/components/common/ContactUsForm';
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-6xl flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Our Services</h1>
          <p className="text-gray-700 mb-4">
            Ethio Property: Real Estate agent and property management services in Addis Ababa and all around Ethiopia
          </p>
          <p className="text-gray-700 mb-4">
            <strong>For Sellers or Landlords:</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Our company is dedicated to helping landlords and property developers to sell out their properties. If you want to save time and money, while expanding, you might want to be interested in our professional services.
          </p>
          <p className="text-gray-700 mb-4">
            Our company could be your ideal partner for renting or selling your property. We are committed to our customers and promoters and our main objective is to be transparent while achieving results.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>For Tenants or Buyers:</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Whether you are looking for houses, flats, offices or buildings for sale or for rent, we offer you free-of-charge accompanied viewing of properties you choose through our state-of-the-art website. With our team of experienced and dedicated real estate agents, we at Ethio Property offer highly professional and personalized assistance in finding you the right home in Ethiopia.
          </p>
          <p className="text-gray-700 mb-4">Our agent services include:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Preparing recommendations based on the clients’ desired specifications and budget, and sharing photos and details of the properties through the Ethio Property website.</li>
            <li>Getting in touch with property owners to set up viewing times.</li>
            <li>Accompanying the client to view the selected potential houses/flats, including picking up and dropping off the client in our agency cars, completely free-of-charge.</li>
            <li>Negotiating the sale price or rent, on behalf of the client.</li>
            <li>Supporting with the preparation of the sales contract or lease agreement.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            * We only charge our clients once the sales contract or lease agreement has been signed.
          </p>
          <p className="text-gray-700 mb-4">
            Contact us for service charge policy and procedures.
          </p>
        </div>

        
        <div className="lg:w-1/3 p-8 bg-gray-50 rounded-lg">
          <ContactUsForm/>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
