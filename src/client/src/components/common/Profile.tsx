import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ProfileData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  newPassword: string;
  confirmPassword: string;
}

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    mobile: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, section: string) => {
    e.preventDefault();
    // Handle form submission logic for each section here
    console.log(`Submitting ${section} section`, profileData);
  };

  return (
    <div className="flex-grow p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="flex flex-col lg:flex-row mb-6">
        <div className="flex flex-col items-center lg:mr-6 mb-6 lg:mb-0">
          <div className="w-40 h-40 bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
            {/* Profile picture placeholder */}
            <span className="text-gray-500">300 x 300</span>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600">Update Profile Picture</button>
          <span className="text-gray-500 text-sm mt-2">Minimum size 300 x 300</span>
        </div>
        <form onSubmit={(e) => handleSubmit(e, 'Information')} className="bg-white p-6 shadow-md rounded-md flex-grow">
          <h2 className="text-xl font-semibold mb-4">Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={profileData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                placeholder="Last Name"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                value={profileData.mobile}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                placeholder="Mobile"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Update Information</button>
          </div>
        </form>
      </div>

      <form onSubmit={(e) => handleSubmit(e, 'Change Password')} className="bg-white p-6 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={profileData.newPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="New Password"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={profileData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Update Password</button>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'Delete Account')} className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
        <div className="flex justify-end">
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete My Account</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
