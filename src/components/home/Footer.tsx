'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/trueop4.jpg"
          alt="Logo"
          className="h-12 w-40 object-contain"
        />
      </div>

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-10 max-w-6xl mx-auto">

        {/* Address Section */}
        <div className="max-w-sm mx-auto">
          <h2 className="text-[#5bc033] text-xl font-bold mb-4">Address</h2>
          <p className="text-gray-300">
            Simply Admission provides an integrated experience for everyone
            involved in the admissions and enrolment process.
          </p>
          <div className="mt-4 flex justify-center lg:justify-start">
            <img
              src="/images/trueops 3.jpg"
              alt="Office"
              className="w-full max-w-xs object-cover"
            />
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="space-y-4 max-w-sm mx-auto">
          <p className="text-gray-300">
            Get first dibs on new arrivals and advance notice on everything we do.
          </p>

          {/* Email Signup */}
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              className="p-2 text-black rounded-l-lg w-2/3"
            />
            <button className="bg-[#5bc033] hover:bg-lime-700 hover:text-black text-white px-4 py-2 rounded-r-lg">
              Sign Me Up
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-4 text-black">
            <div className="bg-[#5bc033] p-2 rounded-full">
              <FaInstagram size={24} />
            </div>
            <div className="bg-[#5bc033] p-2 rounded-full">
              <FaFacebookF size={24} />
            </div>
            <div className="bg-[#5bc033] p-2 rounded-full">
              <FaTwitter size={24} />
            </div>
            <div className="bg-[#5bc033] p-2 rounded-full">
              <FaYoutube size={24} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
