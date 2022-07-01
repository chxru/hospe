import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthenticationForm } from './authBox';

export default {
  component: AuthenticationForm,
  title: 'Authentication Form',
} as ComponentMeta<typeof AuthenticationForm>;

const Template: ComponentStory<typeof AuthenticationForm> = (args) => (
  <AuthenticationForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: (values) => {
    console.log(values);
  },
};
