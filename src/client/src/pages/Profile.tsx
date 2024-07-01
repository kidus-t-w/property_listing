import React from 'react';
import Sidebar from '@/components/property_listing/SideBar';
import Profile from '@/components/property_listing/Profile';
import DeleteAccount from '@/components/profile_form/DeleteAccount';

const MyProfile: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <Profile />

    </div>
  );
};

export default MyProfile;
