import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GoogleButton } from './google';

export default {
  component: GoogleButton,
  title: 'Auth/Form/Buttons/Google',
} as ComponentMeta<typeof GoogleButton>;

const Template: ComponentStory<typeof GoogleButton> = (args) => (
  <GoogleButton radius={'xl'}>Google</GoogleButton>
);

export const Primary = Template.bind({});
