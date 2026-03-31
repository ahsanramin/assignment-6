import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

const ProductSection = ({ products, addToCart }) => {
  const [clickedIds, setClickedIds] = useState([]);
  const timeoutRef = useRef(null);

  const handleBuyNow = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
    setClickedIds(prev => [...prev, product.id]);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setClickedIds(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{product.icon}</span>
              {product.tagType && (
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  product.tagType === 'popular' ? 'bg-green-100 text-green-800' :
                  product.tagType === 'best-seller' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {product.tag}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              <span className="text-gray-500 text-sm">/{product.period}</span>
            </div>
            <ul className="space-y-1 mb-6">
              {product.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleBuyNow(product)}
              className={`w-full py-2 rounded-lg font-medium transition ${
                clickedIds.includes(product.id)
                  ? 'bg-gray-400 text-white cursor-default'
                  : 'bg-indigo-700 text-white hover:bg-blue-700'
              }`}
              disabled={clickedIds.includes(product.id)}
            >
              {clickedIds.includes(product.id) ? 'Added to cart' : 'Buy Now'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;