'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (link: { label: string; id: string; href?: string }) => {
    if (link.href) {
      // Navigate to page
      setIsMobileMenuOpen(false);
    } else if (isHomePage) {
      // Scroll to section on homepage
      scrollToSection(link.id);
    } else {
      // Navigate to homepage and then scroll
      window.location.href = `/#${link.id}`;
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Over Somstyle', id: 'over' },
    { label: 'Producten', id: 'producten', href: '/producten' },
    { label: 'Contact', id: 'contact', href: '/contact' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href ? (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-somstyle-gray-dark hover:text-somstyle-blue transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="text-somstyle-gray-dark hover:text-somstyle-blue transition-colors font-medium"
                >
                  {link.label}
                </button>
              )
            ))}
            <a
              href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-somstyle-blue text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium"
            >
              Bekijk op bol.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-somstyle-gray-dark transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-somstyle-gray-dark transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-somstyle-gray-dark transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              link.href ? (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-somstyle-gray-dark hover:text-somstyle-blue transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left text-somstyle-gray-dark hover:text-somstyle-blue transition-colors font-medium py-2"
                >
                  {link.label}
                </button>
              )
            ))}
            <a
              href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-somstyle-blue text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium text-center"
            >
              Bekijk op bol.com
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}


