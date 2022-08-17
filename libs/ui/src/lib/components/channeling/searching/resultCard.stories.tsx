import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResultCard, ResultDetailsProps } from './resultCard';

export default {
  component: ResultCard,
  title: 'Channeling/Searching/Result Card',
} as ComponentMeta<typeof ResultCard>;

const mockData: ResultDetailsProps = {
  data: [
    {
      name: 'John Doe',
      specialization: 'General Physician',
      patientCount: 10,
      time: 10,
      fee: 100,
    },
  ],
};

const Template: ComponentStory<typeof ResultCard> = (args) => (
  <ResultCard {...mockData} />
);

export const Primary = Template.bind({});
Template.args = {};
