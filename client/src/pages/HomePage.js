import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Local Store</h1>
        <p className="text-xl mb-6">Discover the best products at the best prices</p>
        <Link
          to="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </Link>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        {/* Featured products will be added here */}
        <div className="text-center py-8">
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;