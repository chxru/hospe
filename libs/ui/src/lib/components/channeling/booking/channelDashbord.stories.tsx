import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChannelDashboard } from './channelDashboard';

export default {
  component: ChannelDashboard,
  title: 'Channeling/Booking/Dashboard',
} as ComponentMeta<typeof ChannelDashboard>;

const Template: ComponentStory<typeof ChannelDashboard> = (args) => (
  <ChannelDashboard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
