/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import tw from 'twin.macro';

import type { TypeA } from 'types';

const Example: TypeA = {
  name: 'next',
};

const Home = (): JSX.Element => (
  <div>
    <h1>
      <p>{Example.name}</p>
    </h1>
  </div>
);

export default Home;
