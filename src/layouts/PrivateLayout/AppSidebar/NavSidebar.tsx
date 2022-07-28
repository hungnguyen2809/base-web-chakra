import { Box, BoxProps, CloseButton, Flex, List, Text, useColorModeValue } from '@chakra-ui/react';
import { NavLinkItem } from 'layouts/helper';
import React from 'react';
import SimpleBar from 'simplebar-react';
import NavGroup from './NavGroup';
import NavItem from './NavItem';

interface SidebarProps extends BoxProps {
  items: NavLinkItem[];
  navWidth: number;
  onClose: () => void;
}

const NavSidebar: React.FC<SidebarProps> = ({ items, navWidth, onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: navWidth }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <SimpleBar style={{ height: '80vh' }}>
        <List>
          {items.map((link) =>
            link.items ? <NavGroup key={link.key} item={link} /> : <NavItem key={link.key} item={link} />
          )}
        </List>
      </SimpleBar>
    </Box>
  );
};

export default NavSidebar;
