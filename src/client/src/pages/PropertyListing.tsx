import React from 'react';
import Sidebar from '@/components/property_listing/SideBar';
import PropertyList from '@/components/property_listing/PropertyList';

const PropertyListing: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <PropertyList />
    </div>
  );
};

export default PropertyListing;
