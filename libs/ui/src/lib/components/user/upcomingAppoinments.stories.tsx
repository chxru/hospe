import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpcomingAppoinments } from './upcomingAppoinments';
import { UpcomingAppoinmentsProps } from './upcomingAppoinments';

export default {
  component: UpcomingAppoinments,
  title: 'user/UpcomingAppoinments',
} as ComponentMeta<typeof UpcomingAppoinments>;

const mockdata: UpcomingAppoinmentsProps = {
  upcomingAppoinmentsdata: [
    {
      time: '8.30 PM',
      date: '2022-08-15',
      patientsNumber: 12,
      location: 'Room 06',
    },

    {
      time: '10.30 PM',
      date: '2022-08-16',
      patientsNumber: 25,
      location: 'Room 08',
    },

    {
      time: '8.30 PM',
      date: '2022-08-16',
      patientsNumber: 32,
      location: 'Room 10',
    },

    {
      time: '8.30 PM',
      date: '2022-08-15',
      patientsNumber: 12,
      location: 'Room 06',
    },

    {
      time: '8.30 PM',
      date: '2022-08-15',
      patientsNumber: 12,
      location: 'Room 06',
    },

    {
      time: '8.30 PM',
      date: '2022-08-15',
      patientsNumber: 12,
      location: 'Room 06',
    },
  ],
};

const Template: ComponentStory<typeof UpcomingAppoinments> = () => (
  <UpcomingAppoinments {...mockdata} />
);

export const Primary = Template.bind({});
Primary.args = {};
