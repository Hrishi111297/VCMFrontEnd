import React from "react";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainerWrapper = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick={false}
      pauseOnHover
      draggable
      pauseOnFocusLoss
      theme="dark"
      transition={Bounce}
    />
  );
};

export default ToastContainerWrapper;
