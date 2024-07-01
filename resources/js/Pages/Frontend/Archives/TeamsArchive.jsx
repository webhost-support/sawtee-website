import WebsiteHead from '@/Components/Frontend/Head';
import Section from '@/Components/Frontend/styles/section';
import { Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import '../../../../css/our-team.css';
import MainLayout from '../Layout/MainLayout';
import { PageLayout } from '../Layout/PageLayout';
import TeamMember from '../TeamMember';

const TeamsArchive = ({ category, teams, featured_image, srcSet }) => {
  return (
    <MainLayout>
      <WebsiteHead
        title={category.meta_title ? category.meta_title : category.name}
        description={category.meta_description}
        image={featured_image ? featured_image.original_url : '/assets/logo-sawtee.webp'}
      />
      <PageLayout featured_image={featured_image} srcSet={srcSet} title={category.name} showBackgroundPattern={false}>
        <Section pb="80px" py={{ base: '24px', lg: '80px' }} px={{ base: '32px', lg: '80px' }} size={'full'} mx="auto">
          <Container maxW="5xl" p={{ base: 5, md: 10 }}>
            <Flex justifyContent="center" mb={8}>
              <Heading as="h3" fontSize="3xl" fontWeight="bold" mb={3} textAlign="center">
                Our Experts
              </Heading>
            </Flex>

            {!teams.data || teams.data.length <= 0 ? (
              <Center>
                <Text fontSize={['2xl', '4xl']}>"No posts found"</Text>
              </Center>
            ) : (
              <VStack spacing={10}>
                {teams.data.map(post => {
                  return (
                    <Fragment key={post.id}>
                      <TeamMember member={post} />
                    </Fragment>
                  );
                })}
              </VStack>
            )}
          </Container>
        </Section>
      </PageLayout>
    </MainLayout>
  );
};

export default TeamsArchive;
