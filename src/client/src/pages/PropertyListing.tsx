import React from 'react';
import Sidebar from '@/components/common/SideBar';
import PropertyList from '@/components/common/PropertyList';

const PropertyListing: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <PropertyList />
    </div>
  );
};

export default PropertyListing;
