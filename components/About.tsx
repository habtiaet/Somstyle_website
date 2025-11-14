import React from 'react';

export default function About() {
  return (
    <section id="over" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-somstyle-gray-dark mb-8 text-center">
            Over Somstyle
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-somstyle-gray-dark/80 mb-6 leading-relaxed">
              Somstyle staat voor slimme, praktische oplossingen voor in en om het huis. Of het nu gaat om opbergen, organiseren, koken of schoonmaken: wij willen het dagelijks leven net wat makkelijker en overzichtelijker maken.
            </p>
            
            <p className="text-lg text-somstyle-gray-dark/80 mb-6 leading-relaxed">
              Onze producten combineren een frisse, moderne uitstraling met functioneel ontwerp. We letten op details zoals gebruiksgemak, eenvoudige montage en doordachte extra's. Zo kunt u onze producten direct gebruiken, zonder gedoe.
            </p>
            
            <p className="text-lg text-somstyle-gray-dark/80 mb-8 leading-relaxed">
              Somstyle-producten zijn verkrijgbaar via bol.com. Daar vindt u een actueel overzicht van ons assortiment, inclusief reviews van andere klanten. Op deze website kunt u terecht voor merkinformatie en snelle hulp bij vragen over uw Somstyle-aankoop.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-somstyle-gray-light p-6 rounded-lg">
              <div className="text-somstyle-blue text-3xl mb-3">✨</div>
              <h3 className="font-semibold text-somstyle-gray-dark mb-2">
                Slimme oplossingen voor elke dag
              </h3>
            </div>
            
            <div className="bg-somstyle-gray-light p-6 rounded-lg">
              <div className="text-somstyle-blue text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-somstyle-gray-dark mb-2">
                Praktisch in gebruik en eenvoudig te installeren
              </h3>
            </div>
            
            <div className="bg-somstyle-gray-light p-6 rounded-lg">
              <div className="text-somstyle-blue text-3xl mb-3">🏠</div>
              <h3 className="font-semibold text-somstyle-gray-dark mb-2">
                Ontworpen voor een opgeruimd en comfortabel huis
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

