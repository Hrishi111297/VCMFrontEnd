import React from "react";
import ReactModal from "react-modal";
import Lottie from "lottie-react";
import LoaderLottie from "../Utils/customHooks/CommonLotties/hrmsLoader.json"
import { useLoader } from "../Context/LoaderContext";
const Loader = () => {
  const loaderStyle = {
    width: "400px", // Adjust size of the loader
    margin: "0 auto",
  };
 const { isLoading } = useLoader();

  if (!isLoading) return null;
  return (
    <ReactModal
      isOpen={isLoading}
      contentLabel="Loading"
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center bg-transparent"
      overlayClassName="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
      shouldCloseOnOverlayClick={false}
    >
      <Lottie
        animationData={LoaderLottie}
        style={loaderStyle}
      />
    </ReactModal>
  );
};

// Loader.propTypes = {
//   loading: PropTypes.bool.isRequired,
// };

export default Loader;
