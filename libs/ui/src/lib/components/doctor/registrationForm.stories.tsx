import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegistrationForm } from './registrationForm';
import { SpecialisedFieldDetailsProps } from './registrationForm';

export default {
  component: RegistrationForm,
  title: 'doctor/RegistrationForm',
} as ComponentMeta<typeof RegistrationForm>;

const mockdata: SpecialisedFieldDetailsProps = {
  data: [
    { value: 'VOG', label: 'VOG' },
    { value: 'ENT', label: 'ENT' },
    { value: 'VP', label: 'VP' },
    { value: 'Surgon', label: 'Surgon' },
  ],
};

const Template: ComponentStory<typeof RegistrationForm> = () => (
  <RegistrationForm {...mockdata} />
);

export const Primary = Template.bind({});
Primary.args = {};
