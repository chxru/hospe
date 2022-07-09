import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpcomingAppointmentCard } from './upcomingAppointments';

export default {
  component: UpcomingAppointmentCard,
  title: 'Channeling/Booking/Upcoming Appointments',
} as ComponentMeta<typeof UpcomingAppointmentCard>;

const Template: ComponentStory<typeof UpcomingAppointmentCard> = (args) => (
  <UpcomingAppointmentCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
