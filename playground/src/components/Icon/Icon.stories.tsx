import React from 'react';
import { Meta, Story } from '@storybook/react';

import { iconList } from '../Icons/Icons';

import Icon, { Props } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconList),
    },
  },
} as Meta;

const Template: Story<Props> = args => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'edit',
};
