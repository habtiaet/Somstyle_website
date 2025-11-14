import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-somstyle-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-somstyle-blue mb-4">
              Easycheck Com B.V. – Somstyle
            </h3>
            <p className="text-gray-300 mb-2">
              Kruisberg 56
            </p>
            <p className="text-gray-300 mb-2">
              6231 RK Meerssen, Nederland
            </p>
            <p className="text-gray-300 mb-2">
              <a
                href="mailto:info@easycheckcom.nl"
                className="hover:text-somstyle-blue transition-colors"
              >
                info@easycheckcom.nl
              </a>
            </p>
            <p className="text-gray-300">
              <a
                href="tel:+31630378093"
                className="hover:text-somstyle-blue transition-colors"
              >
                +31 6 30378093
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Snelle links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/producten"
                  className="text-gray-300 hover:text-somstyle-blue transition-colors"
                >
                  Producten
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-somstyle-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-somstyle-blue transition-colors"
                >
                  Somstyle op bol.com
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-somstyle-blue transition-colors"
                >
                  Privacyverklaring
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-gray-300 hover:text-somstyle-blue transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-somstyle-blue transition-colors"
                >
                  Cookiebeleid
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Over Somstyle</h3>
            <p className="text-gray-300">
              Slimme oplossingen voor in en om het huis. Praktisch, stijlvol en
              makkelijk in gebruik.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Easycheck Com B.V. – Somstyle. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}


