import { Box, useDisclosure } from '@chakra-ui/react';
import NhapDonLe from 'pages/NhanDonLe';
import React from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

const NAV_WIDTH = 250;

const PrivateLayout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" minW="fit-content" width="100vw" bg={'gray.100'}>
      <AppSidebar navWidth={NAV_WIDTH} onClose={onClose} isOpen={isOpen} />
      <AppHeader navWidth={NAV_WIDTH} onOpen={onOpen} />

      <Box p="4" ml={{ base: 0, md: NAV_WIDTH }}>
        <NhapDonLe />
      </Box>
    </Box>
  );
};

export default PrivateLayout;
