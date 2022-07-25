/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Collapse, Icon, List, ListIcon, ListItem } from '@chakra-ui/react';
import produce from 'immer';
import { NavItem } from 'layouts/helper';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

type NavSidebarProps = {
  items: NavItem[];
};

const NavSidebar: React.FC<NavSidebarProps> = ({ items }) => {
  const [openKey, setOpenKey] = useState<Array<string | number>>([]);
  // const [selectedKey, setSelectedKey] = useState<Array<string | number>>([]);

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

  const handleSelectedKey = (selected: string, keyParent: string[]) => () => {
    // if(keyParent.length > 0){
    // }
  };

  const navItem = (item: NavItem, key: string) => {
    const keys = key.split('.');
    keys.pop();

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
          _hover={{ backgroundColor: '#E2E8F0' }}
          borderBottom={'1px solid #E2E8F0'}
          onClick={handleSelectedKey(item.key, keys)}
        >
          {item.icon && <ListIcon as={item.icon} />}
          {item.name}
        </Box>
      </ListItem>
    );
  };

  const navGroup = (item: NavItem, key: string) => {
    const open = openKey.includes(item.key);
    return (
      <ListItem key={key}>
        <Box
          p={'3'}
          cursor="pointer"
          display={'flex'}
          alignItems={'center'}
          _hover={{ backgroundColor: '#E2E8F0' }}
          justifyContent="space-between"
          borderBottom={'1px solid #E2E8F0'}
          onClick={handleOpenKey(item.key, open)}
        >
          <Box as="p" display={'flex'} alignItems="center" gap={2} userSelect={'none'}>
            {item.icon && <ListIcon as={item.icon} />}
            {item.name}
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
          <List ml={'6'}>{item.items?.map((item2) => navItem(item2, `${item.key}.${item2.key}`))}</List>
        </Collapse>
      </ListItem>
    );
  };

  return <List>{items.map((item) => (item.items ? navGroup(item, item.key) : navItem(item, item.key)))}</List>;
};

export default NavSidebar;
