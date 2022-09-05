import React from 'react';

import Counter from 'components/Counter';
import Fetcher from 'components/Fetcher';
import Layout from 'components/Layout';

const Home = (): JSX.Element => (
  <Layout>
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div>
        <h2 className="my-4 text-xl font-bold">Counter example:</h2>
        <Counter initial={0} onChange={c => console.log(c)} />
        <h2 className="my-4 text-xl font-bold">Fetch example:</h2>
        <Fetcher />
      </div>
    </div>
  </Layout>
);

export default Home;
