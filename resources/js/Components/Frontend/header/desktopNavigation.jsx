import { aboutMenuData } from '@/Utils/data';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    GridItem,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    useColorModeValue,
    useDisclosure,
    useOutsideClick,
} from '@chakra-ui/react';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';
import InertiaChakraLink from '../styles/inertia-chakra-link';

const MegaMenuWrapperVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: '-50px',
  },
};

const ListVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const ListContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const ExpertCard = ({ expert }) => {
  const image = expert.media[0].original_url;
  return (
    <Flex
      shadow="lg"
      rounded="lg"
      bg={'blackAlpha.400'}
      direction="column"
      justifyContent="space-between"
      h={48}
      py={3}
      backdropFilter={'blur(3px)'}
      maxW="40"
      mx="auto"
    >
      <Box
        borderRadius="lg"
        p={3}
        display="flex"
        alignItems="center"
        justifyContent={'center'}
      >
        <Avatar
          src={image}
          name={expert.name}
          borderRadius="full"
          boxSize="75px"
        />
      </Box>
      <Box p={2} textAlign="center" mt={3} color="gray.200">
        <Text fontSize="sm" fontWeight="semibold">
          {expert.name}
        </Text>

        <Text fontSize="xs" fontWeight="normal">
          {expert.designation}
        </Text>
      </Box>
    </Flex>
  );
};

export const SiteMenu = ({ ...styles }) => (
  <Stack
    m="0"
    spacing="10px"
    as="ul"
    listStyleType="none"
    alignItems="center"
    direction="row"
    color="white"
    {...styles}
  />
);

const AboutMegaMenu = ({
  item,
  experts,
  introText,
  introImage,
  isOpen,
  ...rest
}) => {
  return (
    <Box
      bg={'rgba(8, 126, 164,0.9)'}
      backdropFilter={'blur(5px)'}
      mx="auto"
      px={8}
      py={10}
      display={'flex'}
    >
      <Grid
        templateColumns={{
          base: 1,
          md: 'repeat(5, 1fr)',
          xl: 'repeat(7, 1fr)',
        }}
        templateRows={{
          base: 'auto',
          md: 'repeat(2, minmax(auto, 250px))',
          xl: 'auto',
        }}
        pos="relative"
        gap={6}
        px={6}
        mx="auto"
        {...rest}
      >
        <GridItem colSpan={1} rowSpan={1} placeSelf="center">
          <Box
            as={motion.ul}
            variants={ListContainerVariants}
            initial={'closed'}
            whileInView={'open'}
          >
            {item.children.map(child => {
              return (
                <Box
                  key={child.title}
                  as={motion.li}
                  variants={ListVariants}
                  // initial={"closed"}
                  // whileInView={"open"}
                  fontSize={{ md: 'sm', xl: 'md' }}
                  fontWeight="medium"
                  position="relative"
                  cursor="pointer"
                  pb={{ md: 3, xl: 6 }}
                  color={'gray.200'}
                >
                  <InertiaChakraLink as={Link} href={child.url}>
                    {child.title}
                  </InertiaChakraLink>
                </Box>
              );
            })}
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ md: 4, xl: 3 }}
          rowSpan={1}
          width="full"
          placeSelf="center"
        >
          <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            rounded="xl"
            backgroundImage={`url(${introImage})`}
            backgroundSize="cover"
            bgRepeat={'no-repeat'}
            bgPos={'center center'}
            px={6}
            py={{ md: 12, xl: 16 }}
            _after={{
              content: "''",
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              backdropFilter: 'blur(3px)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              backgroundBlendMode: 'multiply',
            }}
          >
            <Text
              fontSize={'sm'}
              color={'gray.200'}
              m="0"
              alignSelf={'center'}
              zIndex={1}
              px={6}
              lineHeight="taller"
            >
              {introText}
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ md: 5, xl: 3 }} rowSpan={{ md: 1, xl: 1 }} gap={4}>
          <Text fontSize="xl" pb={4} fontWeight={'semibold'}>
            Our Experts
          </Text>
          <SimpleGrid columns={{ base: 6, md: 6, xl: 3 }} gap={2}>
            {experts &&
              experts.length > 0 &&
              experts.map(expert => {
                return (
                  <Box key={expert.name} colSpan={1}>
                    <ExpertCard expert={expert} />
                  </Box>
                );
              })}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
};

