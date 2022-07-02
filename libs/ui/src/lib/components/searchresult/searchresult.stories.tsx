import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Searchresult } from './searchresult';

export default {
  component: Searchresult,
  title: 'Searchresult',
} as ComponentMeta<typeof Searchresult>;

const Template: ComponentStory<typeof Searchresult> = (args) => (
  <Searchresult {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
