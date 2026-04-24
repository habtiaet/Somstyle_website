import React from 'react';
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

export default function Products() {
  return (
    <section id="producten" className="bg-somstyle-cream py-24">
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.34em] text-somstyle-blue-deep">
            Collectie
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-somstyle-ink mb-5 text-center">
            Onze Somstyle producten
          </h2>
          
          <p className="text-lg leading-8 text-somstyle-ink/68 mb-14 text-center max-w-3xl mx-auto">
            Somstyle biedt verschillende producten voor in en om het huis. Hieronder ziet u een aantal categorieën waarin onze artikelen vaak worden gebruikt. Voor het complete en actuele overzicht verwijzen we u graag naar bol.com.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-somstyle-ink/10 bg-white shadow-premium-soft transition duration-500 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-somstyle-ink/55 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold tracking-tight text-somstyle-ink mb-3">
                    {category.title}
                  </h3>
                  <p className="text-somstyle-ink/68 mb-6 leading-7">
                    {category.description}
                  </p>
                  <a
                    href={category.bolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-somstyle-ink px-5 py-3 text-sm font-bold text-white shadow-lg shadow-somstyle-ink/15 transition hover:-translate-y-0.5 hover:bg-somstyle-blue-deep"
                  >
                    {category.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-somstyle-blue px-8 py-4 text-base font-bold text-somstyle-ink shadow-premium-soft transition hover:-translate-y-1 hover:bg-somstyle-blue/85"
            >
              Bekijk alle Somstyle producten op bol.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


