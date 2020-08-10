/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import tw from 'twin.macro';

const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div tw="flex items-center justify-center w-full h-screen">
      <button
        type="button"
        onClick={() => setCount(i => i - 1)}
        tw="bg-blue-500 text-white rounded py-2 px-4"
      >
        -
      </button>
      <span id="count" tw="px-4 font-bold text-2xl">
        {count}
      </span>
      <button
        type="button"
        onClick={() => setCount(i => i + 1)}
        tw="bg-blue-500 text-white rounded py-2 px-4"
      >
        +
      </button>
    </div>
  );
};

Counter.defaultProps = {};

export default Counter;
