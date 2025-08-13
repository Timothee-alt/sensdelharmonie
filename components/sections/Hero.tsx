'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Heart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements animation
      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5,
      });

      // Background elements parallax
      gsap.to('.bg-element', {
        scrollTrigger: {
          trigger: '.hero-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -100,
        opacity: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-sage-50 to-sage-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-element absolute top-20 left-10 w-32 h-32 bg-sage-200/30 rounded-full blur-3xl"></div>
        <div className="bg-element absolute bottom-40 right-20 w-48 h-48 bg-warm-gold/20 rounded-full blur-3xl"></div>
        <div className="bg-element absolute top-1/2 left-1/2 w-64 h-64 bg-sage-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="floating-element absolute top-1/4 left-1/6 w-6 h-6 text-warm-gold/60" />
        <Heart className="floating-element absolute top-2/3 right-1/4 w-8 h-8 text-sage-400/60" />
        <Leaf className="floating-element absolute bottom-1/3 left-1/3 w-7 h-7 text-sage-500/60" />
        <Sparkles className="floating-element absolute top-1/2 right-1/6 w-5 h-5 text-warm-gold/40" />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center shadow-2xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-warm-gold/20 to-sage-300/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-sage-800 leading-tight"
            >
              Les Sens de{' '}
              <span className="text-transparent bg-gradient-to-r from-sage-600 to-warm-gold bg-clip-text">
                l'Harmonie
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-sage-600 font-light max-w-3xl mx-auto"
            >
              Reiki • Feng Shui Tibétain • Géobiologie
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-sage-700 max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez l'harmonie parfaite entre votre être intérieur et votre environnement. 
            Laissez-vous guider vers un bien-être profond et durable à travers nos soins énergétiques.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center space-x-2 text-sage-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Troguéry, Bretagne</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact">
                Prendre Rendez-vous
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-sage-500 text-sage-700 hover:bg-sage-50 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/reiki">
                Découvrir nos Services
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}