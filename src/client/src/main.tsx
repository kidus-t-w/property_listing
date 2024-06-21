import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx"
import Services from "./pages/Services.tsx"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
