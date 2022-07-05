import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResultContainer } from './resultContainer';

export default {
  component: ResultContainer,
  title: 'Channeling/Searching/Results Container',
} as ComponentMeta<typeof ResultContainer>;

const Template: ComponentStory<typeof ResultContainer> = (args) => (
  <ResultContainer {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
