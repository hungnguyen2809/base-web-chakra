import {
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Collapse,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {
  FiBell,
  FiBellOff,
  FiBookOpen,
  FiChevronDown,
  FiCompass,
  FiHome,
  FiMenu,
  FiMessageSquare,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface NavLinkItem {
  name: string;
  key: string;
  icon?: IconType;
  items?: NavLinkItem[];
  to?: string;
}

const NAV_WIDTH = 250;
const HEADER_HEIGHT = 80;

const LinkItems: Array<NavLinkItem> = [
  { name: 'Home', icon: FiHome, key: '/home' },
  { name: 'Trending', icon: FiTrendingUp, key: '/trending' },
  { name: 'Explore', icon: FiCompass, key: '/explore' },
  { name: 'Favourites', icon: FiStar, key: '/Favourites' },
  {
    name: 'Notification',
    key: '/notification',
    icon: FiBellOff,
    items: [
      {
        name: 'Read',
        icon: FiBookOpen,
        key: '/notification/red',
        items: [
          {
            name: 'Trending',
            icon: FiTrendingUp,
            key: '/notification/red/trending',
          },
          {
            name: 'Explore',
            icon: FiCompass,
            key: '/notification/red/explore',
          },
        ],
      },
      {
        name: 'Book',
        icon: FiMessageSquare,
        key: '/notification/unred',
        items: [
          {
            name: 'Trending',
            icon: FiTrendingUp,
            key: '/notification/unred/trending',
          },
          {
            name: 'Explore',
            icon: FiCompass,
            key: '/notification/unred/explore',
          },
        ],
      },
    ],
  },
  { name: 'Settings', icon: FiSettings, key: '/Settings' },
];

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: NAV_WIDTH }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: NAV_WIDTH }}
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
          {LinkItems.map((link) =>
            link.items ? <NavGroup key={link.key} item={link} /> : <NavItem key={link.key} item={link} />
          )}
        </List>
      </SimpleBar>
    </Box>
  );
};

interface NavItemProps {
  item: NavLinkItem;
}

const NavItem = ({ item }: NavItemProps) => {
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

interface NavGroupProps {
  item: NavLinkItem;
}

const NavGroup = ({ item }: NavGroupProps) => {
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
        color={active ? 'gray.800' : 'gray.500'}
        _hover={{
          bg: 'gray.200',
          color: 'gray.800',
        }}
        onClick={() => setOpenKey(!openKey)}
      >
        <Flex align={'center'} as="p" p="3">
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
          <Box as="span" fontWeight={active ? 'medium' : 'normal'}>
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

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: NAV_WIDTH }}
      px={{ base: 4, md: 4 }}
      height={`${HEADER_HEIGHT}px`}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s">
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
