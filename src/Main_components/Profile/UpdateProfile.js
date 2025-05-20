import React from "react";
import BasicInfo from "./BasicInfo";
import ImageUpload from "./ImageUpload";

const UpdateProfile = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        <div className=" col-span-1 h-full">
           <ImageUpload/>
           <div>
          
           </div>
           
        </div>
        <div className=" col-span-1 md:col-span-2 bg-blue-300 h-full">
          <div>personal</div>
          <div>adress</div>
          <div>education</div>
          <div>docs</div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
