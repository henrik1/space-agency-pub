import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ background: 'black', padding: 10 }}>
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Hello world'
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
