import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChannelDetailCard } from './details';

export default {
  component: ChannelDetailCard,
  title: 'Channeling/Booking/Details Card',
} as ComponentMeta<typeof ChannelDetailCard>;

const Template: ComponentStory<typeof ChannelDetailCard> = (args) => (
  <ChannelDetailCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
