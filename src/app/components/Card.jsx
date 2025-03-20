'use client';

import { BathIcon, Pin, Text } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Card = () => {
    const router = useRouter();
    const onLogin = () => {
        router.push('/login');
    };

    return (
       
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-8 bg-white shadow-lg rounded-xl max-w-6xl mx-auto border border-gray-200">
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex justify-center">
                <Image 
                    src="/images.jpeg"
                    width={250}
                    height={250}
                    alt="Card"
                    className="rounded-lg shadow-md"
                />
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-2/3 space-y-6">
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                    Up Your Work Game, It’s Easy
                </h1>
                
                <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                        <Text size={20} className="text-blue-500 mt-1" />
                        <p className="text-gray-700">
                            <span className="font-semibold">No cost to join:</span> Register and browse talent profiles, explore projects, or even book a consultation.
                        </p>
                    </li>
                    <li className="flex items-start space-x-3">
                        <Pin size={20} className="text-green-500 mt-1" />
                        <p className="text-gray-700">
                            <span className="font-semibold">Effortless hiring:</span> Finding talent doesn’t have to be a chore. Post a job, or we can search for you!
                        </p>
                    </li>
                    <li className="flex items-start space-x-3">
                        <BathIcon size={20} className="text-purple-500 mt-1" />
                        <p className="text-gray-700">
                            <span className="font-semibold">Affordable solutions:</span> Upwork makes it easy to up your work and take advantage of low transaction rates.
                        </p>
                    </li>
                </ul>
                
                {/* Button */}
                <div>
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold rounded-full shadow-md transition duration-300"
                        onClick={onLogin}
                    >
                        Sign Up for Free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
