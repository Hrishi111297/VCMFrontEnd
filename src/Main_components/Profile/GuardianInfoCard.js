import React, { useState, useEffect } from "react";
import { FaRegSave } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useAuth } from "../../Context/AuthContext";
import { base_url } from "../../Utils/MetaURL";
import { useLoader } from "../../Context/LoaderContext";
import useToast from "../../Utils/customHooks/useToast";
const GuardianInfoCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { authData, getData } = useAuth();
  const { showLoader, hideLoader } = useLoader();
  const toast = useToast();
  const initialFormData = {
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    userId: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (authData) {
      const guardianData =
        authData.user.DATA.guardianDetailsDto || initialFormData;
      const newData = {
        name: guardianData.name || "",
        contactNumber: guardianData.contactNumber || "",
        relationship: guardianData.relationship || "",
        userId: authData.user.DATA.id || "",
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

      const response = await fetch(`${base_url}/profile/update-gaurdian`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authData?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("success", "Guardian Details Details Saved!");
        getData();
      } else {
        toast("error", "Failed to save Guardian Details!");
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
    <div className="p-2 bg-white rounded-lg mt-2 shadow-md w-1/3 h-full  ">
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
        {/* Name */}
        <div className="flex items-center justify-between">
          <label htmlFor="name" className="block text-xs text-gray-700 w-1/3">
            Guardian Name
          </label>
          {isEditing ? (
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.name || "No data"}
            </p>
          )}
        </div>

        {/* Contact Number */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="contactNumber"
            className="block text-xs text-gray-700 w-1/3"
          >
            Contact Number
          </label>
          {isEditing ? (
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.contactNumber || "No data"}
            </p>
          )}
        </div>

        {/* Relationship */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="relationship"
            className="block text-xs text-gray-700 w-1/3"
          >
            Relationship
          </label>
          {isEditing ? (
            <input
              type="text"
              id="relationship"
              name="relationship"
              value={formData.relationship || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.relationship || "No data"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuardianInfoCard;
