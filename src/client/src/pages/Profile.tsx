import React from "react";
import Sidebar from "@/components/property_listing/SideBar";
import { Outlet } from "react-router";
import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const MyProfile: React.FC = () => {
  // 1. We check if the user is authenticated
  // 2. If the user is not authenticated, then redirect them to the login, or signup page
  // 3. Render the rest of the component
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <main className="flex min-h-screen flex-col font-poppins lg:flex-row">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default MyProfile;
