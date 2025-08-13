import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact & Tarifs | Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie',
  description: 'Contactez Les Sens de l\'Harmonie à Troguéry. Tarifs des séances Reiki, devis Feng Shui et Géobiologie. Prise de rendez-vous en ligne ou par téléphone.',
  keywords: ['contact Troguéry', 'tarifs Reiki', 'devis Feng Shui', 'prix géobiologie', 'rendez-vous Bretagne', 'Côtes d\'Armor'],
  openGraph: {
    title: 'Contact & Tarifs | Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie',
    description: 'Contactez Les Sens de l\'Harmonie à Troguéry. Tarifs et prise de rendez-vous pour vos soins énergétiques.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}