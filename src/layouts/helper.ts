import { IconType } from 'react-icons';

export type NavItem = {
  key: string;
  name: string;
  to?: string;
  icon?: IconType;
  items?: NavItem[];
};

export type NavLinkItem = {
  name: string;
  key: string;
  icon?: IconType;
  items?: NavLinkItem[];
  to?: string;
};
