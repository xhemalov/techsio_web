import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import TermsPageContent from '@/components/terms-page-content';

export const metadata: Metadata = siteMetadata['/terms'];

export default function TermsPage() {
  return <TermsPageContent />;
}