'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements animation
      gsap.to('.cta-float', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5,
      });

      // CTA container animation
      gsap.fromTo('.cta-content', {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cta-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-container relative py-20 bg-gradient-to-br from-cream via-sage-50 to-sage-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-warm-gold/20 rounded-full blur-3xl cta-float"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-sage-400/20 rounded-full blur-3xl cta-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-warm-gold/10 rounded-full blur-3xl cta-float"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/lotus.png" alt="Lotus" width={24} height={24} className="cta-float absolute top-1/4 left-[16%] opacity-60" />
        <Heart className="cta-float absolute top-2/3 right-1/4 w-8 h-8 text-sage-300/60" />
        <Image src="/lotus.png" alt="Lotus" width={28} height={28} className="cta-float absolute bottom-1/3 left-1/3 opacity-40" />
        <Heart className="cta-float absolute top-1/2 right-[16%] w-5 h-5 text-sage-400/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="cta-content space-y-8"
        >
          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold  leading-tight title-color">
            Prêt à Commencer Votre
            <span className="text-transparent title-color bg-clip-text"> Transformation ?</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Laissez-vous guider vers l'harmonie parfaite. Votre voyage vers le bien-être commence aujourd'hui.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {[
              { title: 'Devis', description: 'Gratuit et sans engagement' },
              { title: 'Résultats Durables', description: 'Changements profonds et permanents' },
              { title: 'Suivi Personnalisé', description: 'Accompagnement sur mesure' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-lg font-semibold mb-2 title-color">
                  {benefit.title}
                </h3>
                <p className="text-gray-500">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-color hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Link href="/contact" className="flex items-center">
                Prendre Rendez-vous
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-color title-color hover:bg-sage-200 hover:text-sage-900 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="tel:+33675445582" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Appeler Maintenant
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 space-y-4 ">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
              <a 
                href="mailto:lessensdelharmonie@gmail.com"
                className="flex items-center space-x-2 text-gray-500 hover:text-warm-gold transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>lessensdelharmonie@gmail.com</span>
              </a>
              <div className="hidden md:block w-1 h-1 bg-sage-400 rounded-full"></div>
              <a 
                href="tel:+33675445582"
                className="flex items-center space-x-2 hover:text-warm-gold transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>06 75 44 55 82</span>
              </a>
            </div>
            <p className="text-gray-500 text-lg">
              Troguéry, Bretagne • Consultations sur rendez-vous
            </p>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="inline-flex items-center space-x-3 bg-color backdrop-blur-sm rounded-full px-6 py-3 border border-sage-500/30">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-sage-100 font-medium">
                Plus de 100 vies transformées depuis 2009
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}