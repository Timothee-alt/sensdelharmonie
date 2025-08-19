import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie à Troguéry',
  description: 'Découvrez les soins énergétiques Reiki, le Feng Shui Tibétain et la Géobiologie à Troguéry. Harmonisez votre être et votre habitat pour un bien-être optimal.',
  keywords: ['Reiki Bretagne', 'Feng Shui Bretagne', 'Géobiologie maison', 'soins énergétiques France', 'bien être Côtes d\'Armor'],
  openGraph: {
    title: 'Les Sens de l\'Harmonie | Reiki, Feng Shui, Géobiologie à Troguéry',
    description: 'Découvrez les soins énergétiques Reiki, le Feng Shui Tibétain et la Géobiologie à Troguéry.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </div>
  );
}