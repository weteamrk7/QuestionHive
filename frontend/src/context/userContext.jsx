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
    
      let res = await loginUser(userData);
      if(res)
      {
        setUser(res);
        setIsAuthenticated(true);
        return true;
      }
      else{
        setIsAuthenticated(false);
        return false;
      }
      
   
  };
  const signup = async (userData) => {
  
      let res = await registerUser(userData);
      console.log(res);
      if(res)
      {
        setUser(res);
        setIsAuthenticated(true);
        return true;
      }
      else{
        setIsAuthenticated(false);
        return false;
      }
    
  };
  const loadUser = async () => {
  
      setLoading(true); // Begin loading state
      let res = await getUser(); // Fetch user data
      console.log("User from loadUser: ", res);
      if(res)
      {
        setUser(res);
        setIsAuthenticated(true); // Update authentication state
      }
      else{
        setIsAuthenticated(false);
      }
    
      setLoading(false); // End loading state
    
  };
  const logout = async() => {
    
      await logoutUser();
      setUser(null);
      setIsAuthenticated(false);
      return true;
    

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
