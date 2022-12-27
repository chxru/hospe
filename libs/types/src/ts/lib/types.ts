import { Icon } from 'tabler-icons-react';

export interface SidebarSubItemProps {
  icon: Icon;
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export interface SidebarProps {
  data: SidebarSubItemProps[];
  children: JSX.Element;
}
