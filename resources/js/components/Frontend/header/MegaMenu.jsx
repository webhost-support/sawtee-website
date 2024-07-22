import { Separator } from '@/components/ui/separator';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

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

const AboutMegaMenu = ({ item, experts, introText, introImage, ...rest }) => {
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
                  fontSize={{ md: 'sm', xl: 'md' }}
                  fontWeight="medium"
                  position="relative"
                  cursor="pointer"
                  pb={{ md: 3, xl: 6 }}
                  color={'gray.200'}
                >
                  <MenuLink link={child.url} text={child.title} />
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

const OurWorkMegaMenu = ({ item, ...rest }) => {
  return (
    <ul
      className="grid p-4 w-[900px] grid-cols-1 px-8 py-10 gap-4  bg-opacity-90 backdrop-filter backdrop-blur-lg"
      {...rest}
    >
      <div className="w-full flex flex-col gap-10 justify-center items-center mx-auto">
        <Link className="text-2xl font-serif" href={item.children[0].url}>
          {item.children[0].title}
        </Link>
        <motion.ul
          variants={ListContainerVariants}
          initial={'closed'}
          whileInView={'open'}
          className="grid grid-cols-2 gap-4 w-full"
        >
          {item.children[0].children.map(grandChild => {
            return (
              <motion.li
                key={grandChild.title}
                variants={ListVariants}
                className="text-sm md:text-md col-span-1 relative cursor-pointer pb-3 "
              >
                <Link href={grandChild.url} className="no-underline">
                  {grandChild.title}{' '}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <Separator className="w-full my-4 border-b-2" />
        <div className="grid grid-cols-2 gap-6">
          {item.children.map((grandChildren, idx) => {
            if (idx !== 0) {
              return (
                <div className="flex flex-col gap-6" key={grandChildren.title}>
                  <Link
                    href={grandChildren.url}
                    className="no-underline text-2xl"
                  >
                    {grandChildren.title}
                  </Link>

                  <motion.ul
                    className="gird grid-cols-2 gap-6"
                    variants={ListContainerVariants}
                    initial={'closed'}
                    whileInView={'open'}
                  >
                    {grandChildren.children?.map(child => {
                      return (
                        <motion.li
                          key={child.title}
                          variants={ListVariants}
                          className="text-sm md:text-md relative cursor-pointer pb-3 text-primary-foreground"
                        >
                          <Link href={child.url} className="no-underline">
                            {child.title}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>
              );
            }
          })}
        </div>
      </div>
    </ul>
  );
};

const MegaMenu = ({ item, experts = null }) => {
  if (item.name === 'Know Us') {
    return (
      <AboutMegaMenu
        item={item}
        experts={experts}
        introText={aboutMenuData.introText}
        introImage={aboutMenuData.introImage}
      />
    );
  }
  if (item.name === 'Our Work') {
    return <OurWorkMegaMenu item={item} />;
  }
};

export default MegaMenu;
