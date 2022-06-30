import { ComponentStory, ComponentMeta} from '@storybook/react';
import {
  LayoutDashboard,
  User,
  Search,
  ReportMedical,
  MedicalCross,
} from 'tabler-icons-react';
import { LinksGroupProps } from './linkGroup';
import { Sidebar } from './sidebar';

export default {
  component: Sidebar,
  title: 'Sidebar',
} as ComponentMeta<typeof Sidebar>;

const mockData: LinksGroupProps[] = [
  { label: 'Dashboard', icon: LayoutDashboard },
  {
    label: 'Search',
    icon: Search,
    initiallyOpened: true,
    links: [
      { label: 'Doctor', link: '/' },
      { label: 'Laboratory Test', link: '/' },
    ],
  },
  {
    label: 'Profile',
    icon: User,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Laboratory', icon: ReportMedical },
  { label: 'Pharmacy', icon: MedicalCross },
  { label: 'History', icon: ReportMedical },
  { label: 'Add ones', icon: MedicalCross },
];

const Template: ComponentStory<typeof Sidebar> = () => (
  <Sidebar data={mockData} />
);

export const Primary = Template.bind({});
Primary.args = {};
