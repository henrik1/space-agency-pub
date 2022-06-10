import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuToggle from './MenuToggle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MenuToggle',
  component: MenuToggle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuToggle> = (args) => (
  <div style={{ background: 'black', padding: 10 }}>
    <MenuToggle {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  open: false
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
