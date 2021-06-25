import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

export const Headings = (): JSX.Element => (
  <div tw="font-sans antialiased text-gray-900">
    <code tw="inline-block mt-6 text-sm">text-4xl font-sans font-bold</code>
    <h1 tw="mt-2 text-4xl font-bold">Font Sans · Bold · X/X</h1>

    <code tw="inline-block mt-6 text-sm">text-3xl font-sans font-bold</code>
    <h2 tw="mt-2 text-3xl font-bold">Font Sans · Bold · X/X</h2>

    <code tw="inline-block mt-6 text-sm">text-2xl font-sans font-bold</code>
    <h3 tw="mt-2 text-2xl font-bold">Font Sans · Bold · X/X</h3>
  </div>
);

export const Paragraphs = (): JSX.Element => (
  <div tw="font-sans antialiased text-gray-900">
    <code tw="inline-block mt-6 text-sm">text-xl font-sans</code>
    <p tw="text-xl">Font Sans · Regular · X/X</p>

    <code tw="inline-block mt-6 text-sm">text-lg font-sans</code>
    <p tw="text-lg">Font Sans · Regular · X/X</p>

    <code tw="inline-block mt-6 text-sm">text-base font-sans</code>
    <p tw="text-base">Font Sans · Regular · X/X</p>
  </div>
);
