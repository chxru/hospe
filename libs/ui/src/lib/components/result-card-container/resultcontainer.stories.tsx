import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Resultcontainer } from './resultcontainer';

export default {
  component: Resultcontainer,
  title: 'Resultcontainer',
} as ComponentMeta<typeof Resultcontainer>;

const Template: ComponentStory<typeof Resultcontainer> = (args) => (
  <Resultcontainer {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
