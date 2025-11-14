'use client';

import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-somstyle-blue/10 via-white to-somstyle-blue/5 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-somstyle-gray-dark mb-6 leading-tight">
            Somstyle – Slimme oplossingen voor thuis
          </h1>
          
          <p className="text-xl md:text-2xl text-somstyle-gray-dark/80 mb-6 font-medium">
            Somstyle maakt praktische en stijlvolle producten voor elke dag.
          </p>
          
          <p className="text-lg md:text-xl text-somstyle-gray-dark/70 mb-8 max-w-2xl mx-auto">
            Van keuken tot woonkamer: met Somstyle wordt organiseren, opbergen en schoonmaken net even makkelijker.
          </p>
          
          <p className="text-base md:text-lg text-somstyle-gray-dark/60 mb-10 max-w-2xl mx-auto">
            Onze producten zijn exclusief verkrijgbaar via bol.com. Op deze pagina vindt u meer informatie over Somstyle en kunt u eenvoudig contact met ons opnemen bij vragen over uw bestelling of product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-somstyle-blue text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Bekijk Somstyle op bol.com
            </a>
            <button
              onClick={scrollToContact}
              className="bg-white text-somstyle-blue border-2 border-somstyle-blue px-8 py-4 rounded-full hover:bg-somstyle-blue hover:text-white transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Neem contact op
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


