import { forgotPassword } from "@/utils/userHandler";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PasswordRecoveryForm = () => {
  const [stage, setStage] = useState("email"); // stages: email, otp, password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleSendOtp = async() => {
    if (email) {
        
            
            let res = await forgotPassword(email);
            if(res)
            {
                console.log(res)
                setStage("otp");
                toast.success("OTP sent successfully!");
            }
            else{        
                toast.error('User not found!');
                console.log(error);
            }
        
    } else {
      toast.info("Please enter your email!");
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.slice(-1);
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.join("") === "1234") {
      setError("");
      setStage("password");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
        toast.success("Password changed successfully!");
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    } else {
        toast.error("Passwords do not match!");
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center">
  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-transform duration-500 ease-in-out transform hover:scale-105">
    <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white animate-fade-in">
      {stage === "email" && "Enter Your Email"}
      {stage === "otp" && "OTP Verification"}
      {stage === "password" && "Change Your Password"}
    </h2>

    {stage === "email" && (
      <div className="animate-slide-in">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 mb-4 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="example@domain.com"
          required
        />
        <button
          onClick={handleSendOtp}
          className="w-full px-4 py-2 font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-colors duration-300"
        >
          Send OTP
        </button>
      </div>
    )}

    {stage === "otp" && (
      <form
        onSubmit={handleOtpSubmit}
        className="text-center animate-fade-in"
      >
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          We've sent an OTP to <span className="font-semibold">{email}</span>
        </p>
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-14 h-14 text-center text-lg font-semibold border rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          ))}
        </div>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition-colors duration-300"
        >
          Verify OTP
        </button>
      </form>
    )}

    {stage === "password" && (
      <form
        onSubmit={handlePasswordSubmit}
        className="animate-slide-in"
      >
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow hover:from-purple-600 hover:to-purple-700 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-colors duration-300"
        >
          Reset Password
        </button>
      </form>
    )}
  </div>
</section>

  );
};

export default PasswordRecoveryForm;
