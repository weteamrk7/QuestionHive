import React from 'react';

const Failure = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-4xl font-bold text-red-600">Payment Failed!</h1>
      <p className="mt-4">Please try again.</p>
    </div>
  );
};

export default Failure;
