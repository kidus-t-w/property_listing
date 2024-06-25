import React from 'react';
import Sidebar from '@/components/common/SideBar';
import Profile from '@/components/common/Profile';

const MyProfile: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <Profile />
    </div>
  );
};

export default MyProfile;
