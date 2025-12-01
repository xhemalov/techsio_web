import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import SeoPageContent from '@/components/seo-page-content';

export const metadata: Metadata = siteMetadata['/sluzby/seo'];

export default function SeoPage() {
  return <SeoPageContent />;
}