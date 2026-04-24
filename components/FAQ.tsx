'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Waar kan ik Somstyle producten kopen?',
    answer: 'Somstyle producten zijn verkrijgbaar via bol.com. Op onze merkpagina vindt u een actueel overzicht van ons assortiment: daar ziet u direct de beschikbare varianten, levertijden en reviews van andere klanten.',
  },
  {
    question: 'Ik heb een product via bol.com gekocht en heb een probleem. Wat moet ik doen?',
    answer: 'Neem eerst uw bestelnummer van bol.com erbij en kijk of u het probleem kort kunt omschrijven. Via e-mail (info@easycheckcom.nl) kunt u ons een bericht sturen. We kijken dan samen met u naar een passende oplossing.',
  },
  {
    question: 'Hoe lang heb ik garantie op mijn Somstyle product?',
    answer: 'Op Somstyle producten geldt de wettelijke garantie. Dit betekent dat een product moet doen wat u er in alle redelijkheid van mag verwachten. Is er iets mis met uw product? Neem dan contact met ons op met uw bestelnummer en een korte omschrijving van het probleem.',
  },
  {
    question: 'Hoe kan ik een product retourneren?',
    answer: 'Retourneren verloopt via bol.com. In uw bol.com-account vindt u bij uw bestellingen de optie om een artikel te retourneren of een serviceverzoek te starten. Komt u er niet uit of heeft u inhoudelijke vragen over het product? Stuur ons dan gerust een bericht via e-mail.',
  },
  {
    question: 'Hoe snel reageren jullie op mijn bericht?',
    answer: 'We proberen uw bericht zo snel mogelijk te beantwoorden. In de meeste gevallen reageren we binnen 1–2 werkdagen op vragen die per e-mail binnenkomen.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-somstyle-cream py-24">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-somstyle-blue/10 blur-3xl" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-somstyle-blue-deep">
            Service
          </p>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-somstyle-ink md:text-5xl">
            Veelgestelde vragen
          </h2>
          <p className="mx-auto mb-12 mt-5 max-w-2xl text-center text-lg leading-relaxed text-somstyle-ink/65">
            Heldere antwoorden over bestellen, garantie en ondersteuning na aankoop.
          </p>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.5rem] border border-somstyle-ink/10 bg-white/85 shadow-premium-soft backdrop-blur"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-somstyle-cream/70"
                >
                  <span className="pr-4 font-semibold text-somstyle-ink">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-somstyle-blue/15 text-lg text-somstyle-blue-deep transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 leading-relaxed text-somstyle-ink/70">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




