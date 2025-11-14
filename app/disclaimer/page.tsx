import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-somstyle-gray-dark mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none text-somstyle-gray-dark/80">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                1. Algemeen
              </h2>
              <p className="mb-4">
                Deze disclaimer is van toepassing op het gebruik van de website van Somstyle (somstyle.eu of gerelateerde domeinen) en alle diensten die door Easycheck Com B.V. worden aangeboden.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                2. Informatie op de website
              </h2>
              <p className="mb-4">
                Easycheck Com B.V. streeft ernaar de informatie op deze website zo actueel en nauwkeurig mogelijk te houden. Wij kunnen echter niet garanderen dat alle informatie op deze website volledig, accuraat of up-to-date is. Wij behouden ons het recht voor om op elk moment wijzigingen aan te brengen in de informatie op deze website zonder voorafgaande kennisgeving.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                3. Productinformatie
              </h2>
              <p className="mb-4">
                Somstyle producten zijn verkrijgbaar via bol.com. De actuele productinformatie, prijzen, beschikbaarheid en specificaties zijn te vinden op de website van bol.com. Wij zijn niet verantwoordelijk voor eventuele verschillen tussen de informatie op deze website en de informatie op bol.com.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                4. Externe links
              </h2>
              <p className="mb-4">
                Deze website bevat links naar externe websites, waaronder bol.com. Wij zijn niet verantwoordelijk voor de inhoud, privacybeleid of praktijken van deze externe websites. Het gebruik van externe links is op eigen risico.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                5. Aansprakelijkheid
              </h2>
              <p className="mb-4">
                Easycheck Com B.V. is niet aansprakelijk voor enige directe of indirecte schade die voortvloeit uit het gebruik van deze website of de informatie die hierop wordt verstrekt. Dit geldt ook voor schade die het gevolg is van technische problemen, onderbrekingen of fouten op de website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                6. Intellectueel eigendom
              </h2>
              <p className="mb-4">
                Alle rechten met betrekking tot de inhoud van deze website, inclusief teksten, afbeeldingen, logo's en andere materialen, berusten bij Easycheck Com B.V. of de respectieve rechthebbenden. Het zonder toestemming kopiëren, verspreiden of anderszins gebruiken van deze materialen is niet toegestaan.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                7. Wijzigingen
              </h2>
              <p className="mb-4">
                Easycheck Com B.V. behoudt zich het recht voor om deze disclaimer op elk moment te wijzigen. Wijzigingen worden op deze pagina gepubliceerd. Het is raadzaam deze disclaimer regelmatig te raadplegen.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                8. Contact
              </h2>
              <p className="mb-4">
                Voor vragen over deze disclaimer kunt u contact met ons opnemen:
              </p>
              <p className="mb-4">
                <strong>Easycheck Com B.V.</strong><br />
                Kruisberg 56<br />
                6231 RK Meerssen<br />
                Nederland<br />
                E-mail: <a href="mailto:info@easycheckcom.nl" className="text-somstyle-blue hover:underline">info@easycheckcom.nl</a>
              </p>
            </section>
          </div>
          
          <div className="mt-12">
            <Link
              href="/"
              className="text-somstyle-blue hover:underline font-medium"
            >
              ← Terug naar homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


