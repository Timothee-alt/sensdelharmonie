'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Compass, 
  Shield, 
  Zap, 
  Droplets, 
  Mountain, 
  Radio,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Home,
  Leaf,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const harmfulFactors = [
  {
    icon: Droplets,
    title: 'Cours d\'eau souterrains',
    description: 'Veines d\'eau souterraines qui génèrent des champs électromagnétiques perturbateurs',
    effects: ['Troubles du sommeil', 'Fatigue chronique', 'Stress cellulaire']
  },
  {
    icon: Mountain,
    title: 'Failles géologiques',
    description: 'Fractures dans le sous-sol qui émettent des radiations telluriques',
    effects: ['Déséquilibres énergétiques', 'Malaises inexpliqués', 'Tensions nerveuses']
  },
  {
    icon: Radio,
    title: 'Pollution électromagnétique',
    description: 'Ondes et champs électromagnétiques artificiels (WiFi, antennes, lignes haute tension)',
    effects: ['Perturbations du système nerveux', 'Troubles de concentration', 'Affaiblissement immunitaire']
  },
  {
    icon: Zap,
    title: 'Réseaux géobiologiques',
    description: 'Grilles énergétiques naturelles (Hartmann, Curry) dont les croisements peuvent être néfastes',
    effects: ['Points de stress géopathique', 'Déséquilibres énergétiques', 'Zones d\'inconfort']
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Protection de la santé',
    description: 'Identification et neutralisation des zones géopathogènes pour préserver votre bien-être'
  },
  {
    icon: Home,
    title: 'Optimisation de l\'habitat',
    description: 'Aménagement optimal des espaces de vie selon les énergies favorables du lieu'
  },
  {
    icon: Activity,
    title: 'Amélioration du sommeil',
    description: 'Placement harmonieux des lits pour un repos réparateur et régénérateur'
  },
  {
    icon: Leaf,
    title: 'Équilibre énergétique',
    description: 'Harmonisation globale des énergies telluriques et cosmiques de votre environnement'
  }
];

const analysisProcess = [
  {
    step: '1',
    title: 'Analyse préliminaire',
    description: 'Étude des plans, historique du terrain et des problématiques observées',
    tools: 'Documentation, plans cadastraux, enquête'
  },
  {
    step: '2',
    title: 'Détection sur site',
    description: 'Localisation des réseaux, cours d\'eau et failles avec instruments de précision',
    tools: 'Baguettes, pendule, antenne de Lecher, magnétomètre'
  },
  {
    step: '3',
    title: 'Analyse énergétique',
    description: 'Mesure de l\'intensité et de la nature des perturbations géobiologiques',
    tools: 'Détecteurs spécialisés, analyse vibratoire'
  },
  {
    step: '4',
    title: 'Solutions correctives',
    description: 'Proposition d\'aménagements et de corrections pour neutraliser les nuisances',
    tools: 'Conseils d\'aménagement, dispositifs harmonisants'
  }
];

