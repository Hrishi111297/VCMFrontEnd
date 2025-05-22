import { fetchProfileImage } from "../Constant";

/**
 * Function to fetch the user's profile image and set it via the provided setter.
 *
 * @param {Object} authData - The user's authentication data (must contain token and user ID).
 * @param {Function} setImage - Setter function to update the image state.
 */
const getProfileImage = async (authData, setImage) => {
  if (!authData || !authData.user || !authData.user.DATA) return;

  try {
    const userId = authData.user.DATA.id;
    const response = await fetch(`${fetchProfileImage}${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authData.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    setImage(imageUrl);
  } catch (error) {
    console.error("Failed to fetch image:", error);
  }
};

export default getProfileImage;
