import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Blank from './Blank';

export default {
  title: 'Demo/Blank',
  component: Blank,
} as ComponentMeta<typeof Blank>;

const Template: ComponentStory<typeof Blank> = args => <Blank {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John',
};
