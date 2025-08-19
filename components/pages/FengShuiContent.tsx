'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Home, 
  Compass, 
  Mountain, 
  Wind, 
  Flame, 
  Droplets, 
  TreePine,
  ArrowRight,
  Users,
  Heart,
  Star,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const threeAxes = [
  {
    icon: Mountain,
    title: 'Géobiologie',
    description: 'Étude et harmonisation des énergies telluriques de votre terrain',
    details: 'Analyse des réseaux géobiologiques, détection des sources d\'eau, failles géologiques et optimisation des énergies naturelles du lieu.'
  },
  {
    icon: Home,
    title: 'Feng Shui de l\'Habitat',
    description: 'Harmonisation des espaces selon les formes et orientations',
    details: 'Application des principes du Bagua, optimisation des flux énergétiques, aménagement selon les 5 éléments et les 9 domaines de vie.'
  },
  {
    icon: Users,
    title: 'Feng Shui Humain',
    description: 'Adaptation personnalisée selon votre profil énergétique',
    details: 'Analyse de votre Ming Gua personnel, harmonisation avec votre élément dominant et optimisation selon votre date de naissance.'
  }
];

const fiveElements = [
  { 
    icon: TreePine, 
    name: 'Bois', 
    color: 'from-green-400 to-green-600',
    qualities: 'Croissance, créativité, flexibilité',
    areas: 'Est, Sud-Est'
  },
  { 
    icon: Flame, 
    name: 'Feu', 
    color: 'from-red-400 to-red-600',
    qualities: 'Énergie, passion, transformation',
    areas: 'Sud'
  },
  { 
    icon: Mountain, 
    name: 'Terre', 
    color: 'from-yellow-400 to-yellow-600',
    qualities: 'Stabilité, ancrage, nutrition',
    areas: 'Centre, Nord-Est, Sud-Ouest'
  },
  { 
    icon: Wind, 
    name: 'Métal', 
    color: 'from-gray-400 to-gray-600',
    qualities: 'Précision, organisation, communication',
    areas: 'Ouest, Nord-Ouest'
  },
  { 
    icon: Droplets, 
    name: 'Eau', 
    color: 'from-blue-400 to-blue-600',
    qualities: 'Fluidité, sagesse, introspection',
    areas: 'Nord'
  }
];

const LotusIcon = (props: { className?: string }) => (
  <Image src="/lotus.png" alt="Lotus" width={24} height={24} className={props.className} />
);

const baguaDomains = [
  { name: 'Carrière', icon: Zap, position: 'Nord' },
  { name: 'Savoir', icon: Star, position: 'Nord-Est' },
  { name: 'Famille', icon: Users, position: 'Est' },
  { name: 'Richesse', icon: LotusIcon, position: 'Sud-Est' },
  { name: 'Reconnaissance', icon: Flame, position: 'Sud' },
  { name: 'Relations', icon: Heart, position: 'Sud-Ouest' },
  { name: 'Créativité', icon: TreePine, position: 'Ouest' },
  { name: 'Mentors', icon: Mountain, position: 'Nord-Ouest' },
  { name: 'Santé', icon: Compass, position: 'Centre' }
];

