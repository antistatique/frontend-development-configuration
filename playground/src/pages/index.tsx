import React from 'react';
import { useTranslation } from 'react-i18next';

import Counter from '@/components/Counter';
import Fetcher from '@/components/Fetcher';
import Layout from '@/components/Layout';

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div>
          <h1 className="text-2xl font-bold uppercase">{t('greetings')}</h1>
          <h2 className="my-4 text-xl font-bold">Counter example:</h2>
          <Counter initial={0} onChange={c => console.log(c)} />
          <h2 className="my-4 text-xl font-bold">Fetch example:</h2>
          <Fetcher />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
