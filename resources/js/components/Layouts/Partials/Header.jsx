import {
  ChevronDownIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Show,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from '@inertiajs/react';

export default function Header({ name, image, sidebar, ...rest }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      aria-label="Top Navigation"
      align="center"
      justify={{ base: 'space-between', md: 'end' }}
      w="full"
      px="4"
      bg="white"
      _dark={{
        bg: 'var(--color-darker)',
      }}
      borderBottomWidth="1px"
      color="inherit"
      h="14"
      {...rest}
    >
      <Show below="md">
        <IconButton
          aria-label="Menu Toggle"
          display={{
            base: 'inline-flex',
          }}
          onClick={sidebar.onOpen}
          icon={<HamburgerIcon />}
          size="sm"
        />
      </Show>
      <HStack spacing={{ base: '2', md: '6' }}>
        <Button size="sm" aria-label="Theme Toggle" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Flex align="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar size={'sm'} name={name} src={image} title={name} />

                <Box
                  display={{
                    base: 'none',
                    md: 'flex',
                  }}
                >
                  <ChevronDownIcon />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              px="2"
              fontSize="sm"
            >
              <Text>{name.toUpperCase()}</Text>
              <MenuDivider />

              <Link as="button" href={route('admin.profile.edit')}>
                Profile
              </Link>
              <Link as="button" href={route('logout')} method="post">
                Sign out
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
