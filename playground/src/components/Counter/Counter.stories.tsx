import type { Meta, StoryObj } from '@storybook/react';

import Counter from './Counter';

const meta = {
  title: 'Components/Counter',
  component: Counter,
  argTypes: { onChange: { action: 'changed' } },
  parameters: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 * STORIES
 */

export const Default: Story = {
  args: {
    initial: 0,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};
