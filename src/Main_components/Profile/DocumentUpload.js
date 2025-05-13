import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { base_url } from "../../Utils/MetaURL";
import useToast from "../../Utils/customHooks/useToast";
import { useLoader } from "../../Context/LoaderContext";
import BasicInfo from "./BasicInfo";
import AddressInfo from "./AddressInfo";
import GuardianInfo from "./GuardianInfo";
import EducationInfo from "./EducationInfo";
import DocumentUpload from "./DocumentUpload";

const EditProfile = () => {
  const { authData } = useAuth();
  const { showLoader, hideLoader } = useLoader();
  const toast = useToast();

  const [stage, setStage] = useState(1);
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

  const [documents, setDocuments] = useState([
    {
      docType: "",
      doc: null,
      userId: authData?.userId || "",
    },
  ]);

  useEffect(() => {
    const fetchProfile = async () => {
      showLoader();
      try {
        const res = await fetch(
          `${base_url}/profile/profile-details/${authData?.userId}`,
          {
            headers: {
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
        toast("error", err.message);
      } finally {
        hideLoader();
      }
    };

    fetchProfile();
  }, [authData]);

  // Handlers
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
    const updated = [...educationData];
    updated[index][name] = type === "checkbox" ? checked : value;
    setEducationData(updated);
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
    const updated = [...educationData];
    updated.splice(index, 1);
    setEducationData(updated);
  };

  const handleDocChange = (e, index) => {
    const { name, value, files } = e.target;
    const updated = [...documents];
    updated[index][name] = name === "doc" ? files[0] : value;
    setDocuments(updated);
  };

  const handleAddDoc = () => {
    setDocuments([
      ...documents,
      { docType: "", doc: null, userId: authData?.userId || "" },
    ]);
  };

  const handleRemoveDoc = (index) => {
    const updated = [...documents];
    updated.splice(index, 1);
    setDocuments(updated);
  };

  // Submit Handlers
  const handleBasicSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const payload = new FormData();
      for (const key in formData) payload.append(key, formData[key]);

      const res = await fetch(`${base_url}/user/profile/update`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${authData?.token}` },
        body: payload,
      });

      if (res.ok) {
        toast("success", "Basic info updated");
        setBasicCompleted(true);
        setStage(2);
      } else toast("error", "Failed to update basic info");
    } catch (err) {
      toast("error", err.message);
    } finally {
      hideLoader();
    }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const res = await fetch(`${base_url}/user/address/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData?.token}`,
        },
        body: JSON.stringify(addressData),
      });
      res.ok
        ? (toast("success", "Address saved"), setStage(3))
        : toast("error", "Failed to save address");
    } catch (err) {
      toast("error", err.message);
    } finally {
      hideLoader();
    }
  };

  const handleGuardianSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const res = await fetch(`${base_url}/user/guardian/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData?.token}`,
        },
        body: JSON.stringify(guardianData),
      });
      res.ok
        ? (toast("success", "Guardian saved"), setStage(4))
        : toast("error", "Failed to save guardian");
    } catch (err) {
      toast("error", err.message);
    } finally {
      hideLoader();
    }
  };

  const handleEducationSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const res = await fetch(`${base_url}/user/education/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData?.token}`,
        },
        body: JSON.stringify({ educationData }),
      });
      res.ok
        ? (toast("success", "Education saved"), setStage(5))
        : toast("error", "Failed to save education");
    } catch (err) {
      toast("error", err.message);
    } finally {
      hideLoader();
    }
  };

  const handleDocumentSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    try {
      const payload = new FormData();
      documents.forEach((doc, idx) => {
        payload.append(`docType_${idx}`, doc.docType);
        payload.append(`doc_${idx}`, doc.doc);
        payload.append(`userId`, doc.userId);
      });

      const res = await fetch(`${base_url}/user/document/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${authData?.token}` },
        body: payload,
      });

      res.ok
        ? toast("success", "Documents uploaded")
        : toast("error", "Upload failed");
    } catch (err) {
      toast("error", err.message);
    } finally {
      hideLoader();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Stage Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {["Basic", "Address", "Guardian", "Education", "Documents"].map(
            (label, i) => (
              <button
                key={label}
                className={`px-4 py-2 rounded ${
                  stage === i + 1 ? "bg-purple-600 text-white" : "bg-gray-300"
                }`}
                onClick={() => stage > i && setStage(i + 1)}
                disabled={stage <= i}
              >
                {i + 1}. {label}
              </button>
            )
          )}
        </div>

        <form
          onSubmit={
            stage === 1
              ? handleBasicSubmit
              : stage === 2
              ? handleAddressSubmit
              : stage === 3
              ? handleGuardianSubmit
              : stage === 4
              ? handleEducationSubmit
              : handleDocumentSubmit
          }
          className="bg-white p-6 rounded shadow"
        >
          {stage === 1 && (
            <BasicInfo formData={formData} handleChange={handleFormChange} />
          )}
          {stage === 2 && (
            <AddressInfo
              addressData={addressData}
              handleChange={handleAddressChange}
            />
          )}
          {stage === 3 && (
            <GuardianInfo
              guardianData={guardianData}
              handleChange={handleGuardianChange}
            />
          )}
          {stage === 4 && (
            <EducationInfo
              educationData={educationData}
              handleChange={handleEducationChange}
              handleAdd={handleAddEducation}
              handleRemove={handleRemoveEducation}
            />
          )}
          {stage === 5 && (
            <DocumentUpload
              documents={documents}
              handleDocChange={handleDocChange}
              handleAddDoc={handleAddDoc}
              handleRemoveDoc={handleRemoveDoc}
            />
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            {stage === 5 ? "Finish" : "Save & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
