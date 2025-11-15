import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <About />
      <Products />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}




