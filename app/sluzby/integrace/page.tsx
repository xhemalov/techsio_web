import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import IntegracePageContent from '@/components/integrace-page-content';

export const metadata: Metadata = siteMetadata['/sluzby/integrace'];

export default function IntegracePage() {
  return <IntegracePageContent />;
}