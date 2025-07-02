
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../types';

const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingCost = 5.00;
  const taxRate = 0.0825;
  const taxes = subtotal * taxRate;
  const total = subtotal + shippingCost + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate('/confirmation');
    }, 1500);
  };
  
  if (items.length === 0 && !isProcessing) {
      return (
          <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
              <p className="mt-2 text-slate-600">You need to add items to your cart before you can check out.</p>
              <button onClick={() => navigate('/products')} className="mt-6 bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-primary-dark transition-colors">
                Shop for Products
              </button>
          </div>
      )
  }

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-center text-secondary-dark mb-10">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-secondary mb-6">Shipping & Payment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-light focus:ring-primary-light sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-light focus:ring-primary-light sm:text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-slate-700">Street Address</label>
                <input type="text" id="address" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-light focus:ring-primary-light sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-slate-700">Card Number</label>
                <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-light focus:ring-primary-light sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-slate-700">Expiry Date</label>
                <input type="text" id="expiry" placeholder="MM/YY" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-light focus:ring-primary-light sm:text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cvc" className="block text-sm font-medium text-slate-700">CVC</label>
                <input type="text" id="cvc" placeholder="123" className="mt-1 block w-40 rounded-md border-slate-300 shadow-sm focus:border-primary-light focus:ring-primary-light sm:text-sm" required />
              </div>
            </div>
            <button
              type="submit"
              disabled={isProcessing}
              className="mt-8 w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center disabled:bg-slate-400"
            >
              {isProcessing ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : `Pay $${total.toFixed(2)}`}
            </button>
          </form>

          <div className="bg-white p-8 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-bold text-secondary mb-6">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">{item.name} <span className="text-slate-400">x{item.quantity}</span></span>
                  <span className="font-medium text-slate-800">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium text-slate-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Shipping</span>
                <span className="font-medium text-slate-800">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Taxes</span>
                <span className="font-medium text-slate-800">${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t">
                <span className="text-secondary-dark">Total</span>
                <span className="text-secondary-dark">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
