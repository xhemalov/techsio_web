import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import KonzultacePageContent from '@/components/konzultace-page-content';

export const metadata: Metadata = siteMetadata['/sluzby/konzultace'];

export default function KonzultacePage() {
  return <KonzultacePageContent />;
}