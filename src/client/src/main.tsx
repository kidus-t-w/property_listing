import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Home from "./pages/Home.tsx";
import ProfileForm from "./components/property_listing/Profile.tsx";

import Services from "./pages/Services.tsx";
import PropertyDetail from "@/pages/PropertyDetail.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import PropertyListing from "./pages/PropertyListing.tsx";
import CreateListing from "./pages/CreateListing.tsx";
import Contact from "./pages/Contact.tsx";
import AuthPage from "./pages/Auth.tsx";
import Search from "./pages/Search.tsx";
import LoginPage from "./pages/Login.tsx";
import SignUpPage from "./pages/SignUp.tsx";
import PropertyList from "./components/property_listing/PropertyList.tsx";
import MyProfile from "./pages/Profile.tsx";
import { AuthProvider } from "./contexts/auth.context.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "property_detail",
        element: <PropertyDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/create_listing",
    element: <CreateListing />,
  },
  {
    path: "/property_listing",
    element: <PropertyListing />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
    children: [
      {
        path: "",
        element: <ProfileForm />,
      },
      {
        path: "listings",
        element: <PropertyListing />,
      },
      {
        path: "create_listing",
        element: <CreateListing />,
      },
    ],
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />,
  </AuthProvider>,
);
