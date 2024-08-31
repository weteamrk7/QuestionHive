import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Link to="/">Please login</Link>;
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6">User Profile</h2>
      <div className="mb-4">
        <img src={user.picture} alt={user.name} className="rounded-full w-24 h-24" />
      </div>
      <p className="text-xl mb-2"><strong>Name:</strong> {user.name}</p>
      <p className="text-xl mb-2"><strong>Email:</strong> {user.email}</p>
      <Button 
        className="mt-6 bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;