import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { iconList } from '../Icons/Icons';

import Icon from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconList),
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'home',
};
