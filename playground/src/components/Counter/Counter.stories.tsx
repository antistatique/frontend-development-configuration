import React from 'react';
import { Meta, Story } from '@storybook/react';

import Counter, { CounterProps } from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    count: { control: 'number' },
  },
} as Meta;

const Template: Story<CounterProps> = args => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 0,
};
