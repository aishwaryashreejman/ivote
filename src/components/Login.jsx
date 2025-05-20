import React, { useState } from 'react';
import coverImg from '../assets/coverImg.png'; // adjust path as needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen flex bg-blue-50">
      
      {/* Left: Cover Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={coverImg}
          alt="Login Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Login Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-6">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Login to iVote</h2>
          
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
