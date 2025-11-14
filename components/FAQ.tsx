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
    <section id="faq" className="py-20 bg-somstyle-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-somstyle-gray-dark mb-12 text-center">
            Veelgestelde vragen
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-somstyle-gray-light transition-colors"
                >
                  <span className="font-semibold text-somstyle-gray-dark pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`text-somstyle-blue text-2xl transition-transform flex-shrink-0 ${
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
                  <div className="px-6 py-4 text-somstyle-gray-dark/80 leading-relaxed">
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



