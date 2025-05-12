// Function to decode JWT and check expiry
export const isTokenValid = (token) => {
  if (!token) return false;
  debugger;
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT token
    const expiryTime = decodedToken.exp * 1000; // Expiry is in seconds, so multiply by 1000
    const currentTime = Date.now();

    if (expiryTime > currentTime) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Token decoding failed:", error);
    return false;
  }
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
