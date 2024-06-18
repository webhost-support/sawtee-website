import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { formatDate } from '@/Utils/helpers';

const PostMeta = ({ author, date, readingTime, ...rest }) => (
	<Box className="post-meta" {...rest}>
		<HStack rowGap="2" columnGap="8" justify={'start'} align={'center'} flexWrap={'wrap'} fontSize={'sm'}>
			{readingTime && <Text p={0}>Reading Time: {readingTime}</Text>}
			{author && <Text p={0}>Author: {author}</Text>}
			{date && (
				<Text fontSize={'sm'} p={0} as={'time'} dateTime={date}>
					Published at: {formatDate(date)}
				</Text>
			)}
		</HStack>
	</Box>
);

export default PostMeta;
