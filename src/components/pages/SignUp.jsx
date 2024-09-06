import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, SignUp as ClerkSignUp } from '@clerk/clerk-react';

function SignUpPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      <ClerkSignUp redirectUrl="/dashboard" />
    </div>
  );
}

export default SignUpPage;