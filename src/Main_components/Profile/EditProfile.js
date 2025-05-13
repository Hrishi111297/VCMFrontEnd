import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { base_url } from "../../Utils/MetaURL";
import useToast from "../../Utils/customHooks/useToast";
import { useLoader } from "../../Context/LoaderContext";
import BasicInfo from "./BasicInfo";
import AddressInfo from "./AddressInfo";
import GuardianInfo from "./GuardianInfo";
import EducationInfo from "./EducationInfo";

const EditProfile = () => {
  const { authData } = useAuth();
  const { showLoader, hideLoader } = useLoader();
  const toast = useToast();

  const [stage, setStage] = useState(1); // Manages which stage (form section) is displayed
  const [basicCompleted, setBasicCompleted] = useState(false);

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
  });

  const [addressData, setAddressData] = useState({
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    userId: authData?.userId || "",
  });

  const [guardianData, setGuardianData] = useState({
    name: "",
    contactNumber: "",
    relationship: "",
    userId: authData?.userId || "",
  });

  const [educationData, setEducationData] = useState([
    {
      degree: "",
      fieldOfStudy: "",
      universityName: "",
      startYear: "",
      endYear: "",
      grade: "",
      highest: false,
      userId: authData?.userId || "",
    },
  ]);

  useEffect(() => {
    const fetchProfile = async () => {
      showLoader();
      try {
        const res = await fetch(
          `${base_url}/profile/profile-details/${authData?.Id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authData?.token}`,
            },
          }
        );
        const data = await res.json();
        if (data.SUCCESS) {
          setFormData({
            firstName: data.DATA.firstName || "",
            middleName: data.DATA.middleName || "",
            lastName: data.DATA.lastName || "",
            gender: data.DATA.gender || "",
            birthDate: data.DATA.birthDate || "",
            adharNumber: data.DATA.adharNumber || "",
            bloodGroup: data.DATA.bloodGroup || "",
            contactNumber: data.DATA.contactNumber || "",
            emailId: data.DATA.emailId || "",
          });
        } else {
          toast("error", "Failed to load profile");
        }
      } catch (err) {
        toast("error", "Error fetching profile: " + err.message);
      } finally {
        hideLoader();
      }
    };

    fetchProfile();
  }, [authData]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuardianChange = (e) => {
    const { name, value } = e.target;
    setGuardianData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedEducationData = [...educationData];
    if (type === "checkbox") {
      updatedEducationData[index][name] = checked;
    } else {
      updatedEducationData[index][name] = value;
    }
    setEducationData(updatedEducationData);
  };

  const handleAddEducation = () => {
    setEducationData([
      ...educationData,
      {
        degree: "",
        fieldOfStudy: "",
        universityName: "",
        startYear: "",
        endYear: "",
        grade: "",
        highest: false,
        userId: authData?.userId || "",
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducationData = educationData.filter(
      (_, idx) => idx !== index
    );
    setEducationData(updatedEducationData);
  };

  const handleBasicSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }

      const response = await fetch(`${base_url}/user/profile/update`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authData?.token}`,
        },
        body: payload,
      });

      if (response.ok) {
        toast("success", "Basic info saved");
        setBasicCompleted(true);
        setStage(2); // Move to the address stage
      } else {
        toast("error", "Failed to save basic info");
      }
    } catch (error) {
      toast("error", error.message);
    } finally {
      hideLoader();
    }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const response = await fetch(`${base_url}/user/address/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData?.token}`,
        },
        body: JSON.stringify(addressData),
      });

      if (response.ok) {
        toast("success", "Address saved");
        setStage(3); // Move to the guardian stage
      } else {
        toast("error", "Failed to save address");
      }
    } catch (error) {
      toast("error", error.message);
    } finally {
      hideLoader();
    }
  };

  const handleGuardianSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const response = await fetch(`${base_url}/user/guardian/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData?.token}`,
        },
        body: JSON.stringify(guardianData),
      });

      if (response.ok) {
        toast("success", "Guardian info saved");
        setStage(4); // Move to the education stage
      } else {
        toast("error", "Failed to save guardian info");
      }
    } catch (error) {
      toast("error", error.message);
    } finally {
      hideLoader();
    }
  };

  const handleEducationSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const response = await fetch(`${base_url}/user/education/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData?.token}`,
        },
        body: JSON.stringify({ educationData }),
      });

      if (response.ok) {
        toast("success", "Education info saved");
      } else {
        toast("error", "Failed to save education info");
      }
    } catch (error) {
      toast("error", error.message);
    } finally {
      hideLoader();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      <div className="w-full max-w-4xl mt-6">
        {/* Stage navigation */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${
              stage === 1 ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setStage(1)}
          >
            1. Basic Info
          </button>
          <button
            disabled={!basicCompleted}
            className={`px-4 py-2 rounded ${
              stage === 2
                ? "bg-purple-600 text-white"
                : !basicCompleted
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200"
            }`}
            onClick={() => basicCompleted && setStage(2)}
          >
            2. Address Info
          </button>
          <button
            disabled={stage < 2}
            className={`px-4 py-2 rounded ${
              stage === 3 ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => stage >= 2 && setStage(3)}
          >
            3. Guardian Info
          </button>
          <button
            disabled={stage < 3}
            className={`px-4 py-2 rounded ${
              stage === 4 ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => stage >= 3 && setStage(4)}
          >
            4. Education Info
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={
            stage === 1
              ? handleBasicSubmit
              : stage === 2
              ? handleAddressSubmit
              : stage === 3
              ? handleGuardianSubmit
              : handleEducationSubmit
          }
          className="bg-white shadow-md rounded p-6"
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            {stage === 1
              ? "Basic Information"
              : stage === 2
              ? "Address Information"
              : stage === 3
              ? "Guardian Information"
              : "Education Information"}
          </h2>

          {stage === 1 && (
            <BasicInfo
              formData={formData}
              handleFormChange={handleFormChange}
            />
          )}
          {stage === 2 && (
            <AddressInfo
              addressData={addressData}
              handleAddressChange={handleAddressChange}
            />
          )}
          {stage === 3 && (
            <GuardianInfo
              guardianData={guardianData}
              handleGuardianChange={handleGuardianChange}
            />
          )}
          {stage === 4 && (
            <EducationInfo
              educationData={educationData}
              handleEducationChange={handleEducationChange}
              handleAddEducation={handleAddEducation}
              handleRemoveEducation={handleRemoveEducation}
            />
          )}

          <button
            type="submit"
            className="w-full mt-6 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
          >
            {stage === 1
              ? "Save Basic Info"
              : stage === 2
              ? "Save Address Info"
              : stage === 3
              ? "Save Guardian Info"
              : "Save Education Info"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
