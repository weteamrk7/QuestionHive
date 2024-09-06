import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, SignIn } from '@clerk/clerk-react';

function Login() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      <SignIn redirectUrl="/dashboard" />
    </div>
  );
}

export default Login;