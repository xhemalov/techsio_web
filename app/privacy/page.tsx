import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import PrivacyPageContent from '@/components/privacy-page-content';

export const metadata: Metadata = siteMetadata['/privacy'];

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}