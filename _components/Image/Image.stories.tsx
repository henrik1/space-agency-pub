import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from './Image';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  aspectRatio: 3/4,
  src: 'https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
