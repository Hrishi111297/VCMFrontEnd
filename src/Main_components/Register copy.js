import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../Utils/LoaderContext";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    emailId: "",
    password: "",
  });
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoader();

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("success", "Registration successful!");
        navigate("/login");
      } else {
        toast("error", "Registration failed!");
      }
    } catch (error) {
      toast("error", "Error during registration: " + error);
    } finally {
      hideLoader();
    }
  };

  return (
    <div className=" flex items-center justify-center min-h-screen bg-amber-50">
      <form
        className="p-6 bg-white rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-2xl font-bold text-center">Register</h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="middleName"
            className="block mb-2 text-sm font-medium"
          >
            Middle Name
          </label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block mb-2 text-sm font-medium"
          >
            Contact Number
          </label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emailId" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={formData.emailId}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-3 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default Register;
