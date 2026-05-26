import React from "react";
import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/auth.context";
import Sidebar from "@/components/property_listing/SideBar";
import { isAuthenticated } from "@/lib/utils";

const MyProfile: React.FC = () => {
  // 1. We check if the user is authenticated
  // 2. If the user is not authenticated, then redirect them to the login, or signup page
  // 3. Render the rest of the component
  // const { isAuthenticated } = useAuth();

  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="flex min-h-screen flex-col font-poppins lg:flex-row">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default MyProfile;
