'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Le Reiki', href: '/reiki' },
  { name: 'Le Feng-Shui', href: '/feng-shui' },
  { name: 'La Géobiologie', href: '/geobiologie' },
  { name: 'Contact/Tarifs', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image src="/logo.png" alt="Les Sens de l'Harmonie" width={32} height={32} priority className="w-8 h-8 object-contain" />
              <div className="absolute inset-0 bg-sage-200/50 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-playfair font-bold text-sage-800 group-hover:text-sage-600 transition-colors duration-200">
                Les Sens de l'Harmonie
              </h1>
              <p className="hidden sm:block text-sm text-sage-600 font-light">
                Reiki • Feng Shui • Géobiologie
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 hover:text-sage-600 ${
                    isActive ? 'text-sage-800' : 'text-sage-700'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-6 left-0 right-0 h-0.5 bg-sage-500 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact">
                Prendre Rendez-vous
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-sage-700 hover:text-sage-900"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/98 backdrop-blur-sm shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-medium transition-colors duration-200 hover:text-sage-600 ${
                        isActive ? 'text-sage-800 border-l-2 border-sage-500 pl-4' : 'text-sage-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
                className="pt-4"
              >
                <Button
                  asChild
                  className="bg-sage-600 hover:bg-sage-700 text-white w-full rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">
                    Prendre Rendez-vous
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}