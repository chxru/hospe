import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DoctorDetails } from './doctorDetailCard';
import { DoctorDetailsProps } from './doctorDetailCard';

export default {
  component: DoctorDetails,
  title: 'doctor/DoctorDetails',
} as ComponentMeta<typeof DoctorDetails>;

const mockdata: DoctorDetailsProps = {
  doctordata: [
    {
      _id: '1',
      name: 'Paker',
      email: 'Benji',
      phone: '07125635',
      gender: 'male',
      birthday: new Date(),
      specialization: 'VP',
      qualification: 'MBBS',
    },
  ],
};

const Template: ComponentStory<typeof DoctorDetails> = () => (
  <DoctorDetails {...mockdata} />
);

export const Primary = Template.bind({});
Primary.args = {};
