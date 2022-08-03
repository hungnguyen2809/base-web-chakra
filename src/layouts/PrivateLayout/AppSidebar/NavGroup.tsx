import { Box, Collapse, Flex, Icon, List, ListItem } from '@chakra-ui/react';
import { NavLinkItem } from 'layouts/helper';
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import NavItem from './NavItem';

interface NavGroupProps {
  item: NavLinkItem;
}

const NavGroup: React.FC<NavGroupProps> = ({ item }) => {
  const [openKey, setOpenKey] = useState<boolean>(false);
  const active = window.location.pathname.includes(item.key);

  useEffect(() => {
    setOpenKey(window.location.pathname.startsWith(item.key));
  }, [item.key]);

  return (
    <ListItem>
      <Flex
        mb="2"
        mx="4"
        role="group"
        align="center"
        cursor="pointer"
        userSelect="none"
        borderRadius="lg"
        justify="space-between"
        color={active ? '#FFFFFD' : '#BFDCCF'}
        _hover={{ bg: '#2A6E4F' }}
        onClick={() => setOpenKey(!openKey)}
      >
        <Flex align={'center'} as="p" p="3">
          {item.icon && <Icon mr="4" fontSize="20" as={item.icon} />}
          <Box as="span" fontWeight={'medium'}>
            {item.name}
          </Box>
        </Flex>
        <Icon
          as={MdOutlineKeyboardArrowDown}
          fontSize={20}
          transform={openKey ? 'rotate(-180deg)' : 'none'}
          transition={'all ease-in 0.3s'}
        />
      </Flex>

      <Collapse in={openKey} animateOpacity unmountOnExit>
        <List ml="4" borderLeft="1px solid" borderLeftColor={openKey ? 'gray.300' : 'transparent'}>
          {item.items?.map((item2) => {
            return item2.items ? <NavGroup item={item2} key={item2.key} /> : <NavItem item={item2} key={item2.key} />;
          })}
        </List>
      </Collapse>
    </ListItem>
  );
};

export default NavGroup;
