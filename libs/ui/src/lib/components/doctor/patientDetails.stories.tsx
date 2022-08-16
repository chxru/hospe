import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PatientDetails } from './patientDetails';
import { PatientDetailsProps } from './patientDetails';

export default {
  component: PatientDetails,
  title: 'doctor/PatientDetails',
} as ComponentMeta<typeof PatientDetails>;

const mockdata: PatientDetailsProps = {
  patientdata: [
    {
      name: 'John Davis',
      gender: 'Male',
      age: 54,
      appointmentNumber: 1,
    },
    {
      name: 'John Harison',
      gender: 'Male',
      age: 22,
      appointmentNumber: 2,
    },
    {
      name: 'John Paker',
      gender: 'Male',
      age: 95,
      appointmentNumber: 3,
    },
    {
      name: 'John Hamilton',
      gender: 'Female',
      age: 22,
      appointmentNumber: 4,
    },
    {
      name: 'John',
      gender: 'Female',
      age: 30,
      appointmentNumber: 5,
    },
  ],
};

const Template: ComponentStory<typeof PatientDetails> = () => (
  <PatientDetails {...mockdata} />
);

export const Primary = Template.bind({});
Primary.args = {};
