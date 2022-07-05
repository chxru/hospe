import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResultCard } from './resultCard';

export default {
  component: ResultCard,
  title: 'Channeling/Searching/Result Card',
} as ComponentMeta<typeof ResultCard>;

const Template: ComponentStory<typeof ResultCard> = (args) => (
  <ResultCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
