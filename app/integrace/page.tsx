import type { Metadata } from 'next';
import { siteMetadata } from '@/app/site-metadata';
import IntegracePageContent from '@/components/integrace-page-content';

export const metadata: Metadata = siteMetadata['/integrace'];

export default function IntegracePage() {
  return <IntegracePageContent />;
}
