import { Drawer, DrawerContent } from '@chakra-ui/react';
import { NavLinkItem } from 'layouts/helper';
import React from 'react';
import {
  FiBellOff,
  FiBookOpen,
  FiCompass,
  FiHome,
  FiMessageSquare,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi';
import NavSidebar from './NavSidebar';

interface AppSidebarProps {
  isOpen: boolean;
  navWidth: number;
  onClose: () => void;
}

const LinkItems: Array<NavLinkItem> = [
  { name: 'Home', icon: FiHome, key: '/home' },
  { name: 'Trending', icon: FiTrendingUp, key: '/trending' },
  { name: 'Explore', icon: FiCompass, key: '/explore' },
  { name: 'Favourites', icon: FiStar, key: '/Favourites' },
  {
    name: 'Notification',
    key: '/notification',
    icon: FiBellOff,
    items: [
      {
        name: 'Read',
        icon: FiBookOpen,
        key: '/notification/red',
        items: [
          {
            name: 'Trending',
            icon: FiTrendingUp,
            key: '/notification/red/trending',
          },
          {
            name: 'Explore',
            icon: FiCompass,
            key: '/notification/red/explore',
          },
        ],
      },
      {
        name: 'Book',
        icon: FiMessageSquare,
        key: '/notification/unred',
        items: [
          {
            name: 'Trending',
            icon: FiTrendingUp,
            key: '/notification/unred/trending',
          },
          {
            name: 'Explore',
            icon: FiCompass,
            key: '/notification/unred/explore',
          },
        ],
      },
    ],
  },
  { name: 'Settings', icon: FiSettings, key: '/Settings' },
];

const AppSidebar: React.FC<AppSidebarProps> = ({ isOpen, navWidth, onClose }) => {
  return (
    <React.Fragment>
      <NavSidebar navWidth={navWidth} items={LinkItems} onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <NavSidebar navWidth={navWidth} items={LinkItems} onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default AppSidebar;
