import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpcommingAppointmentCard } from './upcomingappointments';

export default {
  component: UpcommingAppointmentCard,
  title: 'UpcommingAppointmentCard',
} as ComponentMeta<typeof UpcommingAppointmentCard>;

const Template: ComponentStory<typeof UpcommingAppointmentCard> = (args) => (
  <UpcommingAppointmentCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
