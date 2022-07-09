import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthenticationForm } from './authBox';

export default {
  component: AuthenticationForm,
  title: 'Auth/Form',
} as ComponentMeta<typeof AuthenticationForm>;

const Template: ComponentStory<typeof AuthenticationForm> = (args) => (
  <AuthenticationForm {...args} />
);

export const Main = Template.bind({});
Main.args = {
  onSubmit: (values) => {
    console.log(values);
  },
};
