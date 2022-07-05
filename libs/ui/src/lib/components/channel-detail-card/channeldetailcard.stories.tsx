import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChannelDetailCard } from './channeldetailcard';

export default {
  component: ChannelDetailCard,
  title: 'ChannelDetailCard',
} as ComponentMeta<typeof ChannelDetailCard>;

const Template: ComponentStory<typeof ChannelDetailCard> = (args) => (
  <ChannelDetailCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
