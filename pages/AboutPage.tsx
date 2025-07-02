
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="prose prose-lg max-w-none text-slate-600">
            <h1 className="text-4xl font-extrabold text-secondary-dark">Our Story</h1>
            <h2 className="text-2xl font-semibold text-primary-dark">From Our Family to Yours</h2>
            <p>
              La Reina de las Tortillas began in our grandmother's kitchen, with a cherished family recipe passed down through generations. The smell of fresh, warm corn tortillas was the heart of our home, and we wanted to share that feeling with our community.
            </p>
            <p>
              In [Year], we opened our first small tortillería with a simple mission: to create the most delicious and authentic tortillas using traditional methods and the finest local ingredients. We stone-grind our own corn daily, ensuring a texture and flavor that you just can't find on a supermarket shelf.
            </p>
            <p>
              Today, we've grown, but our commitment to quality and tradition remains unchanged. Every tortilla, salsa, and drink we offer is made with the same love and care as those first batches in our abuela's kitchen. We are proud to be a part of your family's meals and celebrations. Thank you for supporting our dream.
            </p>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/familykitchen/600/700" 
              alt="The founding family of the tortillería"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
