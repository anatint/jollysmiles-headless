import type { Metadata } from 'next';
import ServiceInnerPage, { serviceMetadata } from '@/components/services/ServiceInnerPage';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return serviceMetadata('invisalign', '/invisalign');
}

export default function InvisalignPage() {
  return <ServiceInnerPage slug="invisalign" path="/invisalign" />;
}
