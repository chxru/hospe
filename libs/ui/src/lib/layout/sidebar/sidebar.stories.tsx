import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Gauge,
  Notes,
  CalendarStats,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
} from 'tabler-icons-react';
import { LinksGroupProps } from './linkGroup';
import { Sidebar } from './sidebar';

export default {
  component: Sidebar,
  title: 'Layout/Sidebar',
} as ComponentMeta<typeof Sidebar>;

const mockData: LinksGroupProps[] = [
  { label: 'Dashboard', icon: Gauge },
  {
    label: 'Market news',
    icon: Notes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: CalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: PresentationAnalytics },
  { label: 'Contracts', icon: FileAnalytics },
  { label: 'Settings', icon: Adjustments },
  {
    label: 'Security',
    icon: Lock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const Template: ComponentStory<typeof Sidebar> = () => (
  <Sidebar data={mockData} />
);

export const Primary = Template.bind({});
Primary.args = {};
