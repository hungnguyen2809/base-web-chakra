import { Box, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

const NAV_WIDTH = 250;

const PrivateLayout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={'gray.100'}>
      <AppSidebar navWidth={NAV_WIDTH} onClose={onClose} isOpen={isOpen} />
      <AppHeader navWidth={NAV_WIDTH} onOpen={onOpen} />

      <Box ml={{ base: 0, md: NAV_WIDTH }} p="4">
        <h1>Hung</h1>
      </Box>
    </Box>
  );
};

export default PrivateLayout;
