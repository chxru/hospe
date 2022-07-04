import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateSession } from './createsession';

export default {
  component: CreateSession,
  title: 'Create Session Form',
} as ComponentMeta<typeof CreateSession>;

const Template: ComponentStory<typeof CreateSession> = (args) => (
  <CreateSession {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: (values) => {
    console.log(values);
  },
};