const OurWorkMegaMenu = ({ item, isOpen, ...rest }) => {
  return (
    <Box
      bg={'rgba(8, 126, 164,0.9)'}
      backdropFilter={'blur(5px)'}
      gap="4"
      px={8}
      py={10}
      w="full"
      display="flex"
      flexDirection={'column'}
      {...rest}
    >
      <VStack spacing={10} align={'center'} justify="center">
        <Text fontSize="2xl" fontFamily={'body'}>
          <InertiaChakraLink as={Link} href={item.children[0].url}>
            {item.children[0].title}
          </InertiaChakraLink>
        </Text>
        <SimpleGrid
          as={motion.ul}
          variants={ListContainerVariants}
          initial={'closed'}
          whileInView={'open'}
          // styleType={"lower-roman"}
          columns={2}
          // placeItems="end"
        >
          {item.children[0].children.map(grandChild => {
            return (
              <Box
                key={grandChild.title}
                as={motion.li}
                variants={ListVariants}
                fontSize={{
                  md: 'sm',
                  xl: 'md',
                }}
                position="relative"
                cursor="pointer"
                pb={{ md: 3, xl: 6 }}
                color={'gray.200'}
              >
                <InertiaChakraLink as={Link} href={grandChild.url}>
                  {grandChild.title}
                </InertiaChakraLink>
              </Box>
            );
          })}
        </SimpleGrid>
      </VStack>

      <Divider borderBottomWidth="2px" />
      <SimpleGrid columns={2} spacing={6}>
        {item.children.map((grandChildren, idx) => {
          if (idx !== 0) {
            return (
              <VStack spacing={10} key={grandChildren.title}>
                <InertiaChakraLink
                  as={Link}
                  href={grandChildren.url}
                  fontSize="2xl"
                >
                  {grandChildren.title}
                </InertiaChakraLink>
                <SimpleGrid
                  columns={2}
                  spacing={6}
                  as={motion.ul}
                  variants={ListContainerVariants}
                  initial={'closed'}
                  whileInView={'open'}
                >
                  {grandChildren.children &&
                    grandChildren.children.map(child => {
                      return (
                        <Box
                          key={child.title}
                          as={motion.li}
                          variants={ListVariants}
                          fontSize={{
                            md: 'sm',
                            xl: 'md',
                          }}
                          fontWeight="medium"
                          position="relative"
                          cursor="pointer"
                          pb={{ md: 3, xl: 6 }}
                          color={'gray.200'}
                        >
                          <InertiaChakraLink as={Link} href={child.url}>
                            {child.title}
                          </InertiaChakraLink>
                        </Box>
                      );
                    })}
                </SimpleGrid>
              </VStack>
            );
          }
        })}
      </SimpleGrid>
    </Box>
  );
};

const MegaMenu = ({ item, experts = null, isOpen }) => {
  if (item.name === 'Know Us') {
    return (
      <AboutMegaMenu
        item={item}
        experts={experts}
        introText={aboutMenuData.introText}
        introImage={aboutMenuData.introImage}
        isOpen={isOpen}
      />
    );
  } else if (item.name === 'Our Work') {
    return <OurWorkMegaMenu item={item} isOpen={isOpen} />;
  }
};

const SiteMenuItem = ({ item, ...rest }) => {
  const { url } = usePage();
  const { experts } = usePage().props;
  const active = item.url === `${url}`;
  const ref = React.useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  useOutsideClick({
    ref: ref,
    handler: onClose,
  });
  return (
    <>
      <Box
        as="li"
        role={'group'}
        display={'block'}
        onMouseEnter={() => onOpen()}
        //   onMouseLeave={() => onClose()}
        fontSize={{ base: 'sm', md: 'sm' }}
        rounded={'md'}
        color={active ? 'white' : useColorModeValue('gray.800', 'gray.200')}
        bg={active ? 'primary.500' : 'unset'}
        _hover={{
          bg: !active
            ? useColorModeValue('primary.50', 'primary.200')
            : 'primary.500',
          color: !active ? 'gray.800' : 'unset',
        }}
        lineHeight={'1.1'}
        transition="background .25s ease-in-out"
        pos={'relative'}
        {...rest}
      >
        <Stack p={2} direction="row" alignItems={'center'}>
          <InertiaChakraLink
            as={Link}
            transition={'all .3s ease'}
            href={item.url}
            textDecor={'none'}
            fontFamily={'heading'}
            _hover={{ textDecor: 'none' }}
          >
            {item.name}
          </InertiaChakraLink>
          {item.children?.length && (
            <Flex justify={'flex-end'} align={'center'} flex={1}>
              <Button
                isActive={isOpen}
                variant="link"
                size={'1rem'}
                rounded={'none'}
                aria-label="Menu DropDown"
              >
                <Icon
                  transform={isOpen ? 'rotate(180deg)' : ''}
                  color={
                    active ? 'white' : useColorModeValue('gray.800', 'gray.200')
                  }
                  _groupHover={{
                    color: !active ? 'gray.800' : 'white',
                  }}
                  transition="all .25s ease-in-out"
                  w={5}
                  h={5}
                  as={ChevronDownIcon}
                />
              </Button>
            </Flex>
          )}
        </Stack>
      </Box>
      {item.name === 'Our Work' || item.name === 'Know Us' ? (
        <Box
          ref={ref}
          as={motion.div}
          zIndex={5}
          w={'100dvw'}
          p={0}
          pos="absolute"
          left={0}
          top={'80px'}
          display={isOpen ? 'block' : 'none'}
          animate={isOpen ? 'open' : 'closed'}
          variants={MegaMenuWrapperVariants}
          bg="transparent"
          boxShadow="none"
          border={'none'}
          rounded={'none'}
          overflow={'hidden'}
        >
          <MegaMenu item={item} isOpen={isOpen} experts={experts} />
        </Box>
      ) : (
        <Box
          display={isOpen ? 'block' : 'none'}
          zIndex={999}
          p={0}
          pos="absolute"
          right={'450px'}
          top={'0'}
          rounded={'lg'}
          overflow={'hidden'}
          mx="auto"
          bg="white"
          shadow="dark-lg"
        >
          <Stack gap={1}>
            {item.children?.map(child => {
              return (
                <React.Fragment key={child.id}>
                  <SiteMenuItem item={child} rounded="none" />
                </React.Fragment>
              );
            })}
          </Stack>
        </Box>
      )}
    </>
  );
};

const DesktopNavigation = ({ menu, ...rest }) => {
  return (
    <Box
      as="nav"
      width="100%"
      display={{ base: 'none', lg: 'flex' }}
      zIndex={'999'}
      {...rest}
    >
      <SiteMenu ml="20px">
        {menu &&
          menu.map(navItem => {
            return (
              <React.Fragment key={navItem.title}>
                <SiteMenuItem item={navItem} />
              </React.Fragment>
            );
          })}
      </SiteMenu>
    </Box>
  );
};

export default DesktopNavigation;
