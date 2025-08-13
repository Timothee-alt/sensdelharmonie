import type { Metadata } from 'next';
import FengShuiContent from '@/components/pages/FengShuiContent';

export const metadata: Metadata = {
  title: 'Feng Shui Tibétain à Troguéry | Harmonisation | Les Sens de l\'Harmonie',
  description: 'Découvrez le Feng Shui Tibétain à Troguéry. Art millénaire d\'harmonisation des énergies de votre habitat selon les principes adaptés à nos maisons occidentales.',
  keywords: ['Feng Shui Tibétain', 'Feng Shui Bretagne', 'harmonisation habitat', 'énergies maison', 'Bagua', 'cinq éléments', 'Côtes d\'Armor'],
  openGraph: {
    title: 'Feng Shui Tibétain à Troguéry | Harmonisation | Les Sens de l\'Harmonie',
    description: 'Découvrez le Feng Shui Tibétain à Troguéry. Art millénaire d\'harmonisation des énergies de votre habitat.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function FengShuiPage() {
  return <FengShuiContent />;
}