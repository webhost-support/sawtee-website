import AirBnbCard from '@/components/Frontend/AirBnbCard';
import { GlassBox } from '@/components/Frontend/index';
import InertiaChakraLink from '@/components/Frontend/styles/inertia-chakra-link';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  HStack,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Fragment } from 'react';

export default function MediaFellows({ content, pageData }) {
  return (
    <Box
      className="page-content"
      px={{ base: '32px', md: '0' }}
      mx="auto"
      py={'80px'}
      maxW={'2xl'}
    >
      <Box dangerouslySetInnerHTML={{ __html: content }} />
      <GlassBox mt={8} px={6}>
        {pageData &&
          pageData.map(mediaFellow => {
            return (
              <Fragment key={mediaFellow.id}>
                <Fellows mediaFellow={mediaFellow} />
              </Fragment>
            );
          })}
      </GlassBox>
    </Box>
  );
}

export const Fellows = ({ mediaFellow }) => {
  const { id, name, avatar, designation, bio, published_stories, experience } =
    mediaFellow;

  return (
    <Box id={id} my={10}>
      <HStack alignItems="center">
        <Avatar name={name} src={avatar} height={'80px'} width={'80px'} />
        <HStack ml={6}>
          <Heading as="h2" fontSize="xl" fontFamily="heading" m="0">
            {name}
          </Heading>
          <Text fontSize="xs" m="0" p="0">
            {designation}
          </Text>
        </HStack>
      </HStack>

      <Text my={8}>{bio}</Text>

      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            {'Published Stories'}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel px={['5', '10']}>
            <UnorderedList>
              {published_stories &&
                published_stories.length > 0 &&
                published_stories.map(({ title, link }) => {
                  return (
                    <ListItem key={title}>
                      <InertiaChakraLink href={link}>{title}</InertiaChakraLink>
                    </ListItem>
                  );
                })}
            </UnorderedList>

            <SimpleGrid minChildWidth="300px" spacing="6" mt={10}>
              {published_stories &&
                published_stories.length > 0 &&
                published_stories.map(({ image_src, title, media_src }, i) => {
                  return (
                    <AirBnbCard
                      key={i}
                      img={image_src}
                      title={title}
                      mediaSrc={media_src}
                    />
                  );
                })}
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            {'Experience with the Fellowship'}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel px={['5', '10']}>
            {experience.length > 0 &&
              experience.map(exp => {
                return (
                  <Text
                    my={2}
                    fontSize={'sm'}
                    dangerouslySetInnerHTML={{
                      __html: exp,
                    }}
                  />
                );
              })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
