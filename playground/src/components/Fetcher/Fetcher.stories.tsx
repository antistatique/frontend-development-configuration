import type { Meta, StoryObj } from '@storybook/react';

import Fetcher from './Fetcher';

const meta = {
  title: 'Demo/Fetcher',
  component: Fetcher,
  argTypes: { onChange: { action: 'changed' } },
  parameters: {},
} satisfies Meta<typeof Fetcher>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 * STORIES
 */

export const Default: Story = {
  args: {
    name: 'John',
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};
