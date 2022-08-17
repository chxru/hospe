import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContainerDetailsProps, ResultContainer } from './resultContainer';

export default {
  component: ResultContainer,
  title: 'Channeling/Searching/Results Container',
} as ComponentMeta<typeof ResultContainer>;

const mockData: ContainerDetailsProps = {
  data: [
    {
      date: '10/10/2020',
    },
  ],
};

const Template: ComponentStory<typeof ResultContainer> = (args) => (
  <ResultContainer {...mockData} />
);

export const Primary = Template.bind({});
Template.args = {};
