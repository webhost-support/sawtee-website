import Section from '@/Components/Frontend/styles/section';
import { AspectRatio, Box, Button, Heading, Image, Link, SimpleGrid, Text, Tooltip, VStack } from '@chakra-ui/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { SocialMenu } from '@/Components/Frontend/header/social-menu';
import { FaxIcon, LocationPin, PhoneIcon } from '@/Components/Frontend/icons';
import { EmailIcon } from '@chakra-ui/icons';
import { Fragment } from 'react';

const Contact = ({ content, pageData }) => {
  return (
    <Section px={['4', '8']} py="80px" w="5xl" maxW="full" paddingBlock="50px" className={'contact-page-content'}>
      <Box p={{ sm: 5, md: 8 }} borderRadius="xl" boxShadow="lg">
        <Heading as="h3" textAlign="center">
        South Asia Watch on Trade, Economics and Environment (SAWTEE)
        </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>

            <Box textAlign={{ base: 'center', lg: 'left' }}>
              <Heading as="h4" fontSize={{ base: 'xl', md: '2xl' }} textTransform={'uppercase'} pb="0.75rem">
                <Text as="span" fontWeight={'semibold'}>
                  Working days:{' ' + 'Monday-Friday'}
                </Text>
                <Text as="span" fontWeight={'semibold'}></Text>
                <br />
                <Text as="span" fontWeight={'semibold'} fontSize={'md'}>
                  Office hours:
                  {' ' + pageData.opening_hours}
                </Text>
              </Heading>
              <VStack
                py={{ base: 3, md: 6, lg: 8 }}
                spacing={3}
                alignItems={{
                  base: 'center',
                  lg: 'start',
                }}
              >
                {pageData.phone_numbers.map(number => {
                  return (
                    <Fragment key={number}>
                      <ActionButton href={`tel:${number}`} icon={<PhoneIcon />}>
                        {number}
                      </ActionButton>
                    </Fragment>
                  );
                })}

                <ActionButton icon={<FaxIcon />}>
                  <Tooltip hasArrow placement="top" label="Fax Machine">
                    {pageData.fax}
                  </Tooltip>
                </ActionButton>

                <ActionButton href={`mailto:${pageData.email}`} icon={<EmailIcon />}>
                  {pageData.email}
                </ActionButton>
                <ActionButton leftIcon={<LocationPin />}>{pageData.address}</ActionButton>
              </VStack>

              <SocialMenu ml="0" menu={pageData.social_menus} />
            </Box>

            <Box p={8}>
              <Zoom>
                <Image width={'100%'} height="400px" src={pageData.location_image} />
              </Zoom>
            </Box>
          </SimpleGrid>
          {pageData.map_url && (
            <AspectRatio ration={16 / 9} mt="8">
              <iframe
                src={pageData.map_url}
                width="100%"
                height="500"
                allowfullscreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AspectRatio>
          )}
        </Box>
    </Section>
  );
};

const ActionButton = ({ href, children, icon, ...rest }) => {
  return (
    <Button variant="ghost" leftIcon={icon} {...rest}>
      {href ? <Link href={href}>{children}</Link> : children}
    </Button>
  );
};

export default Contact;
