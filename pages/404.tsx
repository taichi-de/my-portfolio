import Link from 'next/link';

import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout title="404">
      <div className="flex-col items-center justify-center font-serif">
        <h1 className="mb-8 text-3xl font-black text-gray-300 ">404 | Page not found.</h1>
        <Link href="/" className="font-serif font-bold text-blue-400 text-md">
          - Back to Home -
        </Link>
      </div>
    </Layout>
  );
}
