import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from './searchBar';
import { SearchDetailsProps } from './searchBar';

export default {
  component: SearchBar,
  title: 'Channeling/Searching/Search Window',
} as ComponentMeta<typeof SearchBar>;

const mockData: SearchDetailsProps = {
  searchData: [
    {
      specializations: ['General Physician', 'Dentist', 'Cardiologist'],
      time: ['Any', 'Morning', 'Afternoon', 'Evening'],
      gender: ['Any', 'Male', 'Female'],
    },
  ],
  onSubmit: (values) => {
    console.log(values);
  },
};

const Template: ComponentStory<typeof SearchBar> = () => (
  <SearchBar {...mockData} />
);

export const Primary = Template.bind({});
Template.args = {};
