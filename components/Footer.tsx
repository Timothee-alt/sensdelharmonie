'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Le Reiki', href: '/reiki' },
  { name: 'Le Feng-Shui', href: '/feng-shui' },
  { name: 'La Géobiologie', href: '/geobiologie' },
  { name: 'Contact/Tarifs', href: '/contact' },
];

const services = [
  'Soins Reiki individuels',
  'Feng Shui Tibétain',
  'Expertise Géobiologique',
  'Séances à distance',
];

const contactInfo = [
  { icon: Mail, text: 'lessensdelharmonie@gmail.com', href: 'mailto:lessensdelharmonie@gmail.com' },
  { icon: Phone, text: '06 75 44 55 82', href: 'tel:+33675445582' },
  { icon: MapPin, text: '6, Lotissement des 4 Vents, 22450 Troguéry', href: '#' },
];

const socialLinks = [
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Facebook, href: '#', name: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <Image src="/logo.png" alt="logo" width={32} height={32} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <h3 className="text-xl font-playfair font-bold text-white title-color">
                    Les Sens de l'Harmonie
                  </h3>
                  <p className="text-sm text-sage-300">
                    Bien-être & Harmonie
                  </p>
                </div>
              </Link>
              <p className="text-sage-300 leading-relaxed">
                Découvrez l'harmonie entre votre être et votre environnement grâce au Reiki, 
                au Feng Shui Tibétain et à la Géobiologie.
              </p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 title-color">Navigation</h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sage-300 hover:text-warm-gold transition-colors duration-200 hover:pl-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 title-color">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-sage-300 flex items-center">
                    <div className="w-2 h-2 bg-warm-gold rounded-full mr-3 flex-shrink-0"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4 title-color">Contact</h4>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start space-x-3 text-sage-300 hover:text-warm-gold transition-colors duration-200 group"
                  >
                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="leading-relaxed">{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h5 className="text-white font-medium mb-3 title-color">Suivez-nous</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center text-sage-300 hover:bg-warm-gold hover:text-white transition-all duration-200 hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-sage-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sage-400 text-sm">
              © 2024 Les Sens de l'Harmonie. Tous droits réservés.
            </p>
            <p className="text-sage-400 text-sm flex items-center gap-3">
              <span>Site créé par</span>
              <a
                href="https://bwswebsite.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sage-700/60 px-3 py-1.5 rounded-full text-white shadow-lg ring-1 ring-warm-gold/30 hover:bg-warm-gold hover:text-sage-900 transition-all duration-200"
                aria-label="Breizh Web Solution"
              >
                <Image src="/Breizh.png" alt="Breizh Web Solution" width={24} height={24} className="rounded-full ring-1 ring-white/20 shadow-sm" />
                <span className="font-semibold">Breizh Web Solution</span>
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}