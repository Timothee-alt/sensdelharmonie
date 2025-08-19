'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Send,
  Heart,
  Star,
  Users,
  Baby,
  Compass,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: '6, Lotissement des 4 Vents\n22450 Troguéry, France',
    action: 'Voir sur la carte'
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '06 75 44 55 82',
    action: 'Appeler maintenant'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'lessensdelharmonie@gmail.com',
    action: 'Envoyer un email'
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lundi à Samedi\n9h00 - 19h00\nSur rendez-vous uniquement',
    action: ''
  }
];

const LotusIcon = (props: { className?: string }) => (
  <Image src="/lotus.png" alt="Lotus" width={24} height={24} className={props.className} />
);

const reikiPricing = [
  { category: 'Adulte', price: '55€', duration: '1h', icon: Users, description: 'Séance complète avec conseils personnalisés' },
  { category: 'Adolescent (12-17 ans)', price: '50€', duration: '45min', icon: Star, description: 'Approche adaptée à l\'adolescence' },
  { category: 'Enfant/Bébé (0-11 ans)', price: '45€', duration: '30min', icon: Baby, description: 'Séance douce avec présence des parents' },
  { category: 'Séance à distance', price: '50€', duration: '45min', icon: LotusIcon, description: 'Efficacité prouvée depuis chez vous' },
];

const otherServices = [
  { service: 'Feng Shui Tibétain', icon: Compass, price: 'Sur devis', description: 'Expertise personnalisée selon la surface et la complexité' },
  { service: 'Géobiologie', icon: Home, price: 'Sur devis', description: 'Analyse complète du terrain et solutions correctives' },
];

