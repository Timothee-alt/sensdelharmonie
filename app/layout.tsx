import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lessensdelharmonie.fr'),
  title: {
    default: 'Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie à Troguéry',
    template: '%s | Les Sens de l\'Harmonie'
  },
  description: 'Découvrez les soins énergétiques Reiki, le Feng Shui Tibétain et la Géobiologie à Troguéry. Harmonisez votre être et votre habitat pour un bien-être optimal.',
  keywords: ['Reiki Troguéry', 'Feng Shui Bretagne', 'Géobiologie maison', 'soins énergétiques France', 'wellness Côtes d\'Armor'],
  authors: [{ name: 'Les Sens de l\'Harmonie' }],
  creator: 'Les Sens de l\'Harmonie',
  publisher: 'Les Sens de l\'Harmonie',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lessensdelharmonie.fr',
    siteName: 'Les Sens de l\'Harmonie',
    title: 'Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie à Troguéry',
    description: 'Découvrez les soins énergétiques Reiki, le Feng Shui Tibétain et la Géobiologie à Troguéry. Harmonisez votre être et votre habitat pour un bien-être optimal.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Les Sens de l\'Harmonie - Wellness à Troguéry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie à Troguéry',
    description: 'Découvrez les soins énergétiques Reiki, le Feng Shui Tibétain et la Géobiologie à Troguéry.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Les Sens de l'Harmonie",
  "image": "/logo-definitif.png",
  "description": "Centre de bien-être proposant des soins Reiki, Feng Shui Tibétain et Géobiologie à Troguéry, Bretagne.",
  "url": "https://lessensdelharmonie.fr",
  "telephone": "06 75 44 55 82",
  "email": "lessensdelharmonie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6, Lotissement des 4 Vents",
    "addressLocality": "Troguéry",
    "postalCode": "22450",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.7167",
    "longitude": "-3.2000"
  },
  "openingHours": "Mo-Sa 09:00-19:00",
  "priceRange": "45€-55€",
  "serviceArea": {
    "@type": "Place",
    "name": "Bretagne, France"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de bien-être",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reiki",
          "description": "Soins énergétiques japonais pour le bien-être physique et émotionnel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Feng Shui Tibétain",
          "description": "Harmonisation de l'habitat selon les principes du Feng Shui Tibétain"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Géobiologie",
          "description": "Médecine de l'habitat pour optimiser les énergies de votre environnement"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-inter antialiased bg-cream text-sage-800 overflow-x-hidden">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}