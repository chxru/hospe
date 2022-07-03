import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Profilecard } from './profilecard';

export default {
  component: Profilecard,
  title: 'Profilecard',
} as ComponentMeta<typeof Profilecard>;

const Template: ComponentStory<typeof Profilecard> = (args) => (
  <Profilecard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
