import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import Services from "./pages/Services.tsx";
import PropertyDetail from "@/pages/PropertyDetail.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyListing from "./pages/PropertyListing.tsx";
import CreateListing from "./pages/CreateListing.tsx";
import Contact from "./pages/Contact.tsx";
import AuthPage from "./pages/Auth.tsx";


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
    path: "create_listing",
    element: <CreateListing />,
  },
  {
    path: "property_listing",
    element: <PropertyListing />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
