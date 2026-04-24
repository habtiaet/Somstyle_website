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

  const navLinkClass =
    'text-sm font-semibold tracking-wide text-somstyle-ink/70 transition-colors hover:text-somstyle-blue-deep';

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-somstyle-ink/10 bg-white/90 shadow-premium-soft backdrop-blur-xl'
          : 'bg-white/70 backdrop-blur-xl'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              link.href ? (
                <Link
                  key={link.id}
                  href={link.href}
                  className={navLinkClass}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={navLinkClass}
                >
                  {link.label}
                </button>
              )
            ))}
            <a
              href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-somstyle-ink px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-premium-soft transition-all hover:-translate-y-0.5 hover:bg-somstyle-blue-deep"
            >
              Bekijk op bol.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full border border-somstyle-ink/10 bg-white/80 p-2 shadow-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-somstyle-ink transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-somstyle-ink transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-somstyle-ink transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 space-y-3 rounded-3xl border border-somstyle-ink/10 bg-white/95 p-4 shadow-premium-soft md:hidden">
            {navLinks.map((link) => (
              link.href ? (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded-2xl px-3 py-2 text-left font-semibold text-somstyle-ink/75 transition-colors hover:bg-somstyle-cream hover:text-somstyle-blue-deep"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="block w-full rounded-2xl px-3 py-2 text-left font-semibold text-somstyle-ink/75 transition-colors hover:bg-somstyle-cream hover:text-somstyle-blue-deep"
                >
                  {link.label}
                </button>
              )
            ))}
            <a
              href="https://www.bol.com/nl/nl/s/?searchtext=somstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-somstyle-ink px-6 py-3 text-center font-semibold text-white transition-all hover:bg-somstyle-blue-deep"
            >
              Bekijk op bol.com
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}


