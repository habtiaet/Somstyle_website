import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-somstyle-gray-dark mb-8">
            Privacyverklaring
          </h1>
          
          <div className="prose prose-lg max-w-none text-somstyle-gray-dark/80">
            <p className="mb-6">
              <strong>Laatst bijgewerkt:</strong> {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                1. Inleiding
              </h2>
              <p className="mb-4">
                Easycheck Com B.V. (hierna: &quot;Somstyle&quot;, &quot;wij&quot;, &quot;ons&quot; of &quot;onze&quot;) respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. Deze privacyverklaring legt uit hoe wij uw persoonlijke gegevens verzamelen, gebruiken en beschermen wanneer u onze website bezoekt of contact met ons opneemt.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                2. Gegevens die wij verzamelen
              </h2>
              <p className="mb-4">
                Wanneer u contact met ons opneemt via e-mail of telefoon, kunnen wij de volgende gegevens verzamelen:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer (indien opgegeven)</li>
                <li>Inhoud van uw bericht of vraag</li>
                <li>Bestelnummer van bol.com (indien opgegeven)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                3. Doel van gegevensverwerking
              </h2>
              <p className="mb-4">
                Wij gebruiken uw gegevens uitsluitend voor de volgende doeleinden:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Het beantwoorden van uw vragen en verzoeken</li>
                <li>Het verlenen van klantenservice</li>
                <li>Het afhandelen van garantieclaims en serviceverzoeken</li>
                <li>Het verbeteren van onze dienstverlening</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                4. Bewaartermijn
              </h2>
              <p className="mb-4">
                Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, of zoals vereist door de wet.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                5. Uw rechten
              </h2>
              <p className="mb-4">
                U heeft het recht om:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Inzage te krijgen in uw persoonlijke gegevens</li>
                <li>Uw gegevens te laten corrigeren of verwijderen</li>
                <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
                <li>Uw gegevens over te dragen</li>
              </ul>
              <p className="mb-4">
                Voor vragen over uw privacyrechten kunt u contact met ons opnemen via info@easycheckcom.nl.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                6. Contact
              </h2>
              <p className="mb-4">
                Voor vragen over deze privacyverklaring of over de verwerking van uw gegevens, kunt u contact met ons opnemen:
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


