import { useAuth } from "@/context/userContext";
import React, { useEffect, useState } from "react";
import { useNavigate , Link } from 'react-router-dom';
import {  toast } from 'react-toastify';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  
  const navigate = useNavigate();

  const {user, login,isAuthenticated} = useAuth();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      try {
        console.log("Form Data:", formData);
        let res = await login(formData);
        if(res)
          {
            navigate('/');
          }
          else{
            toast.error('Invalid Credentials!');
          }
        setErrors({});
      } catch (error) {
        console.log("unable to login", error);
      }
      finally{
        setLoading(false);
      }
      
    }
  };
  
    useEffect(()=>{
      console.log("user from login : ", user);
      if(isAuthenticated)
          navigate('/dashboard');
    },[isAuthenticated,user])

  return (
    <div className="font-[sans-serif] min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                Sign in to your account and explore a world of possibilities. Your journey begins here.
              </p>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">User name</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  className={`w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-blue-600 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter user name"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  className={`w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-blue-600 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to={'/forgot-password'} className="text-blue-600 hover:underline font-semibold">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div className="!mt-8">
            <button
                type="submit"
                className={`w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                 {loading ? (
                  <div className="inline-block h-6 w-6 animate-spin rounded-full border-b-2 border-gray-900 border-t-2 "></div>
                ) : (
                  "Login"
                )}
              </button>
            </div>

            <p className="text-sm !mt-8 text-center text-gray-800">
              Don't have an account?{" "}
              <Link to={'/signup'} className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                Register here
              </Link>
            </p>
          </form>
        </div>
        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
          <img
            src="https://readymadeui.com/login-image.webp"
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
