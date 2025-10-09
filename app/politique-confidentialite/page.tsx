import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/pages/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Les Sens de l\'Harmonie | RGPD',
  description: 'Politique de confidentialité et protection des données personnelles - RGPD. Découvrez comment vos données sont collectées, utilisées et protégées.',
  keywords: ['politique confidentialité', 'RGPD', 'données personnelles', 'protection données', 'vie privée'],
  openGraph: {
    title: 'Politique de Confidentialité | Les Sens de l\'Harmonie | RGPD',
    description: 'Politique de confidentialité et protection des données personnelles - RGPD. Découvrez comment vos données sont collectées, utilisées et protégées.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
