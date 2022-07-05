import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FacebookButton } from './facebook';

export default {
  component: FacebookButton,
  title: 'Auth/Form/Buttons/Facebook',
} as ComponentMeta<typeof FacebookButton>;

const Template: ComponentStory<typeof FacebookButton> = (args) => (
  <FacebookButton radius={'xl'}>Facebook</FacebookButton>
);

export const Primary = Template.bind({});
