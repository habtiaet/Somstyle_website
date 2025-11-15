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
              Onze producten combineren een frisse, moderne uitstraling met functioneel ontwerp. We letten op details zoals gebruiksgemak, eenvoudige montage en doordachte extra&apos;s. Zo kunt u onze producten direct gebruiken, zonder gedoe.
            </p>
            
            <p className="text-lg text-somstyle-gray-dark/80 mb-8 leading-relaxed">
              Somstyle-producten zijn verkrijgbaar via bol.com. Daar vindt u een actueel overzicht van ons assortiment, inclusief reviews van andere klanten. Op deze website kunt u terecht voor merkinformatie en snelle hulp bij vragen over uw Somstyle-aankoop.
            </p>
          </div>
          
          <div className="bg-somstyle-gray-light rounded-lg shadow-lg p-8 md:p-12 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Statistic */}
              <div className="text-center md:text-center border-b md:border-b-0 md:border-r border-white/50 pb-8 md:pb-0 md:pr-8 last:border-0">
                <div className="text-4xl md:text-5xl font-bold text-somstyle-blue mb-3">
                  5+
                </div>
                <div className="text-lg md:text-xl font-semibold text-somstyle-gray-dark">
                  Jaar ervaring
                </div>
              </div>
              
              {/* Second Statistic */}
              <div className="text-center md:text-center border-b md:border-b-0 md:border-r border-white/50 pb-8 md:pb-0 md:pr-8 last:border-0">
                <div className="text-4xl md:text-5xl font-bold text-somstyle-blue mb-3">
                  1500+
                </div>
                <div className="text-lg md:text-xl font-semibold text-somstyle-gray-dark">
                  Producten
                </div>
              </div>
              
              {/* Third Statistic */}
              <div className="text-center md:text-center">
                <div className="text-4xl md:text-5xl font-bold text-somstyle-blue mb-3">
                  400.000+
                </div>
                <div className="text-lg md:text-xl font-semibold text-somstyle-gray-dark">
                  Tevreden klanten
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

