import { Box, BoxProps, CloseButton, Flex, List, Text } from '@chakra-ui/react';
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
    <Box transition="3s ease" bg={'#115634'} w={{ base: 'full', md: navWidth }} h="full" pos="fixed" zIndex={9999} {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text color={'white'} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <SimpleBar style={{ height: '80vh', width: navWidth }}>
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
