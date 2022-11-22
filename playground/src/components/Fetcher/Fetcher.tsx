import React, { useState } from 'react';

import useAgify from 'hooks/useAgify';

const Fetcher = (): JSX.Element => {
  const [name, setName] = useState<string | null>(null);
  const { data, isSuccess } = useAgify(name);

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <input
        type="text"
        name="name"
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        placeholder="Your name..."
        onChange={e => setName(e.target.value)}
        value={name ?? ''}
      />
      {isSuccess && (
        <p className="mt-4">
          {name}, your age is <b>{data.age}</b> 😇
        </p>
      )}
    </div>
  );
};

export default Fetcher;
