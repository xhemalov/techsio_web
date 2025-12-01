import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ONasPageContent from '@/components/o-nas-page-content';

export const metadata: Metadata = siteMetadata['/o-nas'];

export default function ONasPage() {
  return <ONasPageContent />;
}