'use client';

import { motion } from 'framer-motion';
import { Shield, Database, Eye, Lock, Users, Mail, Phone, Calendar, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-sage-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-40 h-40 bg-warm-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-sage-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-color rounded-full flex items-center justify-center shadow-2xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight title-color">
              Politique de Confidentialité
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 font-light">
              Protection de vos Données Personnelles
            </p>

            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Conformément au RGPD (Règlement Général sur la Protection des Données) n°2016/679 du 27 avril 2016.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6 title-color">
                  Introduction
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>
                    La présente politique de confidentialité a pour objectif de vous informer sur la manière dont Les Sens de l'Harmonie traite vos données personnelles collectées via le site web <strong>lessensdelharmonie.fr</strong>.
                  </p>

                  <p>
                    Nous attachons une importance particulière au respect de votre vie privée et à la protection de vos données personnelles. Cette politique détaille les pratiques de collecte, d'utilisation et de protection de vos informations.
                  </p>

                  <p className="text-sm text-gray-500 mt-4">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Responsable du traitement */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Responsable du traitement des données
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Le responsable du traitement de vos données personnelles est :
                  </p>

                  <div className="bg-sage-50 p-4 rounded-lg">
                    <p>
                      <strong>Les Sens de l'Harmonie</strong><br />
                      Entreprise individuelle<br />
                      6, Lotissement des 4 Vents<br />
                      22450 Troguéry<br />
                      France
                    </p>
                    <p className="mt-2">
                      <strong>Contact :</strong><br />
                      Email : lessensdelharmonie@gmail.com<br />
                      Téléphone : 06 75 44 55 82
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Données collectées */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Données personnelles collectées
                  </h2>
                </div>

                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-color">Formulaire de contact</h3>
                    <p>Via le formulaire de contact, nous collectons les données suivantes :</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone (optionnel)</li>
                      <li>Service souhaité</li>
                      <li>Message détaillé</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-color">Données de navigation</h3>
                    <p>De manière automatique, nous pouvons collecter :</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages consultées</li>
                      <li>Durée de visite</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      Ces données sont collectées uniquement à des fins statistiques et pour améliorer l'expérience utilisateur.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Finalité du traitement */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Finalité du traitement des données
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>Vos données personnelles sont traitées pour les finalités suivantes :</p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Répondre à vos demandes :</strong> Traitement de votre demande de contact, devis ou réservation
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Communication :</strong> Vous recontacter pour préciser votre demande ou vous proposer des services adaptés
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Amélioration du service :</strong> Analyse des demandes pour améliorer nos prestations
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Base légale */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6 title-color">
                  Base légale du traitement
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Le traitement de vos données personnelles repose sur les bases légales suivantes :
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Votre consentement :</strong> En soumettant le formulaire de contact, vous consentez au traitement de vos données
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>L'intérêt légitime :</strong> Répondre à vos demandes et améliorer nos services
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Durée de conservation */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Durée de conservation des données
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>Les données personnelles sont conservées pendant :</p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>3 ans maximum :</strong> Pour les données de contact permettant de répondre à vos demandes
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>13 mois :</strong> Pour les données de navigation (adresse IP) conformément à la réglementation
                      </div>
                    </li>
                  </ul>

                  <p>
                    Au-delà de ces délais, les données sont supprimées ou anonymisées de manière irréversible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Partage des données */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6 title-color">
                  Partage et transfert des données
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Les Sens de l'Harmonie s'engage à ne pas vendre, louer ou céder vos données personnelles à des tiers.
                  </p>

                  <p>Vos données peuvent être partagées uniquement dans les cas suivants :</p>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Avec des prestataires techniques (hébergement, maintenance) sous contrat de confidentialité</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Si requis par la loi ou une décision judiciaire</span>
                    </li>
                  </ul>

                  <p className="bg-warm-gold/10 p-4 rounded-lg">
                    <strong>Note :</strong> Vos données sont hébergées en Europe et ne sont pas transférées hors de l'Union Européenne.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sécurité des données */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Sécurité des données
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :</p>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Chiffrement des données en transit (HTTPS)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Accès sécurisé aux données avec authentification</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Mises à jour régulières de sécurité</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Sauvegardes sécurisées</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Vos droits */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Vos droits RGPD
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-sage-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Eye className="w-5 h-5 text-color mr-2" />
                        <strong className="text-color">Droit d'accès</strong>
                      </div>
                      <p className="text-sm">Consulter vos données personnelles que nous détenons</p>
                    </div>

                    <div className="bg-sage-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Database className="w-5 h-5 text-color mr-2" />
                        <strong className="text-color">Droit de rectification</strong>
                      </div>
                      <p className="text-sm">Corriger des données inexactes ou incomplètes</p>
                    </div>

                    <div className="bg-sage-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Trash2 className="w-5 h-5 text-color mr-2" />
                        <strong className="text-color">Droit à l'effacement</strong>
                      </div>
                      <p className="text-sm">Demander la suppression de vos données</p>
                    </div>

                    <div className="bg-sage-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Lock className="w-5 h-5 text-color mr-2" />
                        <strong className="text-color">Droit à la limitation</strong>
                      </div>
                      <p className="text-sm">Limiter le traitement de vos données</p>
                    </div>
                  </div>

                  <div className="bg-warm-gold/10 p-4 rounded-lg mt-6">
                    <p>
                      <strong>Pour exercer vos droits, contactez-nous :</strong><br />
                      Email : lessensdelharmonie@gmail.com<br />
                      Téléphone : 06 75 44 55 82<br />
                      Adresse : 6, Lotissement des 4 Vents, 22450 Troguéry
                    </p>
                  </div>

                  <p className="text-sm">
                    Vous avez également le droit d'introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" className="text-color hover:underline">www.cnil.fr</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6 title-color">
                  Cookies et technologies similaires
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>Ce site utilise uniquement des cookies techniques essentiels :</p>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span><strong>Cookies de session :</strong> Nécessaires au bon fonctionnement du formulaire de contact</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-color rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span><strong>Cookies de sécurité :</strong> Protection contre les attaques CSRF</span>
                    </li>
                  </ul>

                  <p className="bg-sage-50 p-4 rounded-lg">
                    <strong>Information importante :</strong> Aucun cookie de suivi, de publicité ou d'analyse n'est utilisé sur ce site. Ces cookies techniques sont exemptés du consentement selon les recommandations de la CNIL.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6 title-color">
                  Modifications de la politique
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Cette politique de confidentialité peut être modifiée à tout moment. Toute modification sera publiée sur cette page avec la date de dernière mise à jour.
                  </p>

                  <p>
                    En cas de modification substantielle, nous vous en informerons par email si nous disposons de votre adresse.
                  </p>

                  <p>
                    Nous vous invitons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Contact pour les données personnelles
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, contactez notre délégué à la protection des données :
                  </p>

                  <div className="bg-color/10 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Mail className="w-5 h-5 text-color mr-2" />
                      <strong>Email :</strong> lessensdelharmonie@gmail.com
                    </div>
                    <div className="flex items-center mb-2">
                      <Phone className="w-5 h-5 text-color mr-2" />
                      <strong>Téléphone :</strong> 06 75 44 55 82
                    </div>
                    <div className="flex items-center">
                      <strong>Adresse :</strong> 6, Lotissement des 4 Vents, 22450 Troguéry
                    </div>
                  </div>

                  <p>
                    Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois conformément au RGPD.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
