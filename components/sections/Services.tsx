'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Compass, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LotusIcon = (props: { className?: string }) => (
  <Image src="/lotus.png" alt="Lotus" width={32} height={32} className={props.className} />
);

const services = [
  {
    icon: LotusIcon,
    title: 'Reiki',
    subtitle: 'Soins Énergétiques Japonais',
    description: 'Méthode de soins énergétiques douce et naturellepour réduire le stress, favoriser la relaxation et l’équilibre émotionne',
    benefits: ['Réduction du stress', 'Relaxation profonde', 'Équilibre émotionnel', 'Amélioration du sommeil'],
    price: 'À partir de 45€',
    href: '/reiki',
    gradient: 'from-sage-400 to-sage-600',
  },
  {
    icon: Home,
    title: 'Feng Shui Tibétain',
    subtitle: 'Harmonisation de l\'Habitat',
    description: 'Art millénaire d\'harmonisation des énergies de votre lieu de vie selon les principes du Feng Shui Tibétain.',
    benefits: ['Amélioration du bien-être', 'Harmonisation des énergies', 'Optimisation des espaces', 'Équilibre familial'],
    price: 'Devis personnalisé',
    href: '/feng-shui',
    gradient: 'from-warm-gold to-yellow-600',
  },
  {
    icon: Compass,
    title: 'Géobiologie',
    subtitle: 'Médecine de l\'Habitat',
    description: 'Étude des interactions entre les êtres vivants et leur environnement pour optimiser votre lieu de vie.',
    benefits: ['Détection des nuisances', 'Amélioration de la santé', 'Optimisation énergétique', 'Expertise complète'],
    price: 'Devis personnalisé',
    href: '/geobiologie',
    gradient: 'from-sage-500 to-sage-700',
  },
];

export default function Services() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Service cards animation
      gsap.fromTo('.service-card', {
        y: 100,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      // Background elements parallax
      gsap.to('.service-bg-element', {
        scrollTrigger: {
          trigger: '.services-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -50,
        rotation: 10,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-container relative py-20 bg-gradient-to-b from-sage-50 to-cream overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="service-bg-element absolute top-20 right-10 w-40 h-40 bg-sage-200/20 rounded-full blur-3xl"></div>
        <div className="service-bg-element absolute bottom-40 left-20 w-60 h-60 bg-warm-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 title-color">
            Mes Services de
            <span className="text-transparent bg-gradient-to-r title-color bg-clip-text"> Bien-être</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes trois spécialités.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card group relative bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <CardContent className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-2 title-color">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-medium mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-gray-500">
                    {service.price}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-color hover:bg-sage-700 text-white rounded-full group-hover:shadow-lg transition-all duration-200"
                >
                  <Link href={service.href} className="flex items-center justify-center">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-500 mb-6">
            Prêt à commencer votre voyage vers l'harmonie ?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-color hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <Link href="/contact">
              Contactez-nous
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}