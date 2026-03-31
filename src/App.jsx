import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ToggleButtons from './components/ToggleButtons';
import ProductSection from './components/ProductSection';
import CartSection from './components/CartSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import productsData from './data/products.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState('products');

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const checkout = () => {
    setCartItems([]);
  };

  return (
    <div className="font-sans antialiased">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Premium Digital Tools</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <ToggleButtons view={view} setView={setView} cartCount={cartItems.length} />

        {view === 'products' ? (
          <ProductSection products={productsData} addToCart={addToCart} />
        ) : (
          <CartSection cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} />
        )}
      </div>
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;