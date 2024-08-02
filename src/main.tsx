import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import './styles/firebaseEmulatorWarning.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(
  document.getElementById("root") ?? document.createElement("div")
).render(
  <React.StrictMode>
    <SpeedInsights />

    <RouterProvider router={router} />
  </React.StrictMode>
);
