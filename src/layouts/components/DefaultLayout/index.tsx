import { Box } from '@chakra-ui/react';
import classNames from 'classnames/bind';
import { NavItem } from 'layouts/helper';
import React from 'react';
import {
  AiOutlineBell,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineSetting,
  AiOutlineUsb,
  AiOutlineUser,
} from 'react-icons/ai';
import HeaderLogo from '../HeaderLogo';
import NavSidebar from '../NavSidebar';
import styles from './../GlobalStyles.module.scss';

const _nav: NavItem[] = [
  { name: 'Trang chủ', key: '/home', icon: AiOutlineHome },
  { name: 'Tài khoản', key: '/account', icon: AiOutlineUser },
  { name: 'Cài đặt', key: '/settings', icon: AiOutlineSetting },
  {
    name: 'Thông báo',
    key: '/notifi',
    icon: AiOutlineBell,
    items: [
      { name: 'Đã đọc', key: '/notifi/red', icon: AiOutlineRead },
      { name: 'Chưa đọc', key: '/notifi/unred', icon: AiOutlineUsb },
    ],
  },
  {
    name: 'Ưa thích',
    key: '/favaious',
    icon: AiOutlineHeart,
  },
  {
    name: 'Tính năng',
    key: '/feature',
    icon: AiOutlineBell,
    items: [
      { name: 'Đã đọc', key: '/feature/red', icon: AiOutlineRead },
      {
        name: 'Chưa đọc',
        key: '/feature/unred',
        icon: AiOutlineUsb,
        items: [
          {
            name: 'Ưa thích',
            key: '/feature/unred/favaious',
            icon: AiOutlineHeart,
          },
        ],
      },
    ],
  },
];

const cx = classNames.bind(styles);

const DefaultLayout: React.FC = () => {
  return (
    <Box className={cx('app_root')}>
      <Box className={cx('app_header')}>
        <p>Header</p>
      </Box>
      <Box className={cx('app_sidebar')}>
        <HeaderLogo />
        <NavSidebar items={_nav} />
      </Box>
      <Box className={cx('app_main')} padding="3">
        <p>Container</p>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
