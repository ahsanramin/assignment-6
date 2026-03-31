import React, { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-700">DigiTools</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Testimonials</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">FAQ</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
          <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button & Cart */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md focus:outline-none">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Cart */}
        <div className="hidden md:block relative">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">Features</a>
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">FAQ</a>
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">Login</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;