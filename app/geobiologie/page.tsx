import type { Metadata } from 'next';
import GeobiologyContent from '@/components/pages/GeobiologyContent';

export const metadata: Metadata = {
  title: 'Géobiologie à Troguéry | Médecine de l\'Habitat | Les Sens de l\'Harmonie',
  description: 'Expertise géobiologique à Troguéry. Étude des interactions entre les êtres vivants et leur environnement. Optimisation énergétique de votre habitat en Bretagne.',
  keywords: ['Géobiologie Troguéry', 'médecine habitat Bretagne', 'réseaux géobiologiques', 'ondes géobiologie', 'expertise géobiologique Côtes d\'Armor', 'pollution électromagnétique'],
  openGraph: {
    title: 'Géobiologie à Troguéry | Médecine de l\'Habitat | Les Sens de l\'Harmonie',
    description: 'Expertise géobiologique à Troguéry. Étude des interactions entre les êtres vivants et leur environnement.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function GeobiologyPage() {
  return <GeobiologyContent />;
}