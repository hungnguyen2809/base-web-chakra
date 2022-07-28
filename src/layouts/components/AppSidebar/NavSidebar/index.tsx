import { Box, Collapse, Icon, List, ListIcon, ListItem } from '@chakra-ui/react';
import produce from 'immer';
import { NavItem } from 'layouts/helper';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

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

  const navItem = (item: NavItem, key: string, level: number) => {
    const active = false;

    return (
      <ListItem key={key}>
        <Box
          as="p"
          p="12px"
          gap={2}
          cursor="pointer"
          display="flex"
          userSelect="none"
          alignItems="center"
          pl={level > 0 ? `${level * 25}px` : '12px'}
          _hover={{
            color: 'primary.800',
            backgroundColor: 'primary.100',
            borderRight: '3px solid',
            borderRightColor: 'primary.600',
          }}
          borderRight={'3px solid'}
          borderRightColor={active ? 'primary.600' : 'transparent'}
          color={active ? 'primary.800' : 'gray.700'}
        >
          <Box w="25px" as="span" display="flex" alignItems="start">
            {item.icon && <ListIcon as={item.icon} />}
          </Box>
          {item.name}
        </Box>
      </ListItem>
    );
  };

  const navGroup = (item: NavItem, key: string, level: number) => {
    const open = openKey.includes(item.key);
    const active = false;
    return (
      <ListItem key={key}>
        <Box
          p="12px"
          cursor="pointer"
          display={'flex'}
          alignItems={'center'}
          justifyContent="space-between"
          pl={level > 0 ? `${level * 25}px` : '12px'}
          _hover={{
            color: 'primary.800',
            backgroundColor: 'primary.100',
          }}
          color={active ? 'primary.800' : 'gray.700'}
          onClick={handleOpenKey(item.key, open)}
        >
          <Box as="p" display={'flex'} alignItems="center" gap={2} userSelect={'none'}>
            <Box w="25px" as="span" display="flex" alignItems="start">
              {item.icon && <ListIcon as={item.icon} />}
            </Box>
            {item.name}
          </Box>
          <Icon
            as={MdOutlineKeyboardArrowDown}
            fontSize={20}
            transform={open ? 'rotate(-180deg)' : 'none'}
            transition={'all ease-in 0.3s'}
          />
        </Box>

        <Collapse in={open} animateOpacity unmountOnExit>
          <List>
            {item.items?.map((item2) => {
              const newLevel = level + 1;
              return item2.items
                ? navGroup(item2, getRealKey(item2.key), newLevel)
                : navItem(item2, getRealKey(item2.key), newLevel);
            })}
          </List>
        </Collapse>
      </ListItem>
    );
  };

  return (
    <Box height="80vh" overflowY="auto">
      <List>
        {items.map((item) => {
          return item.items ? navGroup(item, getRealKey(item.key), 0) : navItem(item, getRealKey(item.key), 0);
        })}
      </List>
    </Box>
  );
};

export default NavSidebar;
