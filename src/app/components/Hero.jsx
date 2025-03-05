import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center text-center py-24 px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white opacity-30"></div>

      {/* Headline */}
      <h1 className="text-6xl font-extrabold text-black leading-tight max-w-3xl">
        How Work Should Work
      </h1>

      {/* Subheading */}
      <p className="text-xl text-gray-600 mt-4 max-w-2xl">
        Find top-tier talent, collaborate seamlessly, and build your success story with ease.
      </p>

      {/* Search Bar */}
      <div className="relative flex items-center w-full max-w-md mt-8">
        <input
          type="text"
          placeholder="Search for anything ..."
          className="w-full py-3 px-5 pl-12 rounded-full border border-gray-300 shadow-md focus:ring-2 focus:ring-green-500 outline-none transition"
        />
        <Image
          src="/search.svg"
          width={20}
          height={20}
          alt="Search icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
        />
        <Button className="absolute right-2 px-5 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-all">
          Search
        </Button>
        
      </div>
      <Button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-blue-500 text-white font-semibold text-lg hover:scale-105 transition-transform shadow-xl">
          Get Started
        </Button>
    </div>
  );
};

export default Hero;
