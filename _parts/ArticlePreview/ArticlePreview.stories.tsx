import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlePreview from './ArticlePreview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Parts/ArticlePreview',
  component: ArticlePreview,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlePreview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticlePreview> = (args) => (
  <div style={{ maxWidth: 768 }}>
    <ArticlePreview {...args} />
  </div>
)

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'TRANSPORTER-5 MISSION',
  id: '1',
  image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare non risus nec dapibus. In a lorem viverra enim tincidunt euismod quis eu enim. Pellentesque eget ipsum convallis',
  href: 'asd'
};
