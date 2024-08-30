import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExamManagementLandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExamManagementLandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
