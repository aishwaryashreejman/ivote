import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import coverImg from '../assets/coverImg.png'; // adjust path as needed
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    voterId: '',
    password: '',
    otp: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGetOTP = () => {
    alert(`OTP sent to: ${form.email}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering user:', form);
  };

  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Left: Image */}
      <div className="hidden md:block md:w-1/2 h-screen">
        <img
          src={coverImg}
          alt="Signup Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-6 text-left">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg mt-10 mb-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Sign Up to iVote</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button
                type="button"
                onClick={handleGetOTP}
                className="mt-2 text-sm text-blue-600 hover:underline text-right"
              >
                Get OTP
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
              <input
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Set Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded pr-10 focus:ring-2 focus:ring-blue-600 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
