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
    <section className="relative min-h-screen overflow-hidden bg-somstyle-ink pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(4,228,255,0.26),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(248,245,239,0.10),transparent_24%),linear-gradient(160deg,#101820_0%,#132531_100%)]" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(135deg,transparent_0%,transparent_52%,rgba(248,245,239,0.96)_52%,#ffffff_100%)] lg:block" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-somstyle-blue/20 blur-3xl" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="grid min-w-0 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="w-full min-w-0 max-w-3xl">
            <div className="mb-6 inline-flex max-w-full items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-somstyle-blue backdrop-blur sm:text-xs sm:tracking-[0.28em]">
              Premium everyday essentials
            </div>
            <h1 className="mb-6 max-w-[18rem] text-[2.15rem] font-black leading-[1.06] tracking-[-0.025em] sm:max-w-full sm:text-5xl md:text-7xl">
              Slim wonen begint bij verfijnde details.
            </h1>
            <p className="mb-6 max-w-[18rem] text-lg font-medium leading-relaxed text-white/92 sm:max-w-2xl sm:text-xl md:text-2xl">
              Somstyle maakt praktische producten die rust brengen in huis, onderweg en in uw dagelijkse routines.
            </p>
            <p className="mb-10 max-w-[18rem] text-sm leading-7 text-white/82 sm:max-w-2xl sm:text-base md:text-lg">
              Ontdek doordachte opbergers, accessoires en huishoudelijke helpers met een moderne uitstraling. Exclusief verkrijgbaar via bol.com.
            </p>
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <a
                href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center rounded-full bg-somstyle-blue px-5 py-4 text-base font-extrabold text-somstyle-ink shadow-[0_16px_40px_rgba(4,228,255,0.28)] transition-all hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-8"
              >
                Bekijk op bol.com
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-somstyle-ink/70 px-5 py-4 text-base font-extrabold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white hover:text-somstyle-ink sm:w-auto sm:px-8"
              >
                Vraag klantenservice
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-somstyle-blue/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-premium backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.45rem] bg-somstyle-cream text-somstyle-ink">
                <div className="relative h-80 bg-[url('/assets/images/products/koken-tafelen.jpg')] bg-cover bg-center md:h-[30rem]">
                  <div className="absolute inset-0 bg-gradient-to-t from-somstyle-ink/80 via-somstyle-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-somstyle-blue">Somstyle selectie</p>
                    <h2 className="text-3xl font-black tracking-[-0.04em]">Functioneel. Rustig. Mooi.</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-somstyle-ink/10">
                  <div className="bg-white p-5">
                    <p className="text-sm font-extrabold">Slim organiseren</p>
                    <p className="mt-1 text-sm text-somstyle-gray-dark/60">Voor keuken, reis en hobby.</p>
                  </div>
                  <div className="bg-white p-5">
                    <p className="text-sm font-extrabold">Snelle service</p>
                    <p className="mt-1 text-sm text-somstyle-gray-dark/60">Hulp bij elke bestelling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


