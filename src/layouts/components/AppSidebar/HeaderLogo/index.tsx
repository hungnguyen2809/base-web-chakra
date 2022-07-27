import { Box } from '@chakra-ui/react';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './../../GlobalStyles.module.scss';

const cx = classNames.bind(styles);

const HeaderLogo: React.FC = () => {
  return <Box className={cx('app_logo')}>HeaderLogo</Box>;
};

export default HeaderLogo;
