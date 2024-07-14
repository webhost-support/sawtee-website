import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';

export const NavItem = props => {
  const { icon, children, ...rest } = props;

  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="2"
      cursor="pointer"
      _hover={{
        bg: 'gray.100',
        _dark: {
          bg: 'blackAlpha.300',
        },
      }}
      role="group"
      transition=".15s ease"
      fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
      {...rest}
    >
      {icon && <Icon mx="2" boxSize="4" as={icon} />}
      {children}
    </Flex>
  );
};

export default function Sidebar({ menu, isOpen, props }) {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: 'var(--color-darker)',
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w={isOpen ? 'full' : 48}
      {...props}
    >
      <Flex
        flexDir={'column'}
        gap="2"
        px="4"
        py="5"
        justify="center"
        align="center"
      >
        <Image maxW="40px" src="/favicon.ico" alt="logo" />

        <Text fontSize="sm" fontWeight={'semibold'}>
          Website CMS
        </Text>
      </Flex>
      <Flex direction="column" as="nav" aria-label="Main Navigation">
        {menu?.map(item => {
          return (
            <Box key={item.name} role="group">
              <Link
                href={route(item.route)}
                preserveState={true}
                preserveScroll={true}
              >
                <NavItem icon={item.icon}>{item.name}</NavItem>
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}
