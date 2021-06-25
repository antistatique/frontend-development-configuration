import React from 'react';
import { LayoutDecorator } from '../src/components/Layout/Layout';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
}

export const decorators = [
  LayoutDecorator,
]