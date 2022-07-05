import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from './searchBar';

export default {
  component: SearchBar,
  title: 'Channeling/Searching/Search Window',
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
