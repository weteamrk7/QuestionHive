import React from 'react';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-4">Thank you for your payment.</p>
    </div>
  );
};

export default Success;
