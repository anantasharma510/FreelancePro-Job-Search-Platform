'use client';

import { useState } from 'react';
import { FaBriefcase, FaUserTie } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SelectionOption = ({ icon: Icon, text, selected, setSelected, value }) => (
  <div
    className={`border p-6 rounded-lg cursor-pointer flex flex-col items-center gap-2 w-64 transition-all ${
      selected === value ? 'border-black' : 'border-gray-300'
    }`}
    onClick={() => setSelected(value)}
  >
    <Icon className="text-2xl" />
    <p className="text-center">{text}</p>
    <div
      className={`w-5 h-5 rounded-full border-2 ${selected === value ? 'border-black' : 'border-gray-400'} flex items-center justify-center`}
    >
      {selected === value && <div className="w-3 h-3 bg-black rounded-full"></div>}
    </div>
  </div>
);

const SignupSelection = () => {
  const [selected, setSelected] = useState('freelancer');
  const router = useRouter(); // Initialize the router

  const handleSignupClick = () => {
    // Redirect based on the selected value
    if (selected === 'client') {
      router.push('/clientsignup');
    } else {
      router.push('/freelancersignup');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
        <h2 className="text-2xl font-semibold mb-6">Join as a client or freelancer</h2>
        <div className="flex gap-4 mb-6">
          <SelectionOption
            icon={FaBriefcase}
            text="I'm a client, hiring for a project"
            selected={selected}
            setSelected={setSelected}
            value="client"
          />
          <SelectionOption
            icon={FaUserTie}
            text="I'm a freelancer, looking for work"
            selected={selected}
            setSelected={setSelected}
            value="freelancer"
          />
        </div>
        <button
          className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-700"
          onClick={handleSignupClick} // Add onClick to handle the redirection
        >
          Apply as a {selected.charAt(0).toUpperCase() + selected.slice(1)}
        </button>
        <p className="mt-4">
          Already have an account? <a href="#" className="text-green-600 hover:underline">Log In</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignupSelection;
