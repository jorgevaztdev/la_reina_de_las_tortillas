
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import Icon from './Icon';
import { CartItem } from '../types';

const Cart: React.FC = () => {
  const { isCartOpen, toggleCart, items, removeItem, updateQuantity, clearCart, subtotal } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-secondary-dark">Shopping Cart</h2>
            <button onClick={toggleCart} className="p-2 rounded-full hover:bg-slate-100">
              <Icon name="X" className="w-6 h-6 text-slate-500" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <Icon name="ShoppingCart" className="w-24 h-24 text-slate-300 mb-4" />
              <h3 className="text-xl font-semibold text-slate-700">Your cart is empty</h3>
              <p className="text-slate-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
              <Link
                to="/products"
                onClick={toggleCart}
                className="mt-6 bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-primary-dark transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {items.map((item: CartItem) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                    <div className="flex-grow">
                      <h4 className="font-semibold text-secondary">{item.name}</h4>
                      <p className="text-slate-500 text-sm">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 border rounded-l-md hover:bg-slate-100"><Icon name="Minus" className="w-4 h-4" /></button>
                        <span className="px-3 py-1 border-t border-b">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded-r-md hover:bg-slate-100"><Icon name="Plus" className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-secondary">${(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 mt-2 text-sm font-medium">Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium text-slate-600">Subtotal</span>
                  <span className="font-bold text-secondary-dark">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-slate-500">Shipping and taxes calculated at checkout.</p>
                <Link
                  to="/checkout"
                  onClick={toggleCart}
                  className="w-full text-center bg-accent hover:bg-accent-dark text-white font-bold py-3 px-4 rounded-lg transition-colors block"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-red-600 font-medium py-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
