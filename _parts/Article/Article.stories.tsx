import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Article from './Article';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Parts/Article',
  component: Article,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Article>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Article> = (args) => (
  <div style={{ maxWidth: 1024 }}>
    <Article {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'TRANSPORTER-5 MISSION',
  id: '1',
  image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare non risus nec dapibus. In a lorem viverra enim tincidunt euismod quis eu enim. Pellentesque eget ipsum convallis, hendrerit augue non, viverra erat. Praesent sit amet consequat nibh, id egestas metus. Integer ut lorem risus. Morbi ultrices, mi in consectetur tincidunt, arcu magna aliquam mi, non pretium nunc dolor sed orci. Duis at risus vitae est aliquam fringilla. Vivamus nec gravida dolor. Ut tempus erat et congue sagittis. Mauris convallis velit id tellus sodales bibendum. Nam porta arcu et condimentum ultricies. Etiam molestie dui id dui sollicitudin consequat. Mauris in risus at libero auctor gravida. Mauris dictum metus diam, ac imperdiet dui euismod eu. Ut dapibus ac dui eget maximus.'
};
