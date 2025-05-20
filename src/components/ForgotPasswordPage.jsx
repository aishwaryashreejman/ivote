import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSendResetLink = (e) => {
    e.preventDefault();
    console.log('Sending password reset link to:', email);
    alert(`Password reset link sent to ${email}`);
    // Backend logic to send email goes here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg mt-10 mb-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSendResetLink} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter your registered email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
          <Link to="/reset-password" className="text-white">
            Send Password Change Email
          </Link>
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
