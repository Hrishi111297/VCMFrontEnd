import React, { useRef, useState, useEffect } from "react";
import useProfileImage from "./Util/useProfileImage";
import { uploadImage } from "./Services/ImageService";
import { useAuth } from "../../Context/AuthContext";
import useToast from "../../Utils/customHooks/useToast";
import PersonalInfoCard from "./PersonalInfoCard";
import getProfileImage from "./Util/useProfileImage";

const ImageUpload = () => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const toast = useToast();
  const { authData, getData } = useAuth();
  useEffect(() => {
    if (authData !== null) {
      getProfileImage(authData, setPreview);
    }
  }, [authData]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      let result = await uploadImage(
        file,
        authData?.token,
        authData.user.DATA.id
      );
      getData();

      toast(result.type, result.message);
    }
  };

  return (
    <div className="h-full border-r p-4 ">
      <div className=" h-1/5 bg-gray-200 shadow-md  rounded-t-lg flex justify-center">
        <div
          onClick={handleImageClick}
          className=" w-36 h-36 border-8 border-white  rounded-full cursor-pointer flex items-center justify-center overflow-hidden relative top-8"
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-fill"
            />
          ) : (
            <span className="text-gray-400 text-sm">Click to upload</span>
          )}
        </div>
      </div>
      <div className="h-4/5 bg-white rounded-b-lg shadow-md ">
        <div className="pt-14 md:pt-10 h-full">
          <PersonalInfoCard />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
