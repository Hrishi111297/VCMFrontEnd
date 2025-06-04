import React, { useState, useEffect } from "react";
import { FaRegSave } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useAuth } from "../../Context/AuthContext";
import { base_url } from "../../Utils/MetaURL";
import { useLoader } from "../../Context/LoaderContext";
import useToast from "../../Utils/customHooks/useToast";
const AdressInfoCard = () => {
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
      debugger;
      const adressdata = authData.user.DATA.addressDto||initialFormData;
      const newData = {
        houseNumber: adressdata.houseNumber || "",
        street: adressdata.street || "",
        city: adressdata.city || "",
        state: adressdata.state || "",
        pincode: adressdata.pincode || "",
        country: adressdata.country || "",
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

      const response = await fetch(`${base_url}/profile/update_address`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authData?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("success", "Address Details Saved!");
        getData();
      } else {
        toast("error", "Failed to save Address Details!");
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
    <div className="p-2 bg-white rounded-lg mt-2 shadow-md  h-full w-2/3 ">
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
        {/* House Number */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="houseNumber"
            className="block text-xs text-gray-700 w-1/3"
          >
            House Number
          </label>
          {isEditing ? (
            <input
              type="number"
              id="houseNumber"
              name="houseNumber"
              value={formData.houseNumber || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.houseNumber || "No data"}
            </p>
          )}
        </div>

        {/* Street */}
        <div className="flex items-center justify-between">
          <label htmlFor="street" className="block text-xs text-gray-700 w-1/3">
            Street
          </label>
          {isEditing ? (
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.street || "No data"}
            </p>
          )}
        </div>

        {/* City */}
        <div className="flex items-center justify-between">
          <label htmlFor="city" className="block text-xs text-gray-700 w-1/3">
            City
          </label>
          {isEditing ? (
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.city || "No data"}
            </p>
          )}
        </div>

        {/* State */}
        <div className="flex items-center justify-between">
          <label htmlFor="state" className="block text-xs text-gray-700 w-1/3">
            State
          </label>
          {isEditing ? (
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.state || "No data"}
            </p>
          )}
        </div>

        {/* Pincode */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="pincode"
            className="block text-xs text-gray-700 w-1/3"
          >
            Pincode
          </label>
          {isEditing ? (
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.pincode || "No data"}
            </p>
          )}
        </div>

        {/* Country */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="country"
            className="block text-xs text-gray-700 w-1/3"
          >
            Country
          </label>
          {isEditing ? (
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country || "No data"}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {formData.country || "No data"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdressInfoCard;
