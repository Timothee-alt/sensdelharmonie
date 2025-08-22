'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Users, Award, Clock, MapPin } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { icon: Users, number: '100+', label: 'Clients satisfaits' },
  { icon: Clock, number: '500+', label: 'Heures de soins' },
  { icon: Award, number: '15+', label: 'Années d\'expérience' },
  { icon: Heart, number: '98%', label: 'Taux de satisfaction' },
];

const LotusIcon = (props: { className?: string }) => (
  <Image src="/lotus.png" alt="Lotus" width={32} height={32} className={props.className} />
);

const values = [
  {
    icon: Heart,
    title: 'Bienveillance',
    description: 'Une approche douce et respectueuse de votre rythme et de vos besoins.',
  },
  {
    icon: LotusIcon,
    title: 'Harmonie',
    description: 'L\'équilibre parfait entre votre être intérieur et votre environnement.',
  },
  {
    icon: Users,
    title: 'Écoute',
    description: 'Un accompagnement personnalisé adapté à votre situation unique.',
  },
];

export default function About() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats animation
      gsap.fromTo('.stat-item', {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      // Values cards animation
      gsap.fromTo('.value-card', {
        scale: 0.8,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.values-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-cream to-sage-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-warm-gold/15 rounded-full blur-3xl"></div>
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
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-color mb-6 title-color">
            À Propos de
            <span className="bg-gradient-to-r text-color bg-clip-text"> ma Mission</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Basé à Troguéry en Bretagne, je vous accompagne dans votre quête d'harmonie 
            et de bien-être à travers des pratiques ancestrales et modernes.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair font-bold  title-color">
              Mon Histoire
            </h3>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Les Sens de l'Harmonie est né d'une passion profonde pour les arts énergétiques 
                et la conviction que chacun mérite de vivre en harmonie avec son environnement.
              </p>
              <p>
                Notre approche holistique combine trois disciplines complémentaires : 
                le Reiki pour l'équilibre énergétique personnel, le Feng Shui Tibétain 
                pour l'harmonisation de votre habitat, et la Géobiologie pour optimiser 
                les énergies de votre lieu de vie.
              </p>
              <p>
                Installés dans le cadre paisible de Troguéry en Bretagne, nous accueillons 
                chaque personne avec bienveillance et respect, dans un environnement 
                propice à la détente et le bien-être.
              </p>
            </div>
          </motion.div>

          {/* Location & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Mon Espace de Soin
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-color rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800 mb-2 title-color-underline">Adresse</h4>
                  <p className="text-gray-500 leading-relaxed">
                    6, Lotissement des 4 Vents<br />
                    22450 Troguéry, France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-color rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800 mb-2 title-color-underline">Environnement</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Un espace chaleureux et apaisant, conçu pour favoriser 
                    la détente et l'ouverture énergétique dans un cadre naturel préservé.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-color rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800 mb-2 title-color-underline">Horaires</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Lundi à Samedi : 9h00 - 19h00<br />
                    Sur rendez-vous uniquement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="stats-container mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="w-16 h-16 bg-color rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-playfair font-bold text-sage-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-sage-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="values-container">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-playfair font-bold text-sage-800 text-center mb-12 title-color"
          >
            Mes Valeurs
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card text-center">
                <div className="w-16 h-16  bg-color rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-playfair font-bold text-gray-600 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}