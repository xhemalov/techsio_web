import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ProcesPageContent from '@/components/proces-page-content';

export const metadata: Metadata = siteMetadata['/proces'];

export default function ProcesPage() {
  return <ProcesPageContent />;
}