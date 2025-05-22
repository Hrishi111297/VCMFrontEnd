import React, { useState, useEffect } from "react";
import { FaRegSave } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useAuth } from "../../Context/AuthContext";
import { base_url } from "../../Utils/MetaURL";
import { useLoader } from "../../Context/LoaderContext";
import useToast from "../../Utils/customHooks/useToast";
const PersonalInfoCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { authData, getData } = useAuth();
  const { showLoader, hideLoader } = useLoader();
  const toast = useToast();
  const initialFormData = {
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    adharNumber: "",
    bloodGroup: "",
    contactNumber: "",
    emailId: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (authData) {
      const newData = {
        id: authData.user.DATA.id || "",
        firstName: authData.user.DATA.firstName || "",
        middleName: authData.user.DATA.middleName || "",
        lastName: authData.user.DATA.lastName || "",
        gender: authData.user.DATA.gender || "",
        birthDate: authData.user.DATA.birthDate || "",
        adharNumber: authData.user.DATA.adharNumber || "",
        bloodGroup: authData.user.DATA.bloodGroup || "",
        contactNumber: authData.user.DATA.contactNumber || "",
        emailId: authData.user.DATA.emailId || "",
      };

      setFormData(newData);
    }
  }, [authData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSavePersonalInfo = async (updatedData) => {
    debugger;
    showLoader();
    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }

      const response = await fetch(`${base_url}/profile/update-profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authData?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("success", "Basic info saved");
        getData();
      } else {
        toast("error", "Failed to save basic info");
      }
    } catch (error) {
      toast("error", error.message);
    } finally {
      hideLoader();
    }
  };

  const handleEditClick = () => {
    if (isEditing) {
      // Save the changes when the save button is clicked
      handleSavePersonalInfo(formData);
    }
    setIsEditing((prev) => !prev); // Toggle edit mode
  };

  return (
    <div className="p-2 bg-white max-w-3xl mx-auto h-full  ">
      <div onClick={handleEditClick} className="text-gray-500 cursor-pointer">
        {isEditing ? (
          <span className="text-purple-600">
            <FaRegSave />
          </span>
        ) : (
          <span className="text-gray-400">
            <CiEdit />
          </span>
        )}
      </div>

      <div className="space-y-2">
        {/* First Name */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="firstName"
            className="block text-xs  text-gray-700 w-1/3"
          >
            First Name
          </label>
          {isEditing ? (
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.firstName || "No data"}
            </p>
          )}
        </div>

        {/* Middle Name */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="middleName"
            className="block text-xs font-medium text-gray-700 w-1/3"
          >
            Middle Name
          </label>
          {isEditing ? (
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.middleName || "No data"}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="lastName"
            className="block text-xs font-medium text-gray-700 w-1/3"
          >
            Last Name
          </label>
          {isEditing ? (
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.lastName || "No data"}
            </p>
          )}
        </div>

        {/* Gender */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="gender"
            className="block text-xs font-medium text-gray-700 w-1/3"
          >
            Gender
          </label>
          {isEditing ? (
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.gender || "No data"}
            </p>
          )}
        </div>

        {/* Birth Date */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="birthDate"
            className="block text-xs font-medium text-gray-700 w-1/3"
          >
            Birth Date
          </label>
          {isEditing ? (
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.birthDate || "No data"}
            </p>
          )}
        </div>

        {/* Aadhar Number */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="adharNumber"
            className="block text-xs font-medium text-gray-700 w-1/3"
          >
            Aadhar Number
          </label>
          {isEditing ? (
            <input
              type="text"
              id="adharNumber"
              name="adharNumber"
              value={formData.adharNumber}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.adharNumber || "No data"}
            </p>
          )}
        </div>

        {/* Blood Group */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="bloodGroup"
            className="block text-xs font-medium text-gray-700 w-1/3"
          >
            Blood Group
          </label>
          {isEditing ? (
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.bloodGroup || "No data"}
            </p>
          )}
        </div>

        {/* Contact Number */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="contactNumber"
            className="block text-xs font-medium text-gray-700 w-1/3"
          >
            Contact Number
          </label>
          {isEditing ? (
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.contactNumber || "No data"}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="emailId"
            className="block text-xs font-medium text-gray-700 w-1/3"
          >
            Email
          </label>
          {isEditing ? (
            <input
              type="email"
              id="emailId"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.emailId || "No data"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
