import React, { useEffect } from "react";
import ImageUpload from "./ImageUpload";
import AdressInfoCard from "./AdressInfoCard";
import GuardianInfoCard from "./GuardianInfoCard";
import EducationInfoCard from "./EducationInfoCard"; //import EducationDocuments from "./EducationDocuments"; // assuming this is the component
import { useAuth } from "../../Context/AuthContext";

const UpdateProfile = () => {
  const { authData, getData } = useAuth();
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex justify-between max-w-full">
      <div className="h-full w-1/3">
        <ImageUpload />

        <EducationInfoCard />
      </div>
      <div className="bg-orange-200 w-2/3 p-2 ml-2 ">
        <div id="adress-gaurdian" className=" flex gap-2 h-60 pb-2">
          <AdressInfoCard />
          <GuardianInfoCard />
        </div>
       
      </div>
    </div>
  );
};

export default UpdateProfile;
//
