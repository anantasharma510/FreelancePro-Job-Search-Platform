'use client';
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const onLogin = () => {
    router.push("/login");
  };
  const onSignup = () => {
    router.push("/signup");
  };

  return (
    <nav className="bg-white py-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Freelance Pro
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-lg text-black/70">
          <li className="hover:text-[#108a00] cursor-pointer transition duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#108a00] cursor-pointer transition duration-200">
            <Link href="/talent">Find talent</Link>
          </li>
          <li className="hover:text-[#108a00] cursor-pointer transition duration-200">
            <Link href="/work">Find work</Link>
          </li>
          <li className="hover:text-[#108a00] cursor-pointer transition duration-200">
            <Link href="/whyus">Why us</Link>
          </li>
          <li className="hover:text-[#108a00] cursor-pointer transition duration-200">
            <Link href="/price">Price</Link>
          </li>
        </ul>

        {/* Search & Buttons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 pl-10 w-52 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Image
              src="/search.svg"
              width={18}
              height={18}
              alt="Search icon"
              className="absolute left-3 top-2.5 cursor-pointer"
            />
          </div>

          <button
            onClick={onLogin}
            className="text-gray-700 hover:text-black transition duration-200"
          >
            Log in
          </button>

          <Button
            onClick={onSignup}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full"
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;