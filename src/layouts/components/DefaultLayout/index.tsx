import { Box } from '@chakra-ui/react';
import classNames from 'classnames/bind';
import React from 'react';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import AppSidebar from '../AppSidebar';
import styles from './../GlobalStyles.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout: React.FC = () => {
  return (
    <Box className={cx('app_root')}>
      <Box className={cx('app_header')}>
        <AppHeader />
      </Box>
      <Box className={cx('app_sidebar')}>
        <AppSidebar />
      </Box>
      <Box className={cx('app_main')} padding="3">
        <AppContainer />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
