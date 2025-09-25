'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Heart, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Leaf, 
  Star,
  Zap,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  { icon: Heart, title: 'Réduction du stress', description: 'Diminution significative des tensions physiques et mentales' },
  { icon: Leaf, title: 'Relaxation profonde', description: 'État de détente favorisant la récupération naturelle' },
  { icon: Star, title: 'Équilibre émotionnel', description: 'Harmonisation des émotions et du bien-être intérieur' },
  { icon: Zap, title: 'Revitalisation', description: 'Boost d\'énergie et amélioration de la vitalité générale' },
  { icon: Shield, title: 'Renforcement immunitaire', description: 'Soutien du système immunitaire naturel' },
  { icon: Users, title: 'Amélioration relationnelle', description: 'Meilleure capacité d\'interaction sociale et familiale' },
];

const sessionProcess = [
  {
    step: '1',
    title: 'Accueil et Écoute',
    description: 'Échange sur vos besoins et attentes dans un cadre bienveillant',
    duration: '10 min'
  },
  {
    step: '2',
    title: 'Préparation',
    description: 'Installation confortable sur la table de soin, musique douce',
    duration: '5 min'
  },
  {
    step: '3',
    title: 'Soin Reiki',
    description: 'Transmission d\'énergie par imposition des mains sur les centres énergétiques',
    duration: '40 min'
  },
  {
    step: '4',
    title: 'Retour et Conseils',
    description: 'Partage des ressentis et conseils personnalisés pour prolonger les bienfaits',
    duration: '5 min'
  },
];

const pricing = [
  {
    category: 'Adulte',
    price: '55€',
    duration: '1h',
    features: ['Séance complète', 'Conseils personnalisés', 'Suivi inclus']
  },
  {
    category: 'Enfants (jusque 13 ans)',
    price: '45€',
    duration: '30-45min',
    features: ['Séance adaptée', 'Approche bienveillante', 'Conseils personnalisés']
  },
  {
    category: 'Séance à distance',
    price: '50€',
    duration: '45min',
    features: ['Efficacité prouvée', 'Confort de chez soi', 'Échange téléphonique']
  },
];

export default function ReikiContent() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.reiki-hero', {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Benefits cards animation
      gsap.fromTo('.benefit-card', {
        y: 60,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.benefits-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Process steps animation
      gsap.fromTo('.process-step', {
        x: -30,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.process-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Floating elements
      gsap.to('.floating-sparkle', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5,
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
          <div className="absolute top-20 left-10 w-40 h-40 bg-sage-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-warm-gold/20 rounded-full blur-3xl"></div>
          <Image src="/lotus.png" alt="Lotus" width={24} height={24} className="floating-sparkle absolute top-1/4 right-[16%] opacity-60" />
          <Heart className="floating-sparkle absolute bottom-1/3 left-1/4 w-8 h-8 text-warm-gold/50" />
        </div>

        <div className="reiki-hero relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white border-2 border-color rounded-full flex items-center justify-center shadow-2xl">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-sage-800 leading-tight title-color">
              Le <span>Reiki</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 font-light">
              Soin énergétique japonais
            </p>

            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Découvrez cette méthode ancestrale japonaise qui utilise l'énergie universelle 
              pour favoriser la guérison naturelle, réduire le stress et harmoniser votre être.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Reiki Section */}
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
                Qu'est-ce que le Reiki ?
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed text-lg">
                <p>
                  Le Reiki est un <strong className='text-gray-500'>soin énergétique japonais</strong> développé 
                  au début du XXe siècle par Mikao Usui. Cette pratique douce et non-invasive 
                  utilise l'imposition des mains pour canaliser l'énergie.
                </p>
                <p>
                  Le terme "Reiki" signifie littéralement <em>"énergie de l'esprit universel"</em> 
                  (Rei = universel, Ki = énergie vitale). Cette technique favorise l'autoguérison 
                  en restaurant l'équilibre énergétique naturel du corps.
                </p>
                <p className='font-bold text-gray-500'>
                Le Reiki ne se substitue en aucun cas à un suivi ou un
                traitement médical, mais en sera un excellent complément. Aucun diagnostic ne sera
                posé.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl p-8 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-color text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-sage-800 title-color">
                    Reconnaissance Internationale
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                  Reconnu et utilisé dans de nombreux hôpitaux aux États-Unis, au Royaume-Uni, 
                  en Allemagne et en Suisse, le Reiki s'impose comme une approche complémentaire 
                  efficace dans le domaine de la santé et du bien-être.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-20 bg-gradient-to-b from-sage-50 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Les Bienfaits du Reiki
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Le Reiki agit sur tous les plans de l'être : physique, émotionnel, 
              mental et spirituel pour un bien-être global et durable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="benefit-card bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-color text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-sage-800 mb-4 title-color">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Le Reiki pour qui ?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16  rounded-full  bg-color text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 bg-color text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-sage-800 mb-4 title-color">
                Pour Tous les Âges
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Du bébé aux personnes âgées, le Reiki s'adapte à chacun avec une 
                approche douce et respectueuse des besoins individuels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-color text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-sage-800 mb-4 title-color">
                Complémentaire
              </h3>
              <p className="text-gray-500 leading-relaxed">
              Le Reiki ne remplace jamais un traitement médical maisen sera une excellente
              aide complémentaire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-color text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-sage-800 mb-4 title-color">
                Sans Contre-indications
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Technique entièrement naturelle et non-invasive, le Reiki ne présente 
                aucun risque et peut être pratiqué en toute sécurité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Process Section */}
      <section className="process-section py-20 bg-gradient-to-b from-cream to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Comment se déroule une séance Reiki ?
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Chaque séance est adaptée à vos besoins dans un environnement 
              chaleureux et apaisant favorisant la détente profonde.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sessionProcess.map((step, index) => (
              <div key={index} className="process-step">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-color rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-playfair font-bold text-sage-800 title-color">
                        {step.title}
                      </h3>
                      <span className="text-sm bg-color text-white px-3 py-1 rounded-full font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
              <Clock className="w-12 h-12 title-color mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold text-gray-500 mb-4">
                Séances à Distance
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Le Reiki à distance est tout aussi efficace qu'en présentiel. 
                L'énergie n'ayant pas de limites spatiales, vous bénéficiez des mêmes 
                bienfaits depuis le confort de votre domicile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 title-color">
              Tarifs des Séances Reiki
            </h2>
            <p className="text-lg text-gray-500">
              Des tarifs adaptés à tous les âges pour un accompagnement personnalisé
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {pricing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-playfair font-bold text-sage-800 mb-2">
                      {item.category}
                    </h3>
                    <div className="text-3xl font-bold title-color mb-2">
                      {item.price}
                    </div>
                    <div className="text-gray-500 text-sm mb-4">
                      {item.duration}
                    </div>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-sage-50 to-sage-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold title-color">
              Prêt à découvrir les bienfaits du Reiki ?
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Offrez-vous un moment de détente profonde et de reconnexion 
              à votre énergie vitale naturelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-color text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/contact" className="flex items-center">
                  Réserver ma Séance
                  <ArrowRight className="w-5 h-5 ml-2 text-white" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-color text-gray-500 hover:bg-color hover:scale-105 transition-all duration-200 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Link href="/contact">
                  Poser une Question
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}