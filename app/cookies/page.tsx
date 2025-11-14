import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookiebeleid – Somstyle',
  description: 'Cookiebeleid van Somstyle. Informatie over het gebruik van cookies op onze website.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-somstyle-gray-dark mb-8">
            Cookiebeleid
          </h1>
          
          <div className="prose prose-lg max-w-none text-somstyle-gray-dark/80">
            <p className="mb-6">
              <strong>Laatst bijgewerkt:</strong> {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                1. Wat zijn cookies?
              </h2>
              <p className="mb-4">
                Cookies zijn kleine tekstbestanden die op uw computer, tablet of smartphone worden opgeslagen wanneer u een website bezoekt. Cookies bevatten informatie die door de website wordt gebruikt om uw bezoek te onthouden en uw gebruikerservaring te verbeteren.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                2. Welke cookies gebruikt Somstyle?
              </h2>
              <p className="mb-4">
                Somstyle gebruikt alleen technisch noodzakelijke cookies die essentieel zijn voor het functioneren van de website. Deze cookies zijn nodig om de website correct te laten werken en kunnen niet worden uitgeschakeld.
              </p>
              <p className="mb-4">
                <strong>Technisch noodzakelijke cookies:</strong>
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Session cookies: Deze cookies worden gebruikt om uw sessie tijdens uw bezoek aan de website te beheren.</li>
                <li>Functionele cookies: Deze cookies zorgen ervoor dat de website correct functioneert en uw voorkeuren onthoudt.</li>
              </ul>
              <p className="mb-4">
                <strong>Wij gebruiken GEEN:</strong>
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Tracking cookies</li>
                <li>Analytics cookies (zoals Google Analytics)</li>
                <li>Marketing cookies</li>
                <li>Social media cookies</li>
                <li>Cookies van derden voor advertentiedoeleinden</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                3. Toestemming voor cookies
              </h2>
              <p className="mb-4">
                Voor technisch noodzakelijke cookies is geen toestemming vereist volgens de AVG en de Telecommunicatiewet. Deze cookies zijn essentieel voor het functioneren van de website en worden automatisch geplaatst wanneer u onze website bezoekt.
              </p>
              <p className="mb-4">
                Omdat wij geen tracking cookies of andere cookies die persoonsgegevens verwerken gebruiken, hoeft u geen cookiebanner te accepteren of toestemming te geven.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                4. Cookies beheren
              </h2>
              <p className="mb-4">
                U kunt cookies altijd beheren of verwijderen via de instellingen van uw browser. Houd er echter rekening mee dat het uitschakelen van technisch noodzakelijke cookies de functionaliteit van onze website kan beïnvloeden.
              </p>
              <p className="mb-4">
                Instructies voor het beheren van cookies in populaire browsers:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-somstyle-blue hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opslaan" target="_blank" rel="noopener noreferrer" className="text-somstyle-blue hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-somstyle-blue hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-verwijderen-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-somstyle-blue hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                5. Wijzigingen in dit cookiebeleid
              </h2>
              <p className="mb-4">
                Easycheck Com B.V. behoudt zich het recht voor om dit cookiebeleid op elk moment te wijzigen. Wijzigingen worden op deze pagina gepubliceerd. Het is raadzaam dit cookiebeleid regelmatig te raadplegen.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-somstyle-gray-dark mb-4">
                6. Contact
              </h2>
              <p className="mb-4">
                Voor vragen over dit cookiebeleid kunt u contact met ons opnemen:
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

