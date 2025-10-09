'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, User, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function LegalNoticeContent() {
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
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight title-color">
              Mentions Légales
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 font-light">
              Informations Légales et RGPD
            </p>

            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
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
            {/* Informations sur l'éditeur */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <User className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Informations sur l'éditeur du site
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Nom commercial :</strong> Les Sens de l'Harmonie
                  </p>
                  <p>
                    <strong>Forme juridique :</strong> Entreprise individuelle
                  </p>
                  <p>
                    <strong>Numéro SIRET :</strong> 93108564100013
                  </p>
                  <p>
                    <strong>Siège social :</strong><br />
                    6, Lotissement des 4 Vents<br />
                    22450 Troguéry<br />
                    France
                  </p>
                  <p>
                    <strong>Téléphone :</strong> 06 75 44 55 82
                  </p>
                  <p>
                    <strong>Email :</strong> lessensdelharmonie@gmail.com
                  </p>
                  <p>
                    <strong>Directeur de la publication :</strong> Nadia Pasquiou
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Informations sur l'hébergement
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Le site web est hébergé par :
                  </p>
                  <p>
                    <strong>Vercel Inc.</strong><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789<br />
                    États-Unis
                  </p>
                  <p>
                    <strong>Site web :</strong> <a href="https://vercel.com" className="text-color hover:underline">vercel.com</a>
                  </p>
                  <p>
                    <strong>Support :</strong> <a href="mailto:support@vercel.com" className="text-color hover:underline">support@vercel.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Propriété intellectuelle
                  </h2>
                </div>

                <div className="space-y-6 text-gray-600">
                  <p>
                    Le contenu du site web (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de Les Sens de l'Harmonie, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                  </p>

                  <p>
                    Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit préalable de Les Sens de l'Harmonie. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                  </p>

                  <p>
                    Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Données personnelles */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-color mr-3" />
                  <h2 className="text-2xl font-playfair font-bold title-color">
                    Données personnelles et RGPD
                  </h2>
                </div>

                <div className="space-y-6 text-gray-600">
                  <p>
                    Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à répondre à vos demandes de contact et de devis. Le destinataire des données est exclusivement Les Sens de l'Harmonie.
                  </p>

                  <p>
                    Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD) n°2016/679 du 27 avril 2016, vous bénéficiez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement.
                  </p>

                  <p>
                    Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant. Vous pouvez exercer ces droits en contactant :
                  </p>

                  <div className="bg-sage-50 p-4 rounded-lg">
                    <p>
                      <strong>Les Sens de l'Harmonie</strong><br />
                      6, Lotissement des 4 Vents<br />
                      22450 Troguéry<br />
                      Email : lessensdelharmonie@gmail.com<br />
                      Téléphone : 06 75 44 55 82
                    </p>
                  </div>

                  <p>
                    Pour plus d'informations sur vos droits, consultez le site de la CNIL : <a href="https://www.cnil.fr" className="text-color hover:underline">www.cnil.fr</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6 title-color">
                  Cookies
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle et sont exemptés du consentement préalable selon les recommandations de la CNIL.
                  </p>

                  <p>
                    Aucun cookie de suivi, de publicité ou d'analyse n'est utilisé sur ce site.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation de responsabilité */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6 title-color">
                  Limitation de responsabilité
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Les Sens de l'Harmonie s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                  </p>

                  <p>
                    Toutefois, Les Sens de l'Harmonie ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, Les Sens de l'Harmonie décline toute responsabilité :
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                    <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations contenues sur le site</li>
                    <li>Plus généralement pour tous dommages, directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences, provoqués à raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6 title-color">
                  Droit applicable et juridiction compétente
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de différend et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                  </p>

                  <p className="text-sm text-gray-500 mt-6">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
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
