import { loginUser, registerUser,getUser,logoutUser } from "@/utils/userHandler";
import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async (userData) => {
    try {
      let res = await loginUser(userData);
      setUser(res);
      setIsAuthenticated(true);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const signup = async (userData) => {
    try {
      let res = await registerUser(userData);
      console.log(res);
      setUser(res);
      setIsAuthenticated(true);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const loadUser = async () => {
    try {
      setLoading(true); // Begin loading state
      let res = await getUser(); // Fetch user data
      console.log("User from loadUser: ", res);
      setUser(res);
      setIsAuthenticated(!!res); // Update authentication state
    } catch (error) {
      console.error("Error loading user: ", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false); // End loading state
    }
  };
  const logout = async() => {
    try {
      await logoutUser();
      setUser(null);
      setIsAuthenticated(false);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }

  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    signup,
    loadUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
