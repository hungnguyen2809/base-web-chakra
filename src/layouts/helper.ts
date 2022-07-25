import { IconType } from 'react-icons';

export type NavItem = {
  key: string;
  name: string;
  to?: string;
  icon?: IconType;
  items?: NavItem[];
};
