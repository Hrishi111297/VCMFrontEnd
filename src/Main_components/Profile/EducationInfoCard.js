import EducationCard from "./EducationCard";
import React, { useState, useEffect } from "react";
import { FaRegSave } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useAuth } from "../../Context/AuthContext";
import { base_url } from "../../Utils/MetaURL";
import { useLoader } from "../../Context/LoaderContext";
import useToast from "../../Utils/customHooks/useToast";
const  EducationSection = () => {
  const { authData, getData } = useAuth();
  const { showLoader, hideLoader } = useLoader();
  const toast = useToast();

  const [educationList, setEducationList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (authData) {
      const educationData = authData.user.DATA.educationDetailsDto || [];
      setEducationList(educationData);
    }
   
  }, [authData]);

  const handleChange = (e, id) => {
    const { name, value, type, checked } = e.target;
    setEducationList((prevList) =>
      prevList.map((edu) =>
        edu.id === id
          ? { ...edu, [name]: type === "checkbox" ? checked : value }
          : edu
      )
    );
  };
  const handleAddEducation = () => {
    const newEducation = {
      // Unique ID
      degree: "",
      fieldOfStudy: "",
      universityName: "",
      startYear: "",
      endYear: "",
      grade: "",
      highest: false,
    };
    setEducationList((prevList) => [...prevList, newEducation]);
    setIsEditing(true);
  };
  const handleSave = async () => {
    showLoader();
    try {
      const response = await fetch(`${base_url}/profile/update_education`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authData?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(educationList), // send all records
      });

      if (response.ok) {
        toast("success", "Education details updated successfully!");
        getData();
      } else {
        toast("error", "Failed to update education details");
      }
    } catch (error) {
      toast("error", error.message);
    } finally {
      hideLoader();
      setIsEditing(false);
    }
  };

  return (
    <div className="mt-2">
      <div
        onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        className="text-right mb-2 cursor-pointer text-purple-600"
      >
        {isEditing ? <FaRegSave /> : <CiEdit />}
      </div>
      {isEditing && (
        <button
          onClick={handleAddEducation}
          className="text-sm bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-700"
        >
          Add Education
        </button>
      )}
      <div className=" flex  flex-wrap gap-2 w-full">
        {console.log("dsd", educationList)}
        {educationList.map((edu) => (
          <EducationCard
            key={edu.id}
            education={edu}
            isEditing={isEditing}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
