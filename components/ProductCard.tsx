
import React from 'react';
import { Product, StockStatus } from '../types';
import { useCart } from '../hooks/useCart';
import Icon from './Icon';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const isInStock = product.stockStatus === StockStatus.InStock;

  const stockStatusClasses = isInStock 
    ? 'bg-emerald-100 text-accent-dark' 
    : 'bg-red-100 text-red-700';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <span className={`absolute top-2 right-2 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full ${stockStatusClasses}`}>
          {product.stockStatus}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary-dark">{product.name}</h3>
        <p className="text-slate-500 text-sm mb-2">{product.size}</p>
        <p className="text-slate-600 mt-2 flex-grow">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-2xl font-extrabold text-primary-dark">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addItem(product)}
            disabled={!isInStock}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            <Icon name="ShoppingCart" className="w-5 h-5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
