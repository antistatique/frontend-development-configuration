import React, { useEffect, useState } from 'react';

import Icon from '@/components/Icon';
import { add, subtract } from '@/utils';

export type CounterProps = {
  initial: number;
  onChange: (c: number) => void;
};

const Counter = ({ initial, onChange }: CounterProps): JSX.Element => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  return (
    <div id="counter">
      <button
        type="button"
        onClick={() => setCount(subtract(count, 1))}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        -
      </button>
      <span className="px-4 text-2xl font-bold">
        <Icon className="text-xl" />
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

export default Counter;
