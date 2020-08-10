import React from 'react';

import type { TypeA } from '../types';

const Example: TypeA = {
  name: 'next',
};

const Home = (): JSX.Element => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <h1>
      <p>{Example.name}</p>
    </h1>
  </div>
);

export default Home;
