import { Box, HStack, Text } from '@chakra-ui/react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon,
} from 'react-share';

const SocialShare = ({ url, title, excerpt }) => {
  return (
    <Box mt="8">
      <HStack>
        <Text fontSize={'2xl'} fontWeight={'semibold'}>
          Share:{' '}
        </Text>
        <FacebookShareButton url={url}>
          <FacebookIcon size="28px" />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title} related={['SAWTEENP']}>
          <XIcon size="28px" />
        </TwitterShareButton>
        <LinkedinShareButton
          url={url}
          title={title}
          summary={excerpt}
          source="SAWTEE"
        >
          <LinkedinIcon size="28px" />{' '}
        </LinkedinShareButton>

        <EmailShareButton url={url}>
          <EmailIcon size="28px" />
        </EmailShareButton>
      </HStack>
    </Box>
  );
};

export default SocialShare;
