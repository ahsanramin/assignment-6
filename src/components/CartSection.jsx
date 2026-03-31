import React from 'react';
import { toast } from 'react-toastify';

const CartSection = ({ cartItems, removeFromCart, checkout }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.info(`${name} removed from cart`);
  };

  const handleCheckout = () => {
    checkout();
    toast.success('Proceeded to checkout! Cart cleared.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p className="text-gray-500 text-lg">Your cart is empty</p>
        <p className="text-gray-400">Add some products to get started.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow border">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-sm">${item.price}/{item.period}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id, item.name)}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-gray-900">Total:</span>
          <span className="text-xl font-bold text-gray-900">${totalPrice}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-indigo-700 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSection;