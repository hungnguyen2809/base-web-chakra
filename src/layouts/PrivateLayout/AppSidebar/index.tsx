import { Drawer, DrawerContent } from '@chakra-ui/react';
import { NavLinkItem } from 'layouts/helper';
import React, { memo } from 'react';
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
  { name: 'Trang chủ', icon: FiHome, key: '/home' },
  { name: 'Xếp hạng', icon: FiTrendingUp, key: '/trending' },
  { name: 'Tra cứu', icon: FiCompass, key: '/explore' },
  { name: 'Yêu thích', icon: FiStar, key: '/Favourites' },
  {
    name: 'Quản lý khách hàng',
    key: '/customer',
    icon: FiBellOff,
    items: [
      {
        name: 'Quản lý khách hàng tại bưu cục',
        icon: FiTrendingUp,
        key: '/customer/red/trending',
      },
      {
        name: 'Xếp hạng khách hàng',
        icon: FiCompass,
        key: '/customer/red/explore',
      },
      {
        name: 'Tra cứu khách hàng',
        icon: FiCompass,
        key: '/customer/red/customer',
      },
    ],
  },
  {
    name: 'Thông báo',
    key: '/notification',
    icon: FiBellOff,
    items: [
      {
        name: 'Chưa đọc',
        icon: FiBookOpen,
        key: '/notification/red',
        items: [
          {
            name: 'Chưa đọc một nửa',
            icon: FiTrendingUp,
            key: '/notification/red/trending',
          },
          {
            name: 'Xếp hạng đã đọc',
            icon: FiCompass,
            key: '/notification/red/explore',
          },
          {
            name: 'Tra cứu đã đọc',
            icon: FiCompass,
            key: '/notification/red/customer',
          },
        ],
      },
      {
        name: 'Sách',
        icon: FiMessageSquare,
        key: '/notification/unred',
        items: [
          {
            name: 'Sách bán chạy',
            icon: FiTrendingUp,
            key: '/notification/unred/trending',
          },
          {
            name: 'Tìm kiếm sách',
            icon: FiCompass,
            key: '/notification/unred/explore',
          },
        ],
      },
    ],
  },
  { name: 'Cài đặt', icon: FiSettings, key: '/Settings' },
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

export default memo(AppSidebar);
