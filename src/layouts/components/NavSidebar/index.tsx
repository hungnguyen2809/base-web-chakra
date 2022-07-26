import { Box, Collapse, Icon, List, ListIcon, ListItem } from '@chakra-ui/react';
import produce from 'immer';
import { NavItem } from 'layouts/helper';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

type NavSidebarProps = {
  items: NavItem[];
};

const getRealKey = (key: string): string => {
  const paths = key.split('/').filter((p) => !p.includes(':'));
  return paths.join('/');
};

const NavSidebar: React.FC<NavSidebarProps> = ({ items }) => {
  const [openKey, setOpenKey] = useState<Array<string | number>>([]);

  const handleOpenKey = (key: string, open: boolean) => () => {
    let keys: Array<string | number> = [];
    if (open) {
      keys = openKey.filter((k) => k !== key);
    } else {
      keys = produce(openKey, (draft) => {
        draft.push(key);
      });
    }

    setOpenKey(keys);
  };

  const navItem = (item: NavItem, key: string) => {
    const active = false;

    return (
      <ListItem key={key}>
        <Box
          as="p"
          p="3"
          gap={2}
          cursor="pointer"
          display="flex"
          userSelect="none"
          alignItems="center"
          _hover={{ backgroundColor: '#E2E8F0', borderLeft: '5px solid gray' }}
          borderLeft={'5px solid'}
          borderLeftColor={active ? 'primary.500' : 'transparent'}
          textColor={active ? 'primary.500' : 'gray.800'}
          borderBottom={'1px solid #E2E8F0'}
        >
          {item.icon && <ListIcon as={item.icon} />}
          <Box as='span'>{item.name}</Box>
        </Box>
      </ListItem>
    );
  };

  const navGroup = (item: NavItem, key: string) => {
    const open = openKey.includes(item.key);
    const active = false;
    return (
      <ListItem key={key}>
        <Box
          p={'3'}
          cursor="pointer"
          display={'flex'}
          alignItems={'center'}
          borderLeft={'5px solid'}
          borderLeftColor={active ? 'primary.500' : 'transparent'}
          textColor={active ? 'primary.500' : 'gray.800'}
          _hover={{ backgroundColor: '#E2E8F0', borderLeft: '5px solid gray' }}
          justifyContent="space-between"
          borderBottom={'1px solid #E2E8F0'}
          onClick={handleOpenKey(item.key, open)}
        >
          <Box as="p" display={'flex'} alignItems="center" gap={2} userSelect={'none'}>
            {item.icon && <ListIcon as={item.icon} />}
            <Box as='span'>{item.name}</Box>
          </Box>
          <Icon
            as={MdOutlineKeyboardArrowDown}
            fontSize={20}
            transform={open ? 'rotate(180deg)' : 'none'}
            transition={'rotate'}
            animation={'ease-in'}
            transitionDelay={'0.3s'}
          />
        </Box>
        <Collapse in={open} animateOpacity unmountOnExit>
          <List pl={'6'}>
            {item.items?.map((item2) => {
              return item2.items ? navGroup(item2, getRealKey(item2.key)) : navItem(item2, getRealKey(item2.key));
            })}
          </List>
        </Collapse>
      </ListItem>
    );
  };

  return (
    <SimpleBar>
      <List>
        {items.map((item) => {
          return item.items ? navGroup(item, getRealKey(item.key)) : navItem(item, getRealKey(item.key));
        })}
      </List>
    </SimpleBar>
  );
};

export default NavSidebar;
