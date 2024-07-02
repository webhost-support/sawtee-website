import { Content } from '@/Components/Frontend/index';
import { Box, Heading } from '@chakra-ui/react';

const DefaultPage = ({ sections, content, ...rest }) => {
  return (
    <Content
      className="page-content"
      px={{ base: '32px', md: '0' }}
      mx="auto"
      py={'80px'}
      maxW={'2xl'}
      {...rest}
    >
      {content && (
        <Box>
          <Box>
            <Box
              as="p"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </Box>
        </Box>
      )}

      {sections &&
        sections.map(({ title, description }) => {
          return (
            <Box>
              <Heading as="h3" fontSize={['lg', 'xl', '2xl']} py={'4'} mb="4">
                {title}
              </Heading>
              <Box>
                <Box
                  as="p"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </Box>
            </Box>
          );
        })}
    </Content>
  );
};

export default DefaultPage;
