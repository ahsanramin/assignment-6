import React from 'react';

const CTA = () => {
  return (
    <div className="bg-indigo-700 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial today.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Explore Products
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            View Pricing
          </button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default CTA;