import { LayoutDecorator } from '../src/components/Layout/Layout';

import "../src/styles/globals.css";

export const parameters = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  LayoutDecorator,
]
