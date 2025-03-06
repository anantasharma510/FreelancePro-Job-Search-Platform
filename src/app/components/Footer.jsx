"use client";
import { LocateIcon, Mail, PhoneCall, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  const router = useRouter();
  const onSignup = () => {
    router.push("/signup");
  };

  return (
    <footer className="bg-[#13544e] text-white mt-6 py-10 px-6">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
        <h1
  style={{ fontFamily: "'Noto Serif'" }}
  className="text-3xl font-bold mb-2 text-green-400"
>
  Freelance Pro
</h1>

          <p className="text-gray-300 text-sm mb-4">
            The premier platform connecting top-tier talent with businesses worldwide. How work should work.
          </p>
          <ul className="space-y-2 text-white-400 text-sm">
            <li className="flex items-center gap-2">
              <LocateIcon className="w-5 h-5 text-gray-500" />
              Kathmandu, Nepal
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-gray-500" />
              +977-1-1234567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-500" />
              4K8r9@example.com
            </li>
          </ul>
        </div>

        {/* For Clients */}
        <div>
          <h1 className="text-xl font-bold mb-2">For Clients</h1>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="#">Find Talent</Link></li>
            <li><Link href="#">Post a Job</Link></li>
            <li><Link href="#">Success Stories</Link></li>
          </ul>
        </div>

        {/* For Freelancers */}
        <div>
          <h1 className="text-xl font-bold mb-2">For Freelancers</h1>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="#">Find Work</Link></li>
            <li><Link href="#">Post a Project</Link></li>
            <li><Link href="#">Success Stories</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h1 className="text-xl font-bold mb-2">Resources</h1>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Why Us</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media & Signup Section */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <h1 className="text-lg font-semibold text-gray-300">Connect With Us</h1>
          <Link href="#" className="hover:text-green-400"><Facebook className="w-5 h-5" /></Link>
          <Link href="#" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></Link>
          <Link href="#" className="hover:text-blue-600"><Linkedin className="w-5 h-5" /></Link>
        </div>
        <Button
          onClick={onSignup}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full transition duration-300"
        >
          Sign Up
        </Button>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm text-center sm:text-left">
        <p>© 2025 Freelance Pro. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
