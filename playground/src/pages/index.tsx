import React from 'react';

import Blank from 'components/Blank';
import Counter from 'components/Counter';
import Layout from 'components/Layout';

const Home = (): JSX.Element => (
  <Layout>
    <Counter />
    <Blank name="john" />
  </Layout>
);

export default Home;
