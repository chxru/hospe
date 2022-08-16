import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpcomingDetails } from './upcomingDetails';
import { UpcomingDetailsProps } from './upcomingDetails';

export default {
  component: UpcomingDetails,
  title: 'doctor/UpcomingDetails',
} as ComponentMeta<typeof UpcomingDetails>;

const mockdata: UpcomingDetailsProps = {
  upcomingDetailsdata: [
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

const Template: ComponentStory<typeof UpcomingDetails> = () => (
  <UpcomingDetails {...mockdata} />
);

export const Primary = Template.bind({});
Primary.args = {};
