
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';

const categories = ['All', ...Object.values(ProductCategory)];

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-secondary-dark mb-4">Our Products</h1>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
        From classic corn tortillas to zesty salsas, find everything you need for an authentic meal.
      </p>

      <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-primary-light hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
