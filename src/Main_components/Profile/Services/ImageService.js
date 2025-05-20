import { uploadProfileImage } from "../Constant";
export const uploadImage = async (file, token,id) => {
  debugger;

  const formData = new FormData();
  formData.append("profile_pic", file);

  try {
    const response = await fetch(uploadProfileImage+id, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
 return {
        type: "error",
        message: "Failed to upload image",
      };
    }
    const result = await response.json();
    return {
      type: "success",
      message: result.MESSAGE || "Image uploaded successfully",
    };
  } catch (error) {
 return {
      type: "error",
      message: error.message || "An unexpected error occurred",
    };
  }
};
