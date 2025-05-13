import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../Context/LoaderContext";
import { base_url } from "../Utils/MetaURL";
import useToast from "../Utils/customHooks/useToast";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    adharNumber: "",
    bloodGroup: "",
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
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoader();

    try {
      const response = await fetch(base_url + "/auth/register", {
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
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        className="w-full max-w-4xl p-4 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block mb-1 text-sm font-medium"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label
              htmlFor="middleName"
              className="block mb-1 text-sm font-medium"
            >
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block mb-1 text-sm font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block mb-1 text-sm font-medium">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Birth Date */}
          <div>
            <label
              htmlFor="birthDate"
              className="block mb-1 text-sm font-medium"
            >
              Birth Date
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Aadhar Number */}
          <div>
            <label
              htmlFor="adharNumber"
              className="block mb-1 text-sm font-medium"
            >
              Aadhar Number
            </label>
            <input
              type="text"
              name="adharNumber"
              value={formData.adharNumber}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label
              htmlFor="bloodGroup"
              className="block mb-1 text-sm font-medium"
            >
              Blood Group
            </label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contactNumber"
              className="block mb-1 text-sm font-medium"
            >
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="emailId" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-6 text-white bg-purple-600 rounded hover:bg-purple-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
