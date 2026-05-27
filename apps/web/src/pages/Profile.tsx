import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "@/components/property_listing/SideBar";
import { isAuthenticated } from "@/lib/utils";

const MyProfile: React.FC = () => {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-72 lg:flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Main content area */}
          <main className="flex-1 rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;