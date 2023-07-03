import type { Meta, StoryObj } from '@storybook/react';

import Blank from './Blank';

const meta = {
  title: 'Demo/Blank',
  component: Blank,
  parameters: {},
} satisfies Meta<typeof Blank>;

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
