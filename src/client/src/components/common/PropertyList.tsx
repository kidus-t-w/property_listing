import React, { useState } from 'react';
import PlaceHolder from '@/assets/img/propertyImage.jpeg'

interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
}

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      title: 'Wolo Sefer Bole, 3 Bedrooms Apartment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: PlaceHolder, // Placeholder image path
    },
    {
      id: 2,
      title: 'Wolo Sefer Bole, 3 Bedrooms Apartment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: PlaceHolder, // Placeholder image path
    },
    {
      id: 3,
      title: 'Wolo Sefer Bole, 3 Bedrooms Apartment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: PlaceHolder, // Placeholder image path
    },
  ]);

  const handleDelete = (id: number) => {
    setProperties(properties.filter(property => property.id !== id));
  };

  return (
    <div className="flex-grow p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Properties</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Create Listing</button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          placeholder="Search"
        />
      </div>

      {properties.map((property) => (
        <div key={property.id} className="flex flex-col md:flex-row items-center mb-6 bg-white p-4 shadow-md rounded-md">
          <img src={property.image} alt={property.title} className="w-full md:w-40 h-40 object-cover mb-4 md:mb-0 md:mr-4" />
          <div className="flex-grow mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
            <p className="text-gray-700">{property.description}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
            <button onClick={() => handleDelete(property.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
