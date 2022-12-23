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
      __v: '1',
      docId: '1',
      _id: '1',
      time: '8.30 PM',
      date: '2022-08-15',
      maximumPatients: 12,
      doctorFee: 1000,
    },
  ],
};

const Template: ComponentStory<typeof UpcomingDetails> = () => (
  <UpcomingDetails {...mockdata} />
);

export const Primary = Template.bind({});
Primary.args = {};
