import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./Main_components/AppLayout"; // Layout with Header/Footer
import Home from "./Main_components/Home";
import Login from "./Main_components/Login";
import Courses from "./Components/Courses";
import Error from "./Utils/Error";
import PrivateRoute from "./Utils/PrivateRoute";
import Dashboard from "./Main_components/Dashboard";
import { LoaderProvider } from "./Utils/LoaderContext";
import ReactCourse from "./Main_components/ReactCourse";
import JavaScriptCourse from "./Main_components/JavaScriptCourse";
import Register from "./Main_components/Register";
import ForgotPassword from "./Main_components/ForgotPassword";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // You can skip this if not needed
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgotPass", element: <ForgotPassword /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/course",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
        children: [
          { path: "javascript", element: <JavaScriptCourse /> },
          { path: "react", element: <ReactCourse /> },
        ],
      },
      // Add more routes here as needed
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoaderProvider>
      <RouterProvider router={appRouter} />
    </LoaderProvider>
  </React.StrictMode>
);

reportWebVitals();
