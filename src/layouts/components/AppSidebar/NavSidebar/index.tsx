import { Box, Collapse, Icon, List, ListIcon, ListItem } from '@chakra-ui/react';
import produce from 'immer';
import { NavItem } from 'layouts/helper';
import React, { useMemo, useState } from 'react';
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

  const cssActive = useMemo(() => {
    return {
      color: 'primary.800',
      backgroundColor: 'primary.100',
      borderLeft: '5px solid',
      borderLeftColor: 'primary.600',
    };
  }, []);

  const navItem = (item: NavItem, key: string) => {
    const active = false;

    return (
      <ListItem key={key}>
        <Box
          as="p"
          p="3"
          mb={'1'}
          gap={2}
          cursor="pointer"
          display="flex"
          userSelect="none"
          alignItems="center"
          _hover={cssActive}
          borderLeft={'5px solid'}
          borderLeftColor={active ? 'primary.600' : 'transparent'}
          color={active ? 'primary.800' : 'gray.700'}
          bgColor={active ? 'primary.100' : 'transparent'}
        >
          {item.icon && <ListIcon as={item.icon} />}
          <Box as="span">{item.name}</Box>
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
          mb={'1'}
          p={'3'}
          cursor="pointer"
          display={'flex'}
          alignItems={'center'}
          justifyContent="space-between"
          _hover={cssActive}
          borderLeft={'5px solid'}
          borderLeftColor={active ? 'primary.600' : 'transparent'}
          color={active ? 'primary.800' : 'gray.700'}
          bgColor={active ? 'primary.100' : 'transparent'}
          onClick={handleOpenKey(item.key, open)}
        >
          <Box as="p" display={'flex'} alignItems="center" gap={2} userSelect={'none'}>
            {item.icon && <ListIcon as={item.icon} />}
            <Box as="span">{item.name}</Box>
          </Box>
          <Icon
            as={MdOutlineKeyboardArrowDown}
            fontSize={20}
            transform={open ? 'rotate(-180deg)' : 'none'}
            transition={'all ease-in 0.3s'}
          />
        </Box>
        <Collapse in={open} animateOpacity unmountOnExit>
          <List ml={'6'} borderLeft="1px solid" borderLeftColor={open ? 'gray.200' : 'transparent'}>
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
