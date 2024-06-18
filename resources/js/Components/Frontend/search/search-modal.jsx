import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useColorModeValue,
	LinkBox,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { GlassBox } from '..';
import InertiaChakraLinkOverlay from '../styles/inertia-chakra-link-overlay';
import { Link } from '@inertiajs/react';

const SearchModal = ({ posts, query, children, ...rest }) => (
	<Modal isCentered size={{ base: 'lg', md: 'xl', lg: '3xl' }} scrollBehavior="inside" motionPreset="scale" {...rest}>
		<ModalOverlay bg="blackAlpha.300" backdropFilter="blur(8px) hue-rotate(90deg)" />

		<ModalContent my="0" padding="40px" bg={useColorModeValue('gray.100', 'var(--color-darker)')}>
			<ModalHeader>{query && posts ? `Found ${posts.length} result for "${query}"` : 'Search'}</ModalHeader>
			<ModalBody>
				{children}

				{posts &&
					posts.map(post => {
						return (
							<LinkBox as={GlassBox} role="group" shadow="md" rounded="xl" p={6} mb={4}>
								<Flex gap={6} justify={'center'} direction="column">
									<InertiaChakraLinkOverlay
										as={Link}
										href={`/category/${post.category.slug}/${post.slug}`}
										_groupHover={{
											textDecoration: 'underline',
											textUnderlineOffset: '3px',
										}}
									>
										<Heading
											fontSize={{
												base: 'sm',
												lg: 'md',
											}}
											as="h4"
										>
											{post.title}
										</Heading>
									</InertiaChakraLinkOverlay>

									<Text
										fontSize={'xs'}
										overflow="hidden"
										textOverflow="ellipsis"
										display="-webkit-box"
										noOfLines="3"
										sx={{
											webkitLineClamp: '3',
											webkitBoxOrient: 'vertical',
										}}
										dangerouslySetInnerHTML={{
											__html: post.excerpt,
										}}
									/>
								</Flex>
							</LinkBox>
						);
					})}
			</ModalBody>
			<ModalCloseButton size="lg" rounded="full" />
		</ModalContent>
	</Modal>
);

export default SearchModal;
