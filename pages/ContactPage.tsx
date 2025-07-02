
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-secondary-dark">Get In Touch</h1>
        <p className="mt-2 text-lg text-slate-600">We'd love to hear from you! Visit us or drop us a line.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
          <div className="space-y-4 text-slate-700">
            <div className="flex items-start">
              <span className="font-bold w-20">Address:</span>
              <span>123 Tortilla Lane, Foodie City, TX 78701</span>
            </div>
            <div className="flex items-start">
              <span className="font-bold w-20">Phone:</span>
              <a href="tel:512-555-1234" className="text-primary hover:text-primary-dark">(512) 555-1234</a>
            </div>
            <div className="flex items-start">
              <span className="font-bold w-20">Email:</span>
              <a href="mailto:hola@lareina.com" className="text-primary hover:text-primary-dark">hola@lareina.com</a>
            </div>
            
            <div className="pt-4 mt-4 border-t">
              <h3 className="text-xl font-bold text-secondary mb-3">Store Hours</h3>
              <div className="flex items-start">
                <span className="font-bold w-32">Mon - Fri:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-32">Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-32">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-md overflow-hidden">
          {/* This is a placeholder for an interactive map. An iframe from Google Maps would be used in a real application. */}
          <div 
             className="w-full h-full bg-cover bg-center" 
             style={{backgroundImage: 'url(https://picsum.photos/seed/map/800/600)', minHeight: '400px'}}
             aria-label="Map showing location of La Reina de las Tortillas"
          >
             {/* A real implementation might use: <iframe src="https://www.google.com/maps/embed?pb=..."></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