export default function FengShuiContent() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.fengshui-hero', {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Three axes animation
      gsap.fromTo('.axis-card', {
        y: 60,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.axes-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Elements circle animation
      gsap.fromTo('.element-item', {
        scale: 0.8,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.elements-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Floating elements
      gsap.to('.floating-feng-shui', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-sage-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-40 h-40 bg-warm-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-sage-200/30 rounded-full blur-3xl"></div>
          <Home className="floating-feng-shui absolute top-1/4 left-[16%] w-6 h-6 text-sage-400/60" />
          <Compass className="floating-feng-shui absolute bottom-1/3 right-1/4 w-8 h-8 text-warm-gold/50" />
          <Mountain className="floating-feng-shui absolute top-2/3 left-1/3 w-7 h-7 text-sage-500/60" />
        </div>

        <div className="fengshui-hero relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-warm-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                <Compass className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-sage-800 leading-tight title-color">
              Le <span className="text-transparent bg-gradient-to-r from-warm-gold to-yellow-600 bg-clip-text">Feng Shui Tibétain</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sage-600 font-light">
              L'Art de l'Harmonisation de l'Habitat
            </p>

            <p className="text-lg text-sage-700 max-w-3xl mx-auto leading-relaxed">
              Découvrez cette sagesse ancestrale adaptée à nos maisons occidentales pour 
              créer un environnement harmonieux qui soutient votre bien-être et votre épanouissement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Feng Shui Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 title-color">
                Qu'est-ce que le Feng Shui ?
              </h2>
              <div className="space-y-4 text-sage-700 leading-relaxed text-lg">
                <p>
                  Le Feng Shui est un <strong>art millénaire chinois</strong> qui étudie les flux 
                  d'énergie vitale ("Chi") dans l\'environnement. Son principe fondamental repose 
                  sur l'harmonisation entre l\'homme et son habitat pour favoriser le bien-être, 
                  la prospérité et l'équilibre.
                </p>
                <p>
                  Comparable à <em>l'acupuncture pour la maison</em>, le Feng Shui identifie 
                  et optimise les points énergétiques de votre espace de vie pour créer 
                  une circulation harmonieuse des énergies bénéfiques.
                </p>
                <p>
                  Cette pratique ancestrale considère que notre environnement influence 
                  directement notre santé, nos relations, notre créativité et notre réussite 
                  dans tous les domaines de la vie.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-warm-gold/10 to-yellow-100 rounded-3xl p-8 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Wind className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-sage-800 title-color">
                    Le Chi - Énergie Vitale
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    Le Chi est l'énergie vitale qui circule dans tous les espaces. 
                    Un Chi harmonieux favorise la santé, le bonheur et la prospérité, 
                    tandis qu'un Chi perturbé peut créer des déséquilibres.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tibetan Feng Shui Specificity */}
      <section className="py-16 bg-gradient-to-b from-sage-50 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Qu'est-ce que le Feng Shui Tibétain ?
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Une approche holistique et adaptée qui intègre la géobiologie, 
              la créativité et le symbolisme pour nos habitations occidentales.
            </p>
          </motion.div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="space-y-8 text-sage-700 leading-relaxed text-lg">
              <p>
                Le <strong>Feng Shui Tibétain</strong> est une adaptation moderne et holistique 
                des principes traditionnels du Feng Shui, spécialement conçue pour s'harmoniser 
                avec l'architecture et le mode de vie occidental.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sage-800 mb-2">Géobiologie</h4>
                  <p className="text-sm">Harmonisation des énergies telluriques</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image src="/lotus.png" alt="Lotus" width={24} height={24} className="w-6 h-6 object-contain" />
                  </div>
                  <h4 className="font-semibold text-sage-800 mb-2">Créativité</h4>
                  <p className="text-sm">Solutions personnalisées et innovantes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sage-800 mb-2">Symbolisme</h4>
                  <p className="text-sm">Intégration de symboles harmonisants</p>
                </div>
              </div>

              <p>
                Cette approche reconnaît que chaque lieu et chaque personne sont uniques, 
                nécessitant une analyse personnalisée qui va au-delà des règles traditionnelles 
                pour créer un environnement vraiment harmonieux et adapté à votre style de vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Axes Section */}
      <section className="axes-section py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Les 3 Axes du Feng Shui Tibétain
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Une approche complète qui harmonise votre terrain, votre habitat 
              et votre énergie personnelle pour un équilibre optimal.
            </p>
            <div className="mt-6 bg-warm-gold/20 rounded-full px-6 py-2 inline-flex items-center">
              <Mountain className="w-5 h-5 mr-2 text-sage-700" />
              <span className="text-sage-700 font-medium">
                Expertise géobiologique préalable obligatoire
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {threeAxes.map((axis, index) => (
              <Card key={index} className="axis-card bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <axis.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-sage-800 mb-4 title-color">
                    {axis.title}
                  </h3>
                  <p className="text-sage-600 font-medium mb-4">
                    {axis.description}
                  </p>
                  <p className="text-sage-700 leading-relaxed text-sm">
                    {axis.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Five Elements Section */}
      <section className="elements-section py-20 bg-gradient-to-b from-cream to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Les Cinq Éléments
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Système fondamental du Feng Shui qui équilibre les énergies 
              de votre habitat selon les forces naturelles universelles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {fiveElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="element-item text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${element.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                  <element.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-sage-800 mb-2 title-color">
                  {element.name}
                </h3>
                <p className="text-sage-600 text-sm mb-2">
                  {element.qualities}
                </p>
                <div className="text-xs text-sage-500 bg-sage-100 rounded-full px-3 py-1">
                  {element.areas}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-4 title-color">
                Équilibre Dynamique
              </h3>
              <p className="text-sage-600 leading-relaxed">
                L'art du Feng Shui consiste à créer un équilibre harmonieux entre ces cinq éléments 
                dans votre espace de vie. Chaque élément nourrit le suivant dans un cycle créatif 
                naturel, générant une énergie positive et régénératrice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bagua Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Le Bagua - Les 9 Domaines de Vie
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Outil essentiel du Feng Shui qui divise l'espace en neuf zones énergétiques 
              correspondant aux différents aspects de votre existence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {baguaDomains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <domain.icon className="w-8 h-8 text-sage-600 mx-auto mb-3" />
                <h4 className="font-playfair font-bold text-sage-800 text-sm mb-1 title-color">
                  {domain.name}
                </h4>
                <p className="text-xs text-sage-500">
                  {domain.position}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto"
          >
            <div className="text-center space-y-4">
              <Compass className="w-12 h-12 text-sage-600 mx-auto" />
              <h3 className="text-xl font-playfair font-bold text-sage-800 title-color">
                Application Personnalisée du Bagua
              </h3>
              <p className="text-sage-600 leading-relaxed">
                Chaque zone du Bagua correspond à un aspect de votre vie : carrière, relations, 
                santé, richesse, etc. En harmonisant ces zones selon les principes du Feng Shui 
                Tibétain, nous optimisons les énergies favorables à votre épanouissement personnel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* House Shapes Section */}
      <section className="py-16 bg-gradient-to-b from-sage-50 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              L'Importance des Formes
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              La forme de votre maison influence directement les flux énergétiques et 
              nécessite une analyse spécifique pour optimiser l'harmonie de l'habitat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-playfair font-bold text-sage-800 title-color">
                Analyse des Formes d'Habitat
              </h3>
              <div className="space-y-4 text-sage-700 leading-relaxed">
                <p>
                  Chaque forme architecturale génère des flux énergétiques spécifiques. 
                  Les maisons carrées favorisent la stabilité, les formes rectangulaires 
                  dynamisent certains secteurs, tandis que les formes irrégulières 
                  nécessitent des corrections énergétiques particulières.
                </p>
                <p>
                  L'orientation, les ouvertures, les angles et les extensions sont autant 
                  d'éléments analysés pour créer une circulation harmonieuse du Chi 
                  dans votre espace de vie.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-playfair font-bold text-sage-800 title-color">
                  Corrections Harmonisantes
                </h4>
                <p className="text-sage-600 leading-relaxed">
                  Grâce à des techniques spécifiques (couleurs, matériaux, objets symboliques, 
                  aménagements), nous compensons les déséquilibres énergétiques pour créer 
                  un environnement optimal.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sage-600 to-sage-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">
              Transformez votre habitat en sanctuaire d'harmonie
            </h2>
            <p className="text-xl text-sage-100 leading-relaxed">
              Découvrez comment le Feng Shui Tibétain peut révolutionner votre bien-être 
              et celui de votre famille en optimisant les énergies de votre maison.
            </p>
            
            <div className="bg-warm-gold/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-sage-100">
                <Mountain className="w-5 h-5" />
                <span className="font-medium">
                  Expertise géobiologique incluse dans toute consultation Feng Shui
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-warm-gold hover:bg-yellow-600 text-sage-900 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/contact" className="flex items-center">
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sage-200 text-sage-400 hover:bg-sage-200 hover:text-sage-900 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Link href="/geobiologie">
                  En savoir plus sur la Géobiologie
                </Link>
              </Button>
            </div>

            <p className="text-sage-200 text-lg">
              Consultation personnalisée • Devis gratuit et sans engagement
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}