import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  propertyTitle: string;
  content: string;
  type: string;
  status: string;
  label: string;
  price: string;
  furnished: string;
  bedrooms: string;
  bathrooms: string;
  areaSize: string;
  landArea: string;
  garages: string;
  yearBuilt: string;
  floor: string;
  sizePostfix: string;
  landAreaSizePostfix: string;
  propertyID: string;
  address: string;
  country: string;
  stateCounty: string;
  city: string;
  area: string;
}

const PropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    propertyTitle: '',
    content: '',
    type: '',
    status: '',
    label: '',
    price: '',
    furnished: '',
    bedrooms: '',
    bathrooms: '',
    areaSize: '',
    landArea: '',
    garages: '',
    yearBuilt: '',
    floor: '',
    sizePostfix: '',
    landAreaSizePostfix: '',
    propertyID: '',
    address: '',
    country: '',
    stateCounty: '',
    city: '',
    area: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, section: string) => {
    e.preventDefault();
    // Handle form submission logic for each section here
    console.log(`Submitting ${section} section`, formData);
  };

  return (
    <div className="flex-grow p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create Listing</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Save as Draft</button>
      </div>

      <form onSubmit={(e) => handleSubmit(e, 'Description')} className="bg-white p-6 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyTitle">
            Property Title *
          </label>
          <input
            type="text"
            name="propertyTitle"
            value={formData.propertyTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter your property title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            rows={10}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="label">
              Label
            </label>
            <select
              name="label"
              value={formData.label}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">Select</option>
              {/* Add options here */}
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Submit</button>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'Price')} className="bg-white p-6 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Price</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Sale or Rent Price *
          </label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="price in Ethiopian Birr"
          />
        </div>
        <div className="flex justify-between">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Submit</button>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'Media')} className="bg-white p-6 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Media</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">
            Drag and drop the images to customize the image gallery order.
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <p className="mb-2">Drag and drop the gallery images here</p>
            <p className="mb-4">(Minimum size 1440x900)</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Select and Upload</button>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Click on the star icon to select the cover image.
          </p>
        </div>
        <div className="flex justify-between">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Submit</button>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'Details')} className="bg-white p-6 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="furnished">
              Furnished
            </label>
            <select
              name="furnished"
              value={formData.furnished}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">None</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bedrooms">
              Bedrooms
            </label>
            <input
              type="text"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter number of bedrooms"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bathrooms">
              Bathrooms
            </label>
            <input
              type="text"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter number of bathrooms"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="floor">
              Floor
            </label>
            <select
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">None</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="areaSize">
              Area Size *
            </label>
            <input
              type="text"
              name="areaSize"
              value={formData.areaSize}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter property area size"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sizePostfix">
              Size Postfix
            </label>
            <input
              type="text"
              name="sizePostfix"
              value={formData.sizePostfix}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="m²"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="landArea">
              Land Area
            </label>
            <input
              type="text"
              name="landArea"
              value={formData.landArea}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter property land area"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="landAreaSizePostfix">
              Land Area Size Postfix
            </label>
            <input
              type="text"
              name="landAreaSizePostfix"
              value={formData.landAreaSizePostfix}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="m²"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="garages">
              Garages
            </label>
            <input
              type="text"
              name="garages"
              value={formData.garages}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter number of garages"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearBuilt">
              Year Built
            </label>
            <input
              type="text"
              name="yearBuilt"
              value={formData.yearBuilt}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter year built"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyID">
              Property ID
            </label>
            <input
              type="text"
              name="propertyID"
              value={formData.propertyID}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter property ID"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Submit</button>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'Location')} className="bg-white p-6 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your property address"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">None</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stateCounty">
              State/County *
            </label>
            <select
              name="stateCounty"
              value={formData.stateCounty}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">None</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City *
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">None</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
              Area
            </label>
            <select
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            >
              <option value="">None</option>
              {/* Add options here */}
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
