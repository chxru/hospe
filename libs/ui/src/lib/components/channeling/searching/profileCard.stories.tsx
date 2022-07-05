import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './profileCard';

export default {
  component: ProfileCard,
  title: 'Channeling/Searching/Profile Card',
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
