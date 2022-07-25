import { ChakraProvider, Container } from '@chakra-ui/react';
import NavSidebar from 'layouts/components/NavSidebar';
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
import theme from './theme';

const _nav: NavItem[] = [
  { name: 'Trang chủ', key: '/home', icon: AiOutlineHome },
  { name: 'Tài khoản', key: '/account', icon: AiOutlineUser },
  { name: 'Cài đặt', key: '/settings', icon: AiOutlineSetting },
  {
    name: 'Thông báo',
    key: '/notifi',
    icon: AiOutlineBell,
    items: [
      { name: 'Đã đọc', key: 'red', icon: AiOutlineRead },
      { name: 'Chưa đọc', key: 'unred', icon: AiOutlineUsb },
    ],
  },
  {
    name: 'Ưa thích',
    key: '/favaious',
    icon: AiOutlineHeart,
  },
];

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <NavSidebar items={_nav} />
      </Container>
    </ChakraProvider>
  );
};

export default App;
