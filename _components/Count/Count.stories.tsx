import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Count from './Count';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Count',
  component: Count,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Count>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Count> = (args) => (
  <div style={{ background: 'black', padding: 10, color: 'white', fontSize: '8rem' }}>
    <Count {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  from: 0,
  to: 2000,
  delay: 0,
  duration: 100,
  show: true
}
