
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-white max-w-2xl mx-auto p-8 sm:p-12 rounded-xl shadow-lg text-center">
        <Icon name="CheckCircle" className="w-20 h-20 text-accent mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary-dark">Thank You For Your Order!</h1>
        <p className="mt-4 text-lg text-slate-600">
          Your order has been placed successfully. You will receive an email confirmation shortly.
        </p>
        <p className="mt-2 text-slate-500">
          We're already preparing your items with care.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
