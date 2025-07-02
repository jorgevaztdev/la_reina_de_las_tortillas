
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useCart } from '../hooks/useCart';
import Icon from './Icon';

const Header: React.FC = () => {
  const { toggleCart, totalItems } = useCart();

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-secondary-dark">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
              <path d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="currentColor" fillOpacity="0.5"/>
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="currentColor" fillOpacity="0.3"/>
            </svg>
            <span className="hidden sm:inline">La Reina de las Tortillas</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-secondary-light'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleCart} className="relative p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Icon name="ShoppingCart" className="w-6 h-6 text-secondary-light" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
             <button className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors" aria-label="Open menu">
                {/* Mobile menu would be implemented here */}
                <Icon name="Menu" className="w-6 h-6 text-secondary-light" />
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
