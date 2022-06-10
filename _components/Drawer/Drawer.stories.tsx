import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Drawer from './Drawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => (
  <div style={{ background: 'white', height: '100vh', width: '100vw' }}>
    <Drawer {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  visible: true,
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
