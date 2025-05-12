// src/AppLayout.js
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ToastContainerWrapper from "./ToastContainerWrapper";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";
const AppLayout = () => {
    const location = useLocation();
  return (
    <div className="bg-white text-black">
    <Loader />
    {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPass" && <Header />}
      <Outlet />
      <ToastContainerWrapper/>
      {(location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPass") && <Footer />}
    </div>
  );
};

export default AppLayout;
