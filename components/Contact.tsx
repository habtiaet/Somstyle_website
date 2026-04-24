import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-somstyle-blue-deep">
            Service
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-somstyle-ink mb-5 text-center">
            Klantenservice & Contact
          </h2>
          
          <p className="text-lg leading-8 text-somstyle-ink/70 mb-12 text-center max-w-2xl mx-auto">
            Heeft u een Somstyle product via bol.com gekocht en een vraag of opmerking? We helpen u graag verder. U kunt ons rechtstreeks benaderen via e-mail of telefoon. Vermeld indien mogelijk uw bestelnummer van bol.com en de productnaam, zodat we u sneller kunnen helpen.
          </p>
          
          <div className="rounded-[2rem] border border-somstyle-ink/10 bg-somstyle-cream p-6 shadow-premium-soft md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-somstyle-ink mb-4">
                  Contactgegevens
                </h3>
                <div className="space-y-3 text-somstyle-ink/75">
                  <p className="font-semibold text-somstyle-ink">
                    Easycheck Com B.V.
                  </p>
                  <p>Kruisberg 56</p>
                  <p>6231 RK Meerssen</p>
                  <p>Nederland</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-somstyle-ink mb-4">
                  Neem contact op
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-somstyle-ink/55 mb-1">E-mail</p>
                    <a
                      href="mailto:info@easycheckcom.nl"
                      className="text-somstyle-blue-deep hover:text-somstyle-ink font-medium text-lg transition-colors"
                    >
                      info@easycheckcom.nl
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-somstyle-ink/55 mb-1">Telefoon</p>
                    <a
                      href="tel:+31630378093"
                      className="text-somstyle-blue-deep hover:text-somstyle-ink font-medium text-lg transition-colors"
                    >
                      +31 6 30378093
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-somstyle-ink/10">
              <p className="text-somstyle-ink/70 text-sm">
                <strong>Tip:</strong> Voor snellere service, vermeld bij uw contact:
              </p>
              <ul className="list-disc list-inside text-somstyle-ink/70 text-sm mt-2 space-y-1">
                <li>Uw bestelnummer van bol.com (indien van toepassing)</li>
                <li>De naam van het product</li>
                <li>Een korte omschrijving van uw vraag of probleem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

