'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: 'Louna P.',
    location: 'Lannion',
    service: 'Reiki',
    rating: 5,
    text: 'Super expérience, je recommande les yeux fermés. Plusieurs séances de Reiki faites et les résultats étaient présents. Merci à Nadia pour son professionnalisme et sa gentillesse.',
    avatar: 'LP'
  },
  {
    name: 'Nolwen G.',
    location: 'Paimpol',
    service: 'Feng Shui Tibétain, Géobiologie',
    rating: 5,
    text: 'Nadia m’a beaucoup aidé dans l’arrangement d’une pièce laissée complètement à l’abandon chez moi. Grâce à elle, j’ai aujourd’hui un endroit rien qu’à moi, un endroit qui me ressemble où je me sens bien ! Entre la géobiologie et le feng-shui tibétain, l’harmonie a été trouvée. Je la recommande vivement !',
    avatar: 'NG'
  },
  {
    name: 'Sandra P.',
    location: 'Lannion',
    service: 'Reiki',
    rating: 5,
    text: 'Merci à Nadia pour ses séances de Reiki. Je recommande vivement !',
    avatar: 'SP'
  },
];

export default function Testimonials() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Testimonials cards animation
      gsap.fromTo('.testimonial-card', {
        y: 60,
        opacity: 0,
        scale: 0.9,
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimonials-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Floating quotes animation
      gsap.to('.floating-quote', {
        y: -10,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials-container relative py-20 bg-gradient-to-b from-sage-50 to-cream overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Quote className="floating-quote absolute top-20 left-10 w-16 h-16 text-sage-200/30" />
        <Quote className="floating-quote absolute bottom-40 right-20 w-20 h-20 text-warm-gold/20" />
        <Quote className="floating-quote absolute top-1/2 left-1/4 w-12 h-12 text-sage-300/25" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-sage-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-warm-gold/10 rounded-full blur-3xl"></div>
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
            Témoignages de mes
            <span className="text-transparent bg-gradient-to-r title-color"> Clients</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Découvrez les expériences transformatrices de ceux qui m'ont fait confiance 
            pour leur bien-être.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-sage-100/50"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 title-color" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warm-gold fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-sage-700 leading-relaxed mb-6 italic text-lg">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-color rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800 title-color-underline">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center space-x-2 text-sage-600 text-sm">
                    <span>{testimonial.location}</span>
                    <span>•</span>
                    <span className="bg-color text-white px-2 py-1 rounded-full text-xs">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sage-600">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warm-gold fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9/5 - 100+ avis</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-sage-400 rounded-full"></div>
            <div className="font-medium">
              98% de clients satisfaits
            </div>
            <div className="hidden md:block w-1 h-1 bg-sage-400 rounded-full"></div>
            <div className="font-medium">
              Depuis 2009
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}