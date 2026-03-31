import React from 'react';

const ToggleButtons = ({ view, setView, cartCount }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => setView('products')}
        className={`px-6 py-2 rounded-lg font-medium transition ${
          view === 'products'
            ? 'bg-indigo-700 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Products
      </button>
      <button
        onClick={() => setView('cart')}
        className={`px-6 py-2 rounded-lg font-medium transition ${
          view === 'cart'
            ? 'bg-indigo-700 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Cart {cartCount > 0 && `(${cartCount})`}
      </button>
    </div>
  );
};

export default ToggleButtons;