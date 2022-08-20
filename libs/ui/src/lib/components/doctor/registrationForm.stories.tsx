import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegistrationForm } from './registrationForm';
import { SpecializedFieldDetailsProps } from './registrationForm';

export default {
  component: RegistrationForm,
  title: 'doctor/RegistrationForm',
} as ComponentMeta<typeof RegistrationForm>;

const mockData: SpecializedFieldDetailsProps = {
  specializedFields: [
    { value: 'VOG', label: 'VOG' },
    { value: 'ENT', label: 'ENT' },
    { value: 'VP', label: 'VP' },
    { value: 'Surgeon', label: 'Surgeon' },
  ],
  onSubmit: (values) => {
    console.log(values);
  },
};

const Template: ComponentStory<typeof RegistrationForm> = () => (
  <RegistrationForm {...mockData} />
);

export const Primary = Template.bind({});
Primary.args = {};
