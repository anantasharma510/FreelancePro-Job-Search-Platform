'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import countryList from 'country-list';
import Image from 'next/image';
import Link from 'next/link';

const ClientSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    termsAccepted: false,
  });
  const [countryCode, setCountryCode] = useState('');
  const [error, setError] = useState({});

  const countries = countryList.getNames();

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        setFormData((prev) => ({ ...prev, country: data.country_name }));
        setCountryCode(`+${data.country_calling_code}`);
      })
      .catch(() => setCountryCode('+1'));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    const countryCode = `+${countryList.getCode(countryName)}`;
    setFormData((prev) => ({ ...prev, country: countryName }));
    setCountryCode(countryCode);
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.match(/^[a-zA-Z\s]+$/)) errors.name = 'Name must contain only letters';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.phone.match(/^\d+$/)) errors.phone = 'Enter a valid phone number';
    if (!formData.email.includes('@')) errors.email = 'Enter a valid email';
    if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    if (!formData.termsAccepted) errors.termsAccepted = 'You must accept the terms';
    if (!countries.includes(formData.country)) errors.country = 'Select a valid country';

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully!', formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-10">
      <Navbar />
      <h1 className="text-3xl font-semibold text-gray-800 text-center mt-10" style={{ fontFamily: "'Playfair Display', serif" }}>
        Signup to Find Jobs
      </h1>

      <div className="flex justify-center gap-4 mt-6">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg shadow-md bg-white hover:bg-gray-100">
          <Image src="/google.svg" width={18} height={18} alt="Google icon" />
          Sign in with Google
        </button>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg shadow-md bg-white hover:bg-gray-100">
          <Image src="/linkedin.svg" width={18} height={18} alt="LinkedIn icon" />
          Sign in with LinkedIn
        </button>
      </div>

      <p className="text-gray-600 mt-4">Or</p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 mt-1 rounded-lg shadow-md bg-white">
        <div className="flex flex-col gap-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
          {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full p-2 border rounded" />
          {error.address && <p className="text-red-500 text-sm">{error.address}</p>}

          <div className="flex gap-2">
            <span className="p-2 bg-gray-200 border rounded">{countryCode}</span>
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border rounded" />
          </div>
          {error.phone && <p className="text-red-500 text-sm">{error.phone}</p>}

          <select name="country" value={formData.country} onChange={handleCountryChange} className="w-full p-2 border rounded">
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {error.country && <p className="text-red-500 text-sm">{error.country}</p>}

          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full p-2 border rounded" />
          {error.password && <p className="text-red-500 text-sm">{error.password}</p>}

          <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full p-2 border rounded" />
          {error.confirmPassword && <p className="text-red-500 text-sm">{error.confirmPassword}</p>}

          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            I agree to the terms and conditions
          </label>
          {error.termsAccepted && <p className="text-red-500 text-sm">{error.termsAccepted}</p>}
        </div>

        <button type="submit" className="w-full bg-green-600 mt-4 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold rounded-2xl shadow-md transition duration-300">
          Create My Account
        </button>
      </form>

      <p className='text-center mt-4'>Already have an account? <Link className='text-[#108a00]' href="/login">Login</Link></p>
    </div>
  );
};

export default ClientSignup;
