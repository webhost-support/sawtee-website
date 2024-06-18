import { Box, Divider, Heading, List, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { GlassBox } from '.';

export default function SimpleList({ heading, children, ...rest }) {
	return (
		<Box px={6} borderLeft={'2px solid'} borderColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')} {...rest}>
			{heading && (
				<Heading as="h3" fontSize={'md'} textTransform="uppercase" mb="1rem">
					{heading}
				</Heading>
			)}
			<List as="ul">{children}</List>
		</Box>
	);
}
