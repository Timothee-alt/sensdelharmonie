import type { Metadata } from 'next';
import ReikiContent from '@/components/pages/ReikiContent';

export const metadata: Metadata = {
  title: 'Reiki à Troguéry | Soins Énergétiques | Les Sens de l\'Harmonie',
  description: 'Découvrez les bienfaits du Reiki à Troguéry. Soins énergétiques japonais pour réduire le stress, favoriser la relaxation et l\'équilibre émotionnel. Séances individuelles et à distance.',
  keywords: ['Reiki Troguéry', 'soins énergétiques Bretagne', 'Reiki Côtes d\'Armor', 'guérison énergétique', 'stress reduction', 'wellness Bretagne'],
  openGraph: {
    title: 'Reiki à Troguéry | Soins Énergétiques | Les Sens de l\'Harmonie',
    description: 'Découvrez les bienfaits du Reiki à Troguéry. Soins énergétiques japonais pour réduire le stress et favoriser l\'équilibre émotionnel.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function ReikiPage() {
  return <ReikiContent />;
}