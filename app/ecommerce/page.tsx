import type { Metadata } from 'next';
import { siteMetadata } from '@/app/site-metadata';
import EcommercePageContent from '@/components/ecommerce-page-content';

export const metadata: Metadata = siteMetadata['/ecommerce'];

export default function EcommercePage() {
  return <EcommercePageContent />;
}
