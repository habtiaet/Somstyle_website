import React from 'react';

export default function About() {
  return (
    <section id="over" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-somstyle-blue-deep">
                Over Somstyle
              </p>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-somstyle-ink md:text-5xl">
                Praktische producten met een rustige, moderne uitstraling.
              </h2>
            </div>
            <p className="text-lg leading-8 text-somstyle-gray-dark/70">
              We ontwerpen alledaagse helpers die niet om aandacht vragen, maar precies doen wat ze moeten doen: opruimen, organiseren en het dagelijks gebruik makkelijker maken.
            </p>
          </div>
          
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-somstyle-ink/10 bg-somstyle-cream/70 p-7 shadow-premium-soft">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-somstyle-blue-deep">
                Slim
              </p>
              <p className="text-somstyle-gray-dark/75 leading-relaxed">
              Somstyle staat voor slimme, praktische oplossingen voor in en om het huis. Of het nu gaat om opbergen, organiseren, koken of schoonmaken: wij willen het dagelijks leven net wat makkelijker en overzichtelijker maken.
            </p>
            </div>
            
            <div className="rounded-3xl border border-somstyle-ink/10 bg-white p-7 shadow-premium-soft">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-somstyle-blue-deep">
                Doordacht
              </p>
              <p className="text-somstyle-gray-dark/75 leading-relaxed">
              Onze producten combineren een frisse, moderne uitstraling met functioneel ontwerp. We letten op details zoals gebruiksgemak, eenvoudige montage en doordachte extra&apos;s. Zo kunt u onze producten direct gebruiken, zonder gedoe.
            </p>
            </div>
            
            <div className="rounded-3xl border border-somstyle-ink/10 bg-somstyle-ink p-7 shadow-premium text-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-somstyle-blue">
                Beschikbaar
              </p>
              <p className="text-white/75 leading-relaxed">
              Somstyle-producten zijn verkrijgbaar via bol.com. Daar vindt u een actueel overzicht van ons assortiment, inclusief reviews van andere klanten. Op deze website kunt u terecht voor merkinformatie en snelle hulp bij vragen over uw Somstyle-aankoop.
            </p>
          </div>
          </div>
          
          <div className="mt-12 rounded-[2rem] border border-somstyle-ink/10 bg-white p-8 shadow-premium md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Statistic */}
              <div className="text-center md:text-center border-b md:border-b-0 md:border-r border-somstyle-ink/10 pb-8 md:pb-0 md:pr-8 last:border-0">
                <div className="mb-3 text-4xl font-black tracking-[-0.05em] text-somstyle-ink md:text-5xl">
                  5+
                </div>
                <div className="text-sm font-bold uppercase tracking-[0.24em] text-somstyle-blue-deep">
                  Jaar ervaring
                </div>
              </div>
              
              {/* Second Statistic */}
              <div className="text-center md:text-center border-b md:border-b-0 md:border-r border-somstyle-ink/10 pb-8 md:pb-0 md:pr-8 last:border-0">
                <div className="mb-3 text-4xl font-black tracking-[-0.05em] text-somstyle-ink md:text-5xl">
                  1500+
                </div>
                <div className="text-sm font-bold uppercase tracking-[0.24em] text-somstyle-blue-deep">
                  Producten
                </div>
              </div>
              
              {/* Third Statistic */}
              <div className="text-center md:text-center">
                <div className="mb-3 text-4xl font-black tracking-[-0.05em] text-somstyle-ink md:text-5xl">
                  400.000+
                </div>
                <div className="text-sm font-bold uppercase tracking-[0.24em] text-somstyle-blue-deep">
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

