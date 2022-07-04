import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChannelDashboard } from './doctorchanneldashboard';

export default {
  component: ChannelDashboard,
  title: 'ChannelDashboard',
} as ComponentMeta<typeof ChannelDashboard>;

const Template: ComponentStory<typeof ChannelDashboard> = (args) => (
  <ChannelDashboard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
