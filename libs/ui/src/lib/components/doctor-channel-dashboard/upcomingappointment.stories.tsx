import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpcomingAppointmentCard } from './upcomingappointments';

export default {
  component: UpcomingAppointmentCard,
  title: 'UpcomingAppointmentCard',
} as ComponentMeta<typeof UpcomingAppointmentCard>;

const Template: ComponentStory<typeof UpcomingAppointmentCard> = (args) => (
  <UpcomingAppointmentCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
