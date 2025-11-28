import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-somstyle-gray-dark mb-4 text-center">
            Klantenservice & Contact
          </h2>
          
          <p className="text-lg text-somstyle-gray-dark/70 mb-12 text-center max-w-2xl mx-auto">
            Heeft u een Somstyle product via bol.com gekocht en een vraag of opmerking? We helpen u graag verder. U kunt ons rechtstreeks benaderen via e-mail of telefoon. Vermeld indien mogelijk uw bestelnummer van bol.com en de productnaam, zodat we u sneller kunnen helpen.
          </p>
          
          <div className="bg-somstyle-gray-light rounded-lg p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl font-bold text-somstyle-gray-dark mb-4">
                  Contactgegevens
                </h3>
                <div className="space-y-3 text-somstyle-gray-dark/80">
                  <p className="font-semibold text-somstyle-gray-dark">
                    Easycheck Com B.V.
                  </p>
                  <p>Kruisberg 56</p>
                  <p>6231 RK Meerssen</p>
                  <p>Nederland</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-somstyle-gray-dark mb-4">
                  Neem contact op
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-somstyle-gray-dark/60 mb-1">E-mail</p>
                    <a
                      href="mailto:info@easycheckcom.nl"
                      className="text-somstyle-blue hover:underline font-medium text-lg"
                    >
                      info@easycheckcom.nl
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-somstyle-gray-dark/60 mb-1">Telefoon</p>
                    <a
                      href="tel:+31630378093"
                      className="text-somstyle-blue hover:underline font-medium text-lg"
                    >
                      +31 6 30378093
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-somstyle-gray-dark/10">
              <p className="text-somstyle-gray-dark/70 text-sm">
                <strong>Tip:</strong> Voor snellere service, vermeld bij uw contact:
              </p>
              <ul className="list-disc list-inside text-somstyle-gray-dark/70 text-sm mt-2 space-y-1">
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

