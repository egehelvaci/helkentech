'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll efekti - navbar background değişimi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıkken body scroll'u engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '#hizmetler', label: 'Hizmetlerimiz' },
    { href: '#hakkimizda', label: 'Hakkımızda' },
    { href: '/blog', label: 'Blog' },
    { href: '#demo', label: 'İletişim' },
  ];

  // Smooth scroll handler
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false); // Mobil menüyü kapat
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-20 h-20 transform group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="/helkonlogo2.png"
                  alt="Helken Tech Logo"
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-lg"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine pointer-events-none"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#demo"
              onClick={(e) => handleClick(e, '#demo')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Demo Talep Et
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[72px] bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-lg font-medium text-gray-700 hover:text-blue-600 py-3 border-b border-gray-100 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={(e) => handleClick(e, '#demo')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200 mt-4 cursor-pointer"
            >
              Demo Talep Et
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

