'use client'
import { Mail } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email) {
      setError('Username or Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }

    setError('');
    // Perform login logic here
  };

  return (
    <div className="flex flex-col items-center p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg border mt-30">
  <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
  Log in to Freelancer Pro
</h1>
<p className="text-center text-lg text-gray-600">
  As a Freelancer
</p>

      <div className="relative w-full mb-3">
        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Username or Email" 
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative w-full mb-3">
  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  <input 
    type="password" 
    placeholder="Password"
    className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>


      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button 
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mb-4"
        onClick={handleLogin}
      >
        Continue
      </button>
      <div className="flex items-center w-full my-3">
        <hr className="flex-grow border-gray-300" />
        <span className="text-gray-500 mx-2">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <button className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-lg shadow-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-all duration-300 transform hover:scale-105 mb-3">
  <Image src="/google.svg" width={20} height={20} alt="Google icon" />
  <span className="font-semibold text-sm">Continue with Google</span>
</button>

<button className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-lg shadow-lg bg-blue-700 text-white hover:bg-blue-800 focus:outline-none transition-all duration-300 transform hover:scale-105">
  <Image src="/linkedin.svg" width={20} height={20} alt="LinkedIn icon" />
  <span className="font-semibold text-sm">Continue with LinkedIn</span>
</button>


      <p className="mt-4 text-gray-600">Don&apos;t have an Upwork account?</p>
      <button className="w-full border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 mt-2">Sign Up</button>
    </div>
  );
};

export default Login;
