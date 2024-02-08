import React from 'react';
import Link from 'next/link';

import Layout from '@/components/Layout';

const Home: React.FC = () => (
  <Layout>
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-bold">Pick your Router</h1>
      <ul className="list-disc list">
        <li>
          <Link href="/pages-router" className="underline">
            Pages Router
          </Link>
        </li>
        <li>
          <Link href="/app-router" className="underline">
            App Router
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default Home;
