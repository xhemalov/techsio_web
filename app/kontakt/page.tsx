import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import KontaktPageContent from '@/components/kontakt-page-content';

export const metadata: Metadata = siteMetadata['/kontakt'];

export default function KontaktPage() {
  return <KontaktPageContent />;
}