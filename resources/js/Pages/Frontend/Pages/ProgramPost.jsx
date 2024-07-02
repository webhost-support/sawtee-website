import { Box } from '@chakra-ui/react';

const ProgramPost = ({ post }) => {
  return <Box dangerouslySetInnerHTML={{ __html: post.content }} />;
};

export default ProgramPost;
