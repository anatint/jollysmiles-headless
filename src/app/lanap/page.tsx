import type { Metadata } from 'next';
import ServiceInnerPage, { serviceMetadata } from '@/components/services/ServiceInnerPage';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return serviceMetadata('lanap-treatment', '/lanap');
}

export default function LanapPage() {
  return <ServiceInnerPage slug="lanap-treatment" path="/lanap" />;
}
