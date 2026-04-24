import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface ProductCategory {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  bolUrl: string;
}

const categories: ProductCategory[] = [
  {
    title: 'Schoonmaken',
    description: 'Met onze hulpmiddelen voor het huishouden wordt schoonmaken een stuk makkelijker. Handige details en slimme ontwerpen zorgen ervoor dat u snel klaar bent en alles er weer verzorgd uitziet.',
    buttonText: 'Bekijk Schoonmaken op bol.com',
    imageUrl: '/assets/images/products/schoonmaken.jpg',
    bolUrl: 'https://www.bol.com/nl/nl/b/schoonmaken-somstyle/602724338+31565/',
  },
  {
    title: 'Hobby & Creatief',
    description: 'Voor al uw creatieve projecten en hobby\'s biedt Somstyle praktische oplossingen. Van opbergsystemen tot accessoires die u helpen georganiseerd te blijven tijdens uw hobby\'s.',
    buttonText: 'Bekijk Hobby & Creatief op bol.com',
    imageUrl: '/assets/images/products/hobby-creatief.jpg',
    bolUrl: 'https://www.bol.com/nl/nl/b/hobby-creatief-somstyle/602724338+10505/',
  },
  {
    title: 'Koken & Tafelen',
    description: 'Somstyle helpt u om uw keuken netjes en overzichtelijk te houden. Denk aan slimme opbergoplossingen, praktische accessoires en producten die u dagelijks gebruikt bij het koken en tafelen.',
    buttonText: 'Bekijk Koken & Tafelen op bol.com',
    imageUrl: '/assets/images/products/koken-tafelen.jpg',
    bolUrl: 'https://www.bol.com/nl/nl/b/koken-tafelen-somstyle/602724338+11764/',
  },
  {
    title: 'Reis Accessoires',
    description: 'Ook buiten de deur is Somstyle graag uw vaste helper. Producten voor onderweg en op reis zorgen ervoor dat u georganiseerd blijft en uw spullen goed beschermd en makkelijk mee te nemen zijn.',
    buttonText: 'Bekijk Reis Accessoires op bol.com',
    imageUrl: '/assets/images/products/reis-accessoires.jpg',
    bolUrl: 'https://www.bol.com/nl/nl/b/reisbagage-reisaccessoires-somstyle/602724338+16799/',
  },
  {
    title: 'Elektronica Accessoires',
    description: 'Voor al uw elektronische apparaten biedt Somstyle praktische accessoires en opbergoplossingen. Van kabelorganisatie tot beschermhoezen, alles om uw elektronica netjes en veilig te houden.',
    buttonText: 'Bekijk Elektronica Accessoires op bol.com',
    imageUrl: '/assets/images/products/elektronica-accessoires.jpg',
    bolUrl: 'https://www.bol.com/nl/nl/b/elektronica-somstyle/602724338+3136/',
  },
  {
    title: 'Kamperen & Outdoor',
    description: 'Voor uw outdoor avonturen biedt Somstyle praktische producten voor kamperen en buitensport. Van opbergoplossingen tot accessoires die u helpen georganiseerd te blijven tijdens uw avonturen.',
    buttonText: 'Bekijk Kamperen & Outdoor op bol.com',
    imageUrl: '/assets/images/products/kamperen-outdoor.jpg',
    bolUrl: 'https://www.bol.com/nl/nl/b/kamperen-outdoor-somstyle/602724338+15270/',
  },
];

export const metadata = {
  title: 'Producten – Somstyle',
  description: 'Ontdek de verschillende Somstyle productcategorieën: Schoonmaken, Hobby & Creatief, Koken & Tafelen, Reis Accessoires, Elektronica Accessoires, en Kamperen & Outdoor.',
};

export default function ProductenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 bg-somstyle-cream">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-somstyle-blue-deep">
                  Assortiment
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-somstyle-ink md:text-5xl">
                  Onze Somstyle producten
                </h1>
                <p className="mt-5 text-lg leading-8 text-somstyle-gray-dark/70">
                  Somstyle biedt verschillende producten voor in en om het huis. Hieronder ziet u een aantal categorieën waarin onze artikelen vaak worden gebruikt. Voor het complete en actuele overzicht verwijzen we u graag naar bol.com.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-[2rem] border border-white bg-white shadow-premium-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={category.imageUrl}
                        alt={category.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-somstyle-ink/35 to-transparent" />
                    </div>
                    <div className="p-7">
                      <h2 className="text-2xl font-semibold tracking-tight text-somstyle-ink mb-3">
                        {category.title}
                      </h2>
                      <p className="text-somstyle-gray-dark/70 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <a
                        href={category.bolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-somstyle-ink px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-somstyle-blue-deep"
                      >
                        {category.buttonText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mb-8">
                <a
                  href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-somstyle-ink px-8 py-4 font-semibold text-white shadow-premium-soft transition-all hover:-translate-y-0.5 hover:bg-somstyle-blue-deep"
                >
                  Bekijk alle Somstyle producten op bol.com
                </a>
              </div>

              <div className="text-center">
                <Link
                  href="/"
                  className="font-medium text-somstyle-blue-deep hover:underline"
                >
                  Terug naar homepage
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

