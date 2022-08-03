import React from 'react';
import { Box, Flex, Icon, ListItem } from '@chakra-ui/react';
import { NavLinkItem } from 'layouts/helper';

interface NavItemProps {
  item: NavLinkItem;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const active = window.location.pathname === item.key;

  return (
    <ListItem mx="4" mb="2" cursor="pointer" userSelect="none" color={active ? '#FFFFFD' : '#BFDCCF'}>
      <Flex
        p="3"
        role="group"
        align="center"
        borderRadius="lg"
        boxShadow={active ? 'base' : 'none'}
        bgColor={active ? '#2A6E4F' : 'transparent'}
        _hover={{ bg: '#2A6E4F' }}
      >
        {item.icon && <Icon mr="4" fontSize="20" as={item.icon} />}
        <Box as="span" fontWeight={active ? 'bold' : 'medium'}>
          {item.name}
        </Box>
      </Flex>
    </ListItem>
  );
};

export default NavItem;
