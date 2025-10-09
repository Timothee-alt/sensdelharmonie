import type { Metadata } from 'next';
import LegalNoticeContent from '@/components/pages/LegalNoticeContent';

export const metadata: Metadata = {
  title: 'Mentions Légales | Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie',
  description: 'Mentions légales du site Les Sens de l\'Harmonie. Informations sur l\'éditeur, l\'hébergement, la propriété intellectuelle et le RGPD.',
  keywords: ['mentions légales', 'informations légales', 'RGPD', 'données personnelles', 'propriété intellectuelle'],
  openGraph: {
    title: 'Mentions Légales | Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie',
    description: 'Mentions légales du site Les Sens de l\'Harmonie. Informations sur l\'éditeur, l\'hébergement, la propriété intellectuelle et le RGPD.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function LegalNoticePage() {
  return <LegalNoticeContent />;
}
