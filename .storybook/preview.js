import React from 'react';
import { LayoutDecorator } from '../playground/src/components/Layout/Layout';
import { IconsDecorator } from '../playground/src/components/Icons/Icons';

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
  IconsDecorator,
]