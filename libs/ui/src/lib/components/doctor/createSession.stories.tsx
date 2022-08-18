import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateSession } from './createSession';

export default {
  component: CreateSession,
  title: 'doctor/CreateSession',
} as ComponentMeta<typeof CreateSession>;

const Template: ComponentStory<typeof CreateSession> = () => <CreateSession />;

export const Primary = Template.bind({});
Primary.args = {};
