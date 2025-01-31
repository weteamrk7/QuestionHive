import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useAuth, ClerkLoaded, ClerkLoading } from '@clerk/clerk-react';

import ExamManagementLandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import SignUpPage from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import DashBoard from './components/pages/DashBoard';
import CreateExam from './components/pages/CreateExam';
import SelectQuestions from './components/pages/SelectQuestions';
import AddedQuestions from './components/pages/AddedQuestions';
import Preview from './components/pages/Preview';
// import  from './components/adminPages/addQuestions';
import {useAuth} from './context/userContext';
import Cheakout from './components/payments/Cheakout';
import Success from './components/payments/Success';
import Failure from './components/payments/Failure';
import PasswordRecoveryForm from './components/pages/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import AddQuestions from './components/adminPages/AddQuestions';
import AddMultipleQuestions from './components/adminPages/AddMultipleQuestions';


function App() {

const {loadUser, isAuthenticated , loading} = useAuth();
  
function ProtectedRoute({ children }) {
  console.log("isAuthenticated ", isAuthenticated);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="text-xl font-semibold text-gray-700">Loading...</div>
      </div>
      )
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}


useEffect(() => {
  loadUser();
}, [])

  return (
    <>
    {/* <ClerkLoading>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="text-xl font-semibold text-gray-700">Question Hive Powered by <img className='w-50 h-60' src="./watermark.jpeg" /></div>
      </div>
    </ClerkLoading> */}
    {/* <ClerkLoaded> */}
      <Router>
        <Routes>
          <Route path="/" element={<ExamManagementLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<PasswordRecoveryForm />} />
          <Route path="/addQuestionToDatabase" element={<AddQuestions />} />
          
          <Route path="/cheakout" element={<Cheakout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
          <Route path="/exam" element={<ProtectedRoute><CreateExam /></ProtectedRoute>} />
          <Route path="/questions" element={<ProtectedRoute><SelectQuestions /></ProtectedRoute>} />
          <Route path="/addedQuestions" element={<ProtectedRoute><AddedQuestions /></ProtectedRoute>} />
          <Route path="/add-questions-json" element={<ProtectedRoute><AddMultipleQuestions /></ProtectedRoute>} />
          <Route path="/preview" element={<ProtectedRoute><Preview /></ProtectedRoute>} />
        </Routes>
      <ToastContainer position="top-center" /> 
    
      </Router>
    </>
  );
}

export default App;
