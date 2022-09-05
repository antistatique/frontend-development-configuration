import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Fetcher from './Fetcher';

export default {
  title: 'Demo/Fetcher',
  component: Fetcher,
} as ComponentMeta<typeof Fetcher>;

const Template: ComponentStory<typeof Fetcher> = args => <Fetcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John',
};
