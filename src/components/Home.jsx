import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-8 mt-10 mb-10">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-4">Welcome to iVote</h1>
        <p className="text-gray-700 text-center mb-8">
          Your password has been successfully reset. You're now logged in!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/profile')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded font-semibold transition"
          >
            View Profile
          </button>

          <button
            onClick={() => navigate('/settings')}
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 py-2 px-6 rounded font-semibold transition"
          >
            Settings
          </button>

          <button
            onClick={() => navigate('/')}
            className="bg-red-100 hover:bg-red-200 text-red-600 py-2 px-6 rounded font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
