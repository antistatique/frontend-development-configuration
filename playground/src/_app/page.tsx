'use client';

import React from 'react';

import Counter from '@/components/Counter';
import Fetcher from '@/components/Fetcher';
import { useTranslation } from '@/locales/server';

type Props = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: Props) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div>
        <h1 className="text-2xl font-bold uppercase">{t('greetings')}</h1>
        <h2 className="my-4 text-xl font-bold">Counter example:</h2>
        <Counter initial={0} onChange={c => console.log(c)} />
        <h2 className="my-4 text-xl font-bold">Fetch example:</h2>
        <Fetcher />
      </div>
    </div>
  );
};

export default Home;
