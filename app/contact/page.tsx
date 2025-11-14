import Link from 'next/link';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact – Somstyle',
  description: 'Neem contact op met Somstyle voor vragen over uw bestelling of product. Klantenservice via e-mail of telefoon.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

