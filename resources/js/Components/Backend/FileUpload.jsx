import { Box, Stack, Text, Image, Flex, Icon, Heading, useColorModeValue } from '@chakra-ui/react';

export const PreviewImage = props => {
	const { src, alt, ...rest } = props;
	return (
		<Box borderWidth="1px" borderStyle="solid" borderColor="gray.400" rounded="sm" {...rest}>
			<Image height="100%" width="100%" objectFit={'cover'} src={src} alt={alt} />
		</Box>
	);
};

export default function FileUpload(props) {
	const { children, text = 'Drop image here, or click to select', accept, ...rest } = props;
	return (
		<Flex
			mt={1}
			justify="center"
			px={6}
			pt={5}
			pb={6}
			pos="relative"
			_dark={{
				color: 'gray.500',
			}}
			borderWidth={'medium'}
			borderColor={useColorModeValue('gray.600', 'gray.300')}
			borderStyle="dashed"
			rounded="md"
			{...rest}
		>
			<Stack spacing={1} textAlign="center">
				<Icon
					mx="auto"
					boxSize={12}
					color="gray.400"
					_dark={{
						color: 'gray.500',
					}}
					stroke="currentColor"
					fill="none"
					viewBox="0 0 48 48"
					aria-hidden="true"
				>
					<path
						d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</Icon>
				<Flex
					fontSize="sm"
					color="gray.600"
					_dark={{
						color: 'gray.400',
					}}
					alignItems="baseline"
				>
					<Heading
						cursor="pointer"
						fontSize="md"
						_hover={{
							color: 'brand.400',
							_dark: {
								color: 'brand.300',
							},
						}}
					>
						<span>{text}</span>
					</Heading>
				</Flex>
				<Text
					fontSize="xs"
					color="gray.500"
					_dark={{
						color: 'gray.50',
					}}
				>
					{accept}
				</Text>
			</Stack>
			{children}
		</Flex>
	);
}
