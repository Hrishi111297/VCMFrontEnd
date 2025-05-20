import { useEffect, useState } from "react";
import { useAuth } from "../../../Context/AuthContext";
import { fetchProfileImage } from "../Constant";
const useProfileImage = () => {
  const [image, setImage] = useState(null);
  const { authData,refreshData } = useAuth();
  const fetchImage = async () => {
refreshData()
    try {
      console.log("id", authData);
      const response = await fetch(fetchProfileImage + authData.user.DATA.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData.token}`,
        },
      });

      //console.log(authData)
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob); // Convert to URL usable in <img src=...>
      setImage(imageUrl);
    } catch (error) {
      console.error("Failed to fetch image:", error);
    }
  };
  useEffect(() => {
      fetchImage();
  }, []); // Dependency on the token

  return image;
};

export default useProfileImage;
