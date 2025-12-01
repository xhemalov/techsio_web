import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import TechCorpPageContent from '@/components/techcorp-page-content';

export const metadata: Metadata = {
  title: 'TechCorp B2B Platform - Case Study | TechSio',
  description: 'Komplexní B2B platforma s pokročilými funkcemi pro velkoobchod. Firemní účty, více košíků a automatizované objednávky.',
  openGraph: {
    images: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'
  }
};

export default function TechCorpPage() {
  return <TechCorpPageContent />;
}