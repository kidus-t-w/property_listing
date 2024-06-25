import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  select: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: 'Hello, I am interested in [Summit CMC, 48 bed room ground plus five furnished apartment building for rent, Addis Ababa]',
    select: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          rows={4}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select">
          Select
        </label>
        <select
          name="select"
          value={formData.select}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
        >
          <option value="">Select an option</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="terms"
          className="mr-2 leading-tight"
        />
        <label className="text-gray-700 text-sm" htmlFor="terms">
          By submitting this form I agree to <a href="#" className="text-red-500">Terms of Use</a>
        </label>
      </div>
      <div className="flex space-x-4">
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
          Send
        </button>
        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none">
          Call
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
