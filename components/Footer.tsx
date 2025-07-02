
import React from 'react';
import Icon from './Icon';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center md:text-left">&copy; {year} La Reina de las Tortillas. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Icon name="Facebook" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Icon name="Instagram" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Icon name="Twitter" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
