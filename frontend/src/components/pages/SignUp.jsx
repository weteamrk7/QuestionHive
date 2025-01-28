import { useAuth } from "@/context/userContext";
import React, { useEffect, useState } from "react";
import { useNavigate , Link } from 'react-router-dom';




const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    termsAccepted: false,
  });
  const navigate = useNavigate();
  const { signup,user, isAuthenticated } = useAuth();

  useEffect(()=>{
    console.log("user from signup : ", user);
  },[])

  const [errors, setErrors] = useState({});
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions";
    return newErrors;
  };

  const handleSubmit = async(e) => {

    
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      try {
        console.log("Form Submitted:", formData);
        let res = await signup(formData);
        navigate('/');
        setErrors({});
      } catch (error) {
        console.log("unable to create user.", error);
      }
      finally{
        setLoading(false);
      }
    }
  };

  useEffect(()=>{
    if(isAuthenticated)
        navigate('/dashboard');
  },[user, isAuthenticated])
  return (
    <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
      <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
              Welcome to our registration page! Get started by creating your account.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
              Our registration process is designed to be straightforward and secure.
            </p>
          </div>
        </div>

        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16" onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-gray-800 text-2xl font-bold">Create an account</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <input
                name="name"
                type="text"
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input
                name="email"
                type="email"
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Mobile</label>
              <input
                name="mobile"
                type="text"
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            <div className="flex items-center">
              <input
                id="termsAccepted"
                name="termsAccepted"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor="termsAccepted" className="ml-3 block text-sm text-gray-800">
                I accept the{" "}
                <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">
                  Terms and Conditions
                </a>
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-500 text-xs">{errors.termsAccepted}</p>
            )}
          </div>

          <div className="!mt-12">
          <button
                type="submit"
                className={`w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-600 hover:bg-gray-700 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                 {loading ? (
                  <div className="inline-block h-6 w-6 animate-spin rounded-full border-b-2 border-gray-900 border-t-2 "></div>
                ) : (
                  "Create an account"
                )}
              </button>
          </div>

          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link to={'/login'} className="text-blue-600 font-semibold hover:underline ml-1">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
