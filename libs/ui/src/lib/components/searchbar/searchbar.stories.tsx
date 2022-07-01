import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Searchbar }  from './searchbar'

export default {
  component: Searchbar,
  title: 'Searchbar',
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => (<Searchbar {...args} />);

export const Primary = Template.bind({});
Template.args = {}
