
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { StockStatus } from '../types';

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.stockStatus === StockStatus.InStock).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-secondary-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/tortillapress/1920/1080"
            alt="Making fresh tortillas"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Authentic Taste, Freshly Made
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
            Experience the tradition of handcrafted tortillas and salsas, delivered from our kitchen to yours.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold text-lg py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-secondary-dark mb-12">
            Our Best Sellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
