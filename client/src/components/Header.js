import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Local Store
        </Link>
        
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-800">
            Products
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-gray-800">
            Cart
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-800">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;