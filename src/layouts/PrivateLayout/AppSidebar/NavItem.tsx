import React from 'react';
import { Box, Flex, Icon, ListItem } from '@chakra-ui/react';
import { NavLinkItem } from 'layouts/helper';

interface NavItemProps {
  item: NavLinkItem;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const active = window.location.pathname === item.key;

  return (
    <ListItem mx="4" mb="2" cursor="pointer" userSelect="none" color={active ? 'gray.800' : 'gray.500'}>
      <Flex
        p="3"
        role="group"
        align="center"
        borderRadius="lg"
        boxShadow={active ? 'base' : 'none'}
        bgColor={active ? 'gray.100' : 'transparent'}
        _hover={{
          bg: 'gray.200',
          color: 'gray.800',
        }}
      >
        {item.icon && (
          <Icon
            mr="4"
            fontSize="20"
            _groupHover={{
              color: 'gray.800',
            }}
            as={item.icon}
          />
        )}
        <Box as="span" fontWeight={active ? 'bold' : 'normal'}>
          {item.name}
        </Box>
      </Flex>
    </ListItem>
  );
};

export default NavItem;
