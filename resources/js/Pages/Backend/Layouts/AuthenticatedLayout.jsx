import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Show,
  useDisclosure,
} from '@chakra-ui/react';

import { DashBoardMenuItems } from '@/Utils/data';
import Header from './Partials/Header';
import Sidebar from './Partials/Sidebar';

export default function Authenticated({ user, children }) {
  const sidebar = useDisclosure();
  return (
    <Box as="section" bg="var(--color-body-bg)" minH="100dvh">
      <Show above="md">
        <Sidebar menu={DashBoardMenuItems} />
      </Show>
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar
            menu={DashBoardMenuItems}
            isOpen={sidebar.isOpen}
            borderRight="none"
          />
        </DrawerContent>
      </Drawer>
      <Box
        as="main"
        ml={{
          base: 0,
          md: 48,
          // lg: 48,
        }}
        transition=".3s ease"
        position={'relative'}
      >
        <Header
          sidebar={sidebar}
          name={user.name}
          image={user?.image}
          isOpen={sidebar.isOpen}
          position="sticky"
          top="0"
          zIndex="100"
        />

        <Box as="section" p="4">
          <Box
            borderWidth="4px"
            p={{ base: 4, md: 8 }}
            borderStyle="dashed"
            rounded="md"
            minH={'calc(100vh - 6rem)'}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
