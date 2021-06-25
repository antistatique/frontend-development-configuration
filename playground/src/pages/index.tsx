import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import Counter from 'components/Counter';
import Layout from 'components/Layout';

const Home = (): JSX.Element => (
  <Layout>
    <Counter />
  </Layout>
);

export default Home;
