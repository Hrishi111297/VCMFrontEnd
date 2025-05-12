import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);
  const handlePasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleRequestOtp = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/auth/verifyOtp/${email}`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        toast("success", "OTP sent to your email!");
      } else {
        toast("error", "Failed to send OTP!");
      }
    } catch (error) {
      toast("error", "Error sending OTP: " + error);
    }
  };

  const handlePasswordReset = async (e) => {
    debugger;
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast("error", "Passwords do not match!");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8080/auth/changePassword/${email}/${otp}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: newPassword,
            confirmPass: confirmPassword,
          }),
        }
      );
      if (response.ok) {
        debugger;
        toast("success", "Password reset successfully!");
        navigate("/login");
      } else {
        toast("error", "Failed to reset password!");
      }
    } catch (error) {
      toast("error", "Error during password reset: " + error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        className="p-6 bg-white rounded shadow-md w-96"
        onSubmit={handlePasswordReset}
      >
        <h2 className="mb-4 text-2xl font-bold text-center">Forgot Password</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleEmailChange}
            required
          />
          <button
            type="button"
            onClick={handleRequestOtp}
            className="w-full px-3 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Send OTP
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="otp" className="block mb-2 text-sm font-medium">
            OTP
          </label>
          <input
            type="text"
            name="otp"
            value={otp}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleOtpChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block mb-2 text-sm font-medium"
          >
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-3 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Reset Password
        </button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default ForgotPassword;