export default function GeobiologyContent() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.geobiology-hero', {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Factors cards animation
      gsap.fromTo('.factor-card', {
        y: 60,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.factors-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Process steps animation
      gsap.fromTo('.process-step', {
        x: -50,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.process-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Floating elements
      gsap.to('.floating-geo', {
        y: -25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 1,
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
          <div className="absolute top-20 left-10 w-40 h-40 bg-sage-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-warm-gold/20 rounded-full blur-3xl"></div>
          <Compass className="floating-geo absolute top-1/4 right-[16%] w-6 h-6 text-sage-400/60" />
          <Mountain className="floating-geo absolute bottom-1/3 left-1/4 w-8 h-8 text-sage-500/50" />
          <Droplets className="floating-geo absolute top-2/3 right-1/3 w-7 h-7 text-warm-gold/40" />
        </div>

        <div className="geobiology-hero relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sage-500 to-sage-700 rounded-full flex items-center justify-center shadow-2xl">
                <Compass className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-sage-800 leading-tight">
              La <span className="text-transparent bg-gradient-to-r from-sage-600 to-sage-800 bg-clip-text">Géobiologie</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sage-600 font-light">
              La Médecine de l'Habitat
            </p>

            <p className="text-lg text-sage-700 max-w-3xl mx-auto leading-relaxed">
              Science qui étudie les interactions entre les êtres vivants et leur environnement 
              tellurique pour optimiser votre santé et votre bien-être dans votre lieu de vie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Geobiology Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800">
                Qu'est-ce que la Géobiologie ?
              </h2>
              <div className="space-y-4 text-sage-700 leading-relaxed text-lg">
                <p>
                  La Géobiologie est l'<strong>étude des relations entre la vie et la Terre</strong>. 
                  Elle analyse l'influence des rayonnements telluriques, des champs 
                  électromagnétiques et des phénomènes géophysiques sur le bien-être 
                  des êtres vivants.
                </p>
                <p>
                  Véritable <em>"médecine de l'habitat"</em>, elle identifie les zones 
                  géopathogènes (néfastes à la santé) et les zones favorables pour optimiser 
                  l'aménagement de votre lieu de vie et de travail.
                </p>
                <p>
                  Cette science holistique reconnaît que notre environnement immédiat 
                  influence directement notre santé physique, mentale et émotionnelle, 
                  et propose des solutions concrètes pour harmoniser ces interactions.
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
                  <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-sage-800">
                    Expertise Scientifique
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    La géobiologie moderne utilise des instruments de mesure précis 
                    couplés aux techniques traditionnelles de sourcellerie pour une 
                    analyse complète et fiable de votre environnement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Harmful Factors Section */}
      <section className="factors-section py-20 bg-gradient-to-b from-sage-50 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6">
              Les Facteurs Environnementaux Perturbateurs
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Identification des sources de déséquilibres énergétiques qui peuvent 
              impacter votre santé et votre bien-être au quotidien.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {harmfulFactors.map((factor, index) => (
              <Card key={index} className="factor-card bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <factor.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-playfair font-bold text-sage-800 mb-3">
                        {factor.title}
                      </h3>
                      <p className="text-sage-600 leading-relaxed mb-4">
                        {factor.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sage-700 text-sm">
                          Effets observés :
                        </h4>
                        <ul className="space-y-1">
                          {factor.effects.map((effect, idx) => (
                            <li key={idx} className="flex items-center text-sm text-sage-600">
                              <AlertTriangle className="w-3 h-3 mr-2 text-orange-500 flex-shrink-0" />
                              {effect}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Geobiology Before Feng Shui */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6">
              Pourquoi la Géobiologie avant le Feng Shui ?
            </h2>
          </motion.div>

          <div className="bg-gradient-to-br from-warm-gold/10 to-yellow-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-warm-gold rounded-full flex items-center justify-center shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="flex-1 space-y-4 text-sage-700 leading-relaxed text-lg">
                <p>
                  <strong>La géobiologie est un prérequis indispensable</strong> à toute expertise 
                  Feng Shui. Il est impossible d'harmoniser efficacement un espace qui présente 
                  des nuisances géobiologiques non traitées.
                </p>
                <p>
                  Les perturbations telluriques (cours d'eau souterrains, failles, réseaux) 
                  créent des déséquilibres énergétiques majeurs qui annulent les bénéfices 
                  des corrections Feng Shui.
                </p>
                <p className="font-medium text-sage-800">
                  C'est pourquoi toute intervention Feng Shui commence systématiquement 
                  par une analyse géobiologique approfondie de votre terrain et de votre habitat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-cream to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6">
              Les Bénéfices de l'Expertise Géobiologique
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Une analyse géobiologique complète transforme votre habitat en un 
              environnement favorable à votre santé et à votre épanouissement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-sage-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Process Section */}
      <section className="process-section py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6">
              Processus d'Analyse Géobiologique
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Une méthodologie rigoureuse combinant techniques traditionnelles 
              et instruments modernes pour une expertise complète de votre environnement.
            </p>
          </motion.div>

          <div className="space-y-8">
            {analysisProcess.map((step, index) => (
              <div key={index} className="process-step">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sage-600 leading-relaxed text-lg mb-4">
                          {step.description}
                        </p>
                        <div className="bg-sage-50 rounded-2xl p-4">
                          <h4 className="font-semibold text-sage-700 mb-2">
                            Outils et méthodes :
                          </h4>
                          <p className="text-sage-600 text-sm">
                            {step.tools}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
            <div className="bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
              <CheckCircle className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-4">
                Rapport Détaillé et Solutions Concrètes
              </h3>
              <p className="text-sage-600 leading-relaxed text-lg">
                À l'issue de l'expertise, vous recevez un rapport complet avec cartographie 
                précise des perturbations détectées et recommandations personnalisées pour 
                optimiser votre habitat. Des solutions de corrections durables vous sont proposées.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Impact Section */}
      <section className="py-16 bg-gradient-to-b from-sage-50 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800">
                Impact sur la Santé et le Bien-être
              </h2>
              <div className="space-y-4 text-sage-700 leading-relaxed text-lg">
                <p>
                  Les perturbations géobiologiques peuvent affecter notre organisme 
                  de multiples façons : troubles du sommeil, fatigue chronique, stress 
                  inexpliqué, baisse des défenses immunitaires, difficultés de concentration.
                </p>
                <p>
                  Passer 6 à 8 heures par nuit sur une zone géopathogène peut engendrer 
                  à long terme des déséquilibres importants. C'est pourquoi l'emplacement 
                  du lit est particulièrement crucial dans une analyse géobiologique.
                </p>
              </div>
              
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                <h4 className="font-playfair font-bold text-sage-800 mb-3">
                  Signes d'alerte fréquents :
                </h4>
                <ul className="space-y-2">
                  {[
                    'Sommeil non réparateur malgré une durée suffisante',
                    'Réveils nocturnes fréquents vers 3h du matin',
                    'Fatigue persistante au réveil',
                    'Nervosité, irritabilité sans cause apparente',
                    'Difficulté à récupérer après une maladie'
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start text-sage-600">
                      <AlertTriangle className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-warm-gold/20 to-yellow-100 rounded-3xl p-8 shadow-xl text-center">
                <Activity className="w-16 h-16 text-sage-600 mx-auto mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-4">
                  Optimisation du Lieu de Repos
                </h3>
                <p className="text-sage-600 leading-relaxed text-lg mb-6">
                  L'expertise géobiologique permet d'identifier les zones les plus 
                  favorables pour placer votre lit et créer un environnement de repos optimal.
                </p>
                <div className="bg-white/70 rounded-2xl p-4">
                  <h4 className="font-semibold text-sage-800 mb-2">Bénéfices d'un placement optimal :</h4>
                  <ul className="text-sm text-sage-600 space-y-1">
                    <li>✓ Sommeil profond et réparateur</li>
                    <li>✓ Réveil naturel et énergisant</li>
                    <li>✓ Meilleure résistance aux maladies</li>
                    <li>✓ Équilibre nerveux et émotionnel</li>
                  </ul>
                </div>
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
              Optimisez votre environnement de vie
            </h2>
            <p className="text-xl text-sage-100 leading-relaxed">
              Découvrez les secrets énergétiques de votre habitat et transformez 
              votre lieu de vie en un sanctuaire de santé et de bien-être.
            </p>
            
            <div className="bg-warm-gold/20 rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sage-100">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium text-center md:text-left">
                  Analyse géobiologique complète • Rapport détaillé • Solutions personnalisées
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
                  Demander une Expertise
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sage-200 text-sage-100 hover:bg-sage-200 hover:text-sage-900 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Link href="/feng-shui">
                  Découvrir le Feng Shui Tibétain
                </Link>
              </Button>
            </div>

            <p className="text-sage-200 text-lg">
              Devis personnalisé gratuit et sans engagement
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}