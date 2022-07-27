import { useAppSelector } from 'app/hooks';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { NavItem } from 'layouts/helper';
import React, { memo, useEffect } from 'react';
import {
  AiOutlineBell,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineSetting,
  AiOutlineUsb,
  AiOutlineUser,
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { actionToggleSidebar } from 'redux/appConfig/actions';
import { selectAppSidebarShow } from 'redux/appConfig/selectors';
import HeaderLogo from './HeaderLogo';
import NavSidebar from './NavSidebar';

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

const AppSidebar: React.FC = () => {
  const dispatch = useDispatch();

  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const showSidebar = useAppSelector(selectAppSidebarShow);


  useEffect(() => {
    if (showSidebar && SCREEN_WIDTH < 950) {
      dispatch(actionToggleSidebar(false));
    }
    if (!showSidebar && SCREEN_WIDTH >= 950) {
      dispatch(actionToggleSidebar(true));
    }
  }, [dispatch, SCREEN_WIDTH, showSidebar]);

  return (
    <React.Fragment>
      <HeaderLogo />
      <NavSidebar items={_nav} />
    </React.Fragment>
  );
};

export default memo(AppSidebar);
