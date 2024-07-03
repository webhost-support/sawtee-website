import { SocialMenu } from '@/Components/Frontend/header/social-menu';
import { MapModel, StyledChakraLink } from '@/Components/Frontend/index';
import {
  Box,
  Grid,
  GridItem,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Tooltip,
  UnorderedList,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  CaretRightIcon,
  EmailIcon,
  FaxIcon,
  LocationPin,
  MailBoxIcon,
  PhoneIcon,
} from '../icons';

const FooterSection = ({ children, ...rest }) => (
  <Box
    as="footer"
    pos="relative"
    bg={useColorModeValue('blackAlpha.50', 'var(--color-darker)')}
    mx={'auto'}
    {...rest}
  >
    {children}
  </Box>
);

const FooterSectionGroup = ({ children, ...rest }) => (
  <Grid maxWidth="7xl" mx="auto" width="100%" gap={8} {...rest}>
    {children}
  </Grid>
);

const FooterSectionItem = ({ children, ...rest }) => (
  <GridItem {...rest}>{children}</GridItem>
);

const ListHeader = ({ children }) => {
  return (
    <Text
      fontSize={{ base: 'xl', lg: '2xl' }}
      fontWeight={'medium'}
      fontFamily={'heading'}
      mb={2}
    >
      {children}
    </Text>
  );
};

const Widget = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkcolor = useColorModeValue(
    'var(--chakra-colors-gray-700)',
    'var(--chakra-colors-whiteAlpha-700)'
  );
  const hoverColor = useColorModeValue(
    'var(--chakra-colors-gray-900)',
    'var(--chakra-colors-whiteAlpha-900)'
  );

  item.title.includes('Contact') ? (
    <Stack align="flex-start" id={item.title}>
      <ListHeader>{item.title}</ListHeader>
      <VStack
        as={UnorderedList}
        style={{ listStyle: 'none', margin: 0 }}
        align="flex-start"
        spacing={3}
      >
        {item.children?.map(child_item => {
          const { url, title } = child_item;
          if (title.includes('Address')) {
            return (
              <ListItem key={title}>
                <ListIcon
                  style={{
                    color: linkcolor,
                    verticalAlign: 'middle',
                  }}
                  as={LocationPin}
                />
                <Tooltip
                  label={'click to view map'}
                  hasArrow
                  placement="top-end"
                  openDelay={200}
                  closeDelay={250}
                >
                  <StyledChakraLink
                    onClick={onOpen}
                    color={linkcolor}
                    _hover={{
                      color: hoverColor,
                    }}
                  >
                    {title}
                  </StyledChakraLink>
                </Tooltip>
                <MapModel isOpen={isOpen} onClose={onClose} mapLink={url} />
              </ListItem>
            );
          }

          if (title.includes('Fax')) {
            return (
              <ListItem key={title}>
                <ListIcon
                  style={{
                    color: linkcolor,
                    verticalAlign: 'middle',
                  }}
                  as={FaxIcon}
                />
                <Tooltip label={'Fax'} hasArrow placement="right-end">
                  <StyledChakraLink
                    href={url ? url : null}
                    color={linkcolor}
                    _hover={{
                      color: hoverColor,
                    }}
                  >
                    {title}
                  </StyledChakraLink>
                </Tooltip>
              </ListItem>
            );
          }
          if (title.includes('Phone')) {
            return (
              <ListItem key={title}>
                <ListIcon
                  style={{
                    color: linkcolor,
                    verticalAlign: 'middle',
                  }}
                  as={PhoneIcon}
                />
                <StyledChakraLink
                  href={url ? url : null}
                  color={linkcolor}
                  _hover={{
                    color: hoverColor,
                  }}
                >
                  {title}
                </StyledChakraLink>
              </ListItem>
            );
          }
          if (title.includes('Email')) {
            return (
              <ListItem key={title}>
                <ListIcon
                  style={{
                    color: linkcolor,
                    verticalAlign: 'middle',
                  }}
                  as={EmailIcon}
                />
                <StyledChakraLink
                  href={url ? url : null}
                  color={linkcolor}
                  _hover={{
                    color: hoverColor,
                  }}
                >
                  {title}
                </StyledChakraLink>
              </ListItem>
            );
          }
          if (title.includes('Box')) {
            return (
              <ListItem key={title}>
                <ListIcon
                  style={{
                    color: linkcolor,
                    verticalAlign: 'middle',
                  }}
                  as={MailBoxIcon}
                  fill="none"
                  strokeWidth={2}
                />
                <StyledChakraLink
                  href={url ? url : null}
                  color={linkcolor}
                  _hover={{
                    color: hoverColor,
                  }}
                >
                  {title}
                </StyledChakraLink>
              </ListItem>
            );
          }
        })}
      </VStack>
    </Stack>
  ) : (
    <Stack align="flex-start" id={item.title}>
      <ListHeader>{item.title}</ListHeader>
      <VStack
        as={UnorderedList}
        style={{ listStyle: 'none', margin: 0 }}
        align={'flex-start'}
        spacing={3}
      >
        {item.children?.map(child_item => {
          const { url, title } = child_item;

          return (
            <ListItem key={title}>
              <ListIcon
                as={CaretRightIcon}
                style={{
                  verticalAlign: 'middle',
                  color: linkcolor,
                }}
              />
              <StyledChakraLink
                href={url}
                color={linkcolor}
                _hover={{
                  color: hoverColor,
                }}
              >
                {title}
              </StyledChakraLink>
            </ListItem>
          );
        })}
      </VStack>
    </Stack>
  )
};

const Footer = ({ menu = null, socialMenu = null }) => {
  return (
    <FooterSection px={{ base: 8, md: 10, lg: 16 }} pt={12} pb={6}>
      <FooterSectionGroup
        templateColumns={{
          base: '1fr',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(6, 1fr)',
        }}
        gap={4}
      >
        {Object.entries(menu).map(([key, item]) => {
          return (
            <FooterSectionItem
              key={key}
              colSpan={{ base: 1, lg: 2 }}
              placeSelf={{ base: 'start', md: 'center' }}
            >
              <Widget item={item} />
            </FooterSectionItem>
          );
        })}
      </FooterSectionGroup>

      <Stack
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        alignItems="center"
        maxW="3xl"
        mx="auto"
        mt="16"
        gap={6}
      >
        <FooterSectionItem
          colSpan={1}
          fontWeight="bold"
          fontFamily="mono"
          textTransform="uppercase"
          fontSize="md"
        >
          © {new Date().getFullYear()} {'SAWTEE'}
        </FooterSectionItem>

        <FooterSectionItem colSpan={1} borderColor="accent.400">
          <SocialMenu ml="0" menu={socialMenu} />
        </FooterSectionItem>
      </Stack>
    </FooterSection>
  );
};

export default Footer;
