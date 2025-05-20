import { useCallback } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

const useToast = () => {
  const showToast = useCallback((type, message, options = {}) => {
    if (["success", "error", "info", "warning"].includes(type)) {
      toast[type](message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        ...options, // Allow additional custom options to override default
      });
    } else {
      console.error("Invalid toast type");
    }
  }, []);

  return showToast;
};

export default useToast;