export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.contact-hero', {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Contact cards animation
      gsap.fromTo('.contact-card', {
        y: 40,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.contact-info-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Pricing cards animation
      gsap.fromTo('.pricing-card', {
        y: 30,
        opacity: 0,
        scale: 0.95,
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.pricing-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Floating elements
      gsap.to('.floating-contact', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.7,
      });
    });

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
        form.reset();
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-sage-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-40 h-40 bg-warm-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-sage-200/30 rounded-full blur-3xl"></div>
          <Image src="/lotus.png" alt="Lotus" width={24} height={24} className="floating-contact absolute top-1/4 left-[16%] opacity-60" />
          <Heart className="floating-contact absolute bottom-1/3 right-1/4 w-8 h-8 text-warm-gold/50" />
          <Phone className="floating-contact absolute top-2/3 left-1/3 w-7 h-7 text-sage-500/60" />
        </div>

        <div className="contact-hero relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center shadow-2xl">
                <Phone className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-sage-800 leading-tight title-color">
              Contact <span className="text-transparent bg-gradient-to-r from-sage-600 to-warm-gold bg-clip-text">& Tarifs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sage-600 font-light">
              Prenez Rendez-vous pour Votre Bien-être
            </p>

            <p className="text-lg text-sage-700 max-w-3xl mx-auto leading-relaxed">
              Nous sommes à votre disposition pour répondre à vos questions et vous accompagner 
              dans votre démarche de mieux-être. Contactez-nous pour une première consultation gratuite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Nos Coordonnées
            </h2>
            <p className="text-lg text-sage-600">
              Situés au cœur de la Bretagne, nous vous accueillons dans un cadre apaisant
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="contact-card bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-sage-800 mb-3 title-color">
                    {info.title}
                  </h3>
                  <p className="text-sage-600 leading-relaxed whitespace-pre-line mb-4">
                    {info.content}
                  </p>
                  {info.action && (
                    <span className="text-sm text-warm-gold font-medium">
                      {info.action}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reiki Pricing */}
      <section className="pricing-section py-20 bg-gradient-to-b from-sage-50 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Tarifs des Séances Reiki
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Des tarifs adaptés à tous les âges avec un accompagnement personnalisé 
              pour chaque membre de votre famille
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reikiPricing.map((item, index) => (
              <Card key={index} className="pricing-card bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-sage-800 mb-2 title-color">
                    {item.category}
                  </h3>
                  <div className="text-2xl font-bold text-warm-gold mb-1">
                    {item.price}
                  </div>
                  <div className="text-sage-500 text-sm mb-4">
                    {item.duration}
                  </div>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-sage-100/50 rounded-3xl p-8 shadow-xl"
          >
            <div className="text-center space-y-4">
              <CheckCircle className="w-10 h-10 text-sage-600 mx-auto" />
              <h3 className="text-xl font-playfair font-bold text-sage-800 title-color">
                Toutes nos séances incluent
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-sage-600">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-sage-500" />
                  <span>Consultation préliminaire</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-sage-500" />
                  <span>Conseils personnalisés</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-sage-500" />
                  <span>Suivi post-séance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services Pricing */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Feng Shui & Géobiologie
            </h2>
            <p className="text-lg text-sage-600">
              Consultations personnalisées selon vos besoins spécifiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-warm-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-4 title-color">
                      {service.service}
                    </h3>
                    <div className="text-3xl font-bold text-sage-600 mb-4">
                      {service.price}
                    </div>
                    <p className="text-sage-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-warm-gold/10 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-sage-700 leading-relaxed">
                <strong>Consultation gratuite et sans engagement</strong> pour établir un devis 
                personnalisé selon la surface à analyser, la complexité du terrain et vos objectifs spécifiques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-cream to-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Demande de Contact
            </h2>
            <p className="text-lg text-sage-600">
              Remplissez le formulaire ci-dessous ou contactez-nous directement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        {...form.register('name')}
                        className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                        placeholder="Votre nom"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register('email')}
                        className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                        placeholder="votre@email.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone (optionnel)</Label>
                      <Input
                        id="phone"
                        {...form.register('phone')}
                        className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                        placeholder="06 12 34 56 78"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service souhaité *</Label>
                      <Select onValueChange={(value) => form.setValue('service', value)}>
                        <SelectTrigger className="border-sage-200 focus:border-sage-500 focus:ring-sage-500">
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reiki-adulte">Reiki - Adulte</SelectItem>
                          <SelectItem value="reiki-adolescent">Reiki - Adolescent</SelectItem>
                          <SelectItem value="reiki-enfant">Reiki - Enfant/Bébé</SelectItem>
                          <SelectItem value="reiki-distance">Reiki à distance</SelectItem>
                          <SelectItem value="feng-shui">Feng Shui Tibétain</SelectItem>
                          <SelectItem value="geobiologie">Géobiologie</SelectItem>
                          <SelectItem value="information">Demande d'information</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.service && (
                        <p className="text-red-500 text-sm">{form.formState.errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      {...form.register('message')}
                      className="border-sage-200 focus:border-sage-500 focus:ring-sage-500 min-h-[120px]"
                      placeholder="Décrivez vos besoins, vos attentes ou vos questions..."
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      'Envoi en cours...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer ma Demande
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 title-color">
              Nous Trouver
            </h2>
            <p className="text-lg text-sage-600">
              Situés à Troguéry, au cœur des Côtes d'Armor en Bretagne
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl p-8 shadow-xl text-center"
          >
            <MapPin className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-4 title-color">
              6, Lotissement des 4 Vents
            </h3>
            <p className="text-lg text-sage-600 mb-6">
              22450 Troguéry, Bretagne, France
            </p>
            <div className="bg-white/70 rounded-2xl p-4 text-sm text-sage-600 max-w-2xl mx-auto">
              <p className="mb-2">
                <strong>Accès :</strong> Facilement accessible depuis Paimpol (8km), Lannion (25km) et Saint-Brieuc (45km)
              </p>
              <p>
                <strong>Parking :</strong> Places de stationnement disponibles devant le cabinet
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-sage-600 to-sage-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white title-color">
              Prêt à commencer votre transformation ?
            </h2>
            <p className="text-xl text-sage-100 leading-relaxed">
              Une première consultation gratuite vous attend pour découvrir 
              le service le mieux adapté à vos besoins.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-warm-gold hover:bg-yellow-600 text-sage-900 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <a href="tel:+33675445582" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler Maintenant
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sage-200 text-sage-400 hover:bg-sage-200 hover:text-sage-900 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <a href="mailto:lessensdelharmonie@gmail.com" className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyer un Email
                </a>
              </Button>
            </div>

            <div className="bg-sage-500/30 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sage-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Consultation gratuite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Réponse rapide</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}