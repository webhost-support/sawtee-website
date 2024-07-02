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

const SocialShare = ({ url }) => {
  return (
    <Box mt="8">
      <HStack>
        <Text fontSize={'2xl'} fontWeight={'semibold'}>
          Share:{' '}
        </Text>
        <FacebookShareButton
          url={url}
          children={<FacebookIcon size="28px" />}
        />
        <TwitterShareButton url={url} children={<XIcon size="28px" />} />
        <LinkedinShareButton
          url={url}
          children={<LinkedinIcon size="28px" />}
        />

        <EmailShareButton url={url} children={<EmailIcon size="28px" />} />
      </HStack>
    </Box>
  );
};

export default SocialShare;
