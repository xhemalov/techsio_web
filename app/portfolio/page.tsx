import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import PortfolioPageContent from '@/components/portfolio-page-content';

export const metadata: Metadata = siteMetadata['/portfolio'];

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}