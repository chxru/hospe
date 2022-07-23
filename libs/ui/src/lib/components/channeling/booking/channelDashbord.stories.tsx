import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChannelDashboard } from './channelDashboard';
import { CardProps } from './details';
import { DashboardProps } from './channelDashboard';

export default {
  component: ChannelDashboard,
  title: 'Channeling/Booking/Dashboard',
} as ComponentMeta<typeof ChannelDashboard>;

const mockdata: CardProps[] = [
  { label_name: 'Danial Smith', lable_gend: 'Male' },
  { label_time: '16.30' },
];

const dashboard_mock: DashboardProps[] = [{ active_patients: 20 }];

const Template: ComponentStory<typeof ChannelDashboard> = () => (
  <ChannelDashboard detailCard_data={mockdata} data={dashboard_mock} />
);

export const Primary = Template.bind({});
Template.args = {};
