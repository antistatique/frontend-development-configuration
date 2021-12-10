import React, { useState } from 'react';

import Icon from 'components/Icon';
import { add, subtract } from 'utils';

export type CounterProps = {
  count: number;
};

const Counter = ({ count: defaultCount }: CounterProps): JSX.Element => {
  const [count, setCount] = useState(defaultCount);

  return (
    <div
      id="counter"
      className="flex items-center justify-center w-full h-screen"
    >
      <button
        type="button"
        onClick={() => setCount(subtract(count, 1))}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        -
      </button>
      <span className="px-4 text-2xl font-bold">
        <Icon />
        {count}
      </span>
      <button
        type="button"
        onClick={() => setCount(add(count, 1))}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        +
      </button>
    </div>
  );
};

Counter.defaultProps = {
  count: 0,
};

export default Counter;
