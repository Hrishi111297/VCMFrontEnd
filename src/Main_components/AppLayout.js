// src/AppLayout.js
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "../Components/Footer";
import ToastContainerWrapper from "../Utils/ToastContainerWrapper";
import Loader from "../Utils/Loader";
import { useLocation } from "react-router-dom";
const AppLayout = () => {
    const location = useLocation();
  return (
    <div className="bg-white text-black">
    <Loader />
    {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPass" && <MainHeader />}
      <Outlet />
      <ToastContainerWrapper/>
      {(location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPass") && <Footer />}
    </div>
  );
};

export default AppLayout;
