import type { Metadata } from 'next';
import { siteMetadata } from '@/app/site-metadata';
import PortfolioPageContent from '@/components/portfolio-page-content';

export const metadata: Metadata = siteMetadata['/portfolio'];

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
