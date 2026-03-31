import React from 'react';
import banner from  "../assets/banner.png"
const Banner = () => {
  return (
    <div className="bg-gradient-to-right from-blue-500 to-indigo-500 py-16">
      <div className="container  px-4 flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="inline-block bg-blue-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex space-x-4">
            <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Explore Products
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={banner}
            alt="Hero"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;