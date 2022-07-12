import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardProps } from './details';
import { ChannelDetailCard } from './details';

export default {
  component: ChannelDetailCard,
  title: 'Channeling/Booking/Details Card',
} as ComponentMeta<typeof ChannelDetailCard>;

const mockdata_name: CardProps[] = [
  { label_name: 'Danial Smith', lable_gend: 'Male' },
  { label_time: '16.30' },
];

const Template: ComponentStory<typeof ChannelDetailCard> = () => (
  <ChannelDetailCard data={mockdata_name} />
);

export const Primary = Template.bind({});
Primary.args = {};
