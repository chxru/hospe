import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchRes } from './searchres';
import { searchDataProps } from './searchres';

export default {
  component: SearchRes,
  title: 'channeling/searching/SearchRes',
} as ComponentMeta<typeof SearchRes>;

const mockdata: searchDataProps = {
  searchData: [
    {
      _id: '1',
      docType: 'General',
      docFee: 100,
      time: '8.30 PM',
      maximumPatients: 12,
      date: '2022-08-15',
      docName: 'Dr. John',
    },
  ],
};

const Template: ComponentStory<typeof SearchRes> = () => (
  <SearchRes {...mockdata} />
);

export const Primary = Template.bind({});
Primary.args = {};
