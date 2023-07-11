import React from 'react';

export const Headings = (): JSX.Element => (
  <div className="font-sans antialiased text-gray-900">
    <code className="inline-block mt-6 text-sm">
      text-4xl font-sans font-bold
    </code>
    <h1 className="mt-2 text-4xl font-bold">Font Sans · Bold · X/X</h1>

    <code className="inline-block mt-6 text-sm">
      text-3xl font-sans font-bold
    </code>
    <h2 className="mt-2 text-3xl font-bold">Font Sans · Bold · X/X</h2>

    <code className="inline-block mt-6 text-sm">
      text-2xl font-sans font-bold
    </code>
    <h3 className="mt-2 text-2xl font-bold">Font Sans · Bold · X/X</h3>
  </div>
);

export const Paragraphs: React.FC = () => (
  <div className="font-sans antialiased text-gray-900">
    <code className="inline-block mt-6 text-sm">text-xl font-sans</code>
    <p className="text-xl">Font Sans · Regular · X/X</p>

    <code className="inline-block mt-6 text-sm">text-lg font-sans</code>
    <p className="text-lg">Font Sans · Regular · X/X</p>

    <code className="inline-block mt-6 text-sm">text-base font-sans</code>
    <p className="text-base">Font Sans · Regular · X/X</p>
  </div>
);
