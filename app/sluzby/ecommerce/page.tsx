import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import EcommercePageContent from '@/components/ecommerce-page-content';

export const metadata: Metadata = siteMetadata['/sluzby/ecommerce'];

export default function EcommercePage() {
  return <EcommercePageContent />;
}