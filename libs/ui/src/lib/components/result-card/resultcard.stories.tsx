import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Resultcard } from './resultcard';

export default {
  component: Resultcard,
  title: 'Resultcard',
} as ComponentMeta<typeof Resultcard>;

const Template: ComponentStory<typeof Resultcard> = (args) => (
  <Resultcard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
