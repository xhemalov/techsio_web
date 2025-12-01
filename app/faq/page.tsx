import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import FaqPageContent from '@/components/faq-page-content';

export const metadata: Metadata = siteMetadata['/faq'];

export default function FaqPage() {
  return <FaqPageContent />;
}