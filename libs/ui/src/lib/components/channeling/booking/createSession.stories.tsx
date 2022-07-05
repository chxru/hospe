import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateSession } from './createSession';

export default {
  component: CreateSession,
  title: 'Channeling/Booking/Create Session',
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
