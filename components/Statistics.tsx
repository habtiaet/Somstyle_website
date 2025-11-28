import React from 'react';

export default function Statistics() {
  return (
    <section className="py-12 bg-somstyle-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Statistic */}
              <div className="text-center md:text-center border-b md:border-b-0 md:border-r border-somstyle-gray-light pb-8 md:pb-0 md:pr-8 last:border-0">
                <div className="text-4xl md:text-5xl font-bold text-somstyle-blue mb-3">
                  5+
                </div>
                <div className="text-lg md:text-xl font-semibold text-somstyle-gray-dark">
                  Jaar ervaring
                </div>
              </div>
              
              {/* Second Statistic */}
              <div className="text-center md:text-center border-b md:border-b-0 md:border-r border-somstyle-gray-light pb-8 md:pb-0 md:pr-8 last:border-0">
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

