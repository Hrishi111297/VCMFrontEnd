import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../Utils/LoaderContext";
import useToast from "../Utils/customHooks/useToast";
import { base_url } from "../Utils/MetaURL";
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [captchaImage, setCaptchaImage] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  useEffect(() => {
    fetchCaptcha();
    localStorage.removeItem("token");
  }, []);

  const fetchCaptcha = async () => {
    try {
      const response = await fetch(base_url + "/auth/captcha");
      const data = await response.json();
      setCaptchaImage(data.image); // Set CAPTCHA image
      setCaptchaText(data.text); // Set CAPTCHA text
    } catch (error) {
      toast("error", "CAPTCHA API FAILED!!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaInputChange = (e) => {
    setUserCaptchaInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    showLoader();
    if (userCaptchaInput !== captchaText) {
      toast("error", "CAPTCHA FAILED!!");
      fetchCaptcha();
      setUserCaptchaInput("");
      hideLoader();
      return;
    }

    try {
      const body = JSON.stringify(formData);
      const response = await fetch(base_url + "/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      });
      const data = await response.json();
      console.log("data", data);
      if (response.ok) {
        debugger;

        toast("success", "Login successful!!");
        localStorage.setItem("token", data.token);
        setFormData({ username: "", password: "" });
        setUserCaptchaInput("");
        navigate("/dashboard");
      } else {
        debugger;
        const errorMessage = data.MESSAGE || "Login failed!!";
        toast("error", errorMessage);
      }
    } catch (error) {
      toast("error", "Error during login:" + error);
    } finally {
      //setLoading(false);
      hideLoader();
    }
  };

  return (
    <div className=" relative flex items-center justify-center min-h-screen ">
      <form
        className="p-6   bg-white rounded shadow-md w-96 "
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>

        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleChange}
            required
          />
        </div>

        {/* CAPTCHA */}
        <div className="mb-4">
          <img src={captchaImage} alt="CAPTCHA" className="mb-2" />
          <input
            type="text"
            placeholder="Enter CAPTCHA text"
            value={userCaptchaInput}
            onChange={handleCaptchaInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-3 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>

        {/* Links */}
        <div className="mt-4 text-center">
          <p>
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </a>
          </p>
          <p>
            <a href="/forgotPass" className="text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
