import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx"
import Services from "./pages/Services.tsx"
import PropertyDetail from '@/pages/PropertyDetail.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PropertyListing from "./pages/PropertyListing.tsx";
import CreateListing from "./pages/CreateListing.tsx";
import Contact from "./pages/Contact.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "profile",
        element: <Profile/>
      },
      {
        path: 'services',
        element: <Services/>
      },
      {
        path: 'property_listing',
        element: <PropertyListing/>
      },
      {
        path: 'property_detail',
        element: <PropertyDetail />
      },
      {
        path: 'create_listing',
        element: <CreateListing />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
