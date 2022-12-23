import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './profileCard';
import { ProfileCardProps } from './profileCard';

export default {
  component: ProfileCard,
  title: 'Channeling/Searching/Profile Card',
} as ComponentMeta<typeof ProfileCard>;

const mockdata: ProfileCardProps = {
  data: [
    {
      name: 'John Davis',
      specialization: 'General Physician',
    },
  ],
};

const Template: ComponentStory<typeof ProfileCard> = () => (
  <ProfileCard {...mockdata} />
);

export const Primary = Template.bind({});
Template.args = {};
