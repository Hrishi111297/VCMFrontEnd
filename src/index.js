import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./Main_components/AppLayout"; // Layout with Header/Footer
import Home from "./Components/Home";
import Login from "./Main_components/Login";
import Courses from "./Components/Courses";
import Error from "./Utils/Error";
import PrivateRoute from "./Utils/PrivateRoute";
import Dashboard from "./Main_components/Dashboard/Dashboard";
import { LoaderProvider } from "./Context/LoaderContext";
import Register from "./Main_components/Register";
import ForgotPassword from "./Main_components/ForgotPassword";
import DashboardHome from "./Main_components/Dashboard/DashboardHome";
import EditProfile from "./Main_components/Profile/EditProfile";
import { AuthProvider } from "./Context/AuthContext";
import UpdateProfile from "./Main_components/Profile/UpdateProfile";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgotPass", element: <ForgotPassword /> },

      // Top-level routes
      { path: "/courses", element: <Courses /> }, // Assuming this is a course overview

      {
        path: "/main",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "editprofile", element: <UpdateProfile /> },

          // Submodules
          {
            path: "courses",
            children: [
              { index: true, element: <div>Course List</div> },
              { path: "add", element: <div>Add New Course</div> },
              { path: "edit/:courseId", element: <div>Edit Course</div> },
              { path: "details", element: <div>Course Details</div> },
            ],
          },

          {
            path: "staff",
            children: [
              { index: true, element: <div>Staff List</div> },
              { path: "add", element: <div>Add New Staff</div> },
              { path: "profile/:staffId", element: <div>Staff Profile</div> },
            ],
          },

          {
            path: "attendance",
            children: [
              { path: "today", element: <div>Today's Attendance</div> },
              { path: "report", element: <div>Attendance Report</div> },
              { path: "mark", element: <div>Mark Attendance</div> },
            ],
          },

          {
            path: "fees",
            children: [
              { index: true, element: <div>Fees Overview</div> },
              { path: "pay", element: <div>Pay Fees</div> },
              { path: "history", element: <div>Payment History</div> },
              { path: "due", element: <div>Due Fees</div> },
            ],
          },

          {
            path: "categories",
            children: [
              { index: true, element: <div>Category List</div> },
              { path: "add", element: <div>Add Category</div> },
              { path: "edit/:categoryId", element: <div>Edit Category</div> },
            ],
          },

          { path: "about", element: <div>About Us</div> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </LoaderProvider>
  </React.StrictMode>
);

reportWebVitals();
