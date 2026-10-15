import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="bg-brand-red text-white px-6 py-3 rounded-full font-semibold">Back to Home</Link>
    </main>
  );
}
