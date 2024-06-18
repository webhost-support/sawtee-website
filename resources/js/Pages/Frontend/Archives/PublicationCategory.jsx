import {
	Box,
	Grid,
	GridItem,
	Image,
	LinkBox,
	SimpleGrid,
	Skeleton,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Section from '@/Components/Frontend/styles/section';
import SidebarWidget from '@/Components/Frontend/sidebarWidget';
import MainLayout from '../Layout/MainLayout';
import InertiaChakraLinkOverlay from '@/Components/Frontend/styles/inertia-chakra-link-overlay';
import WebsiteHead from '@/Components/Frontend/Head';
import InertiaChakraLink from '@/Components/Frontend/styles/inertia-chakra-link';
import Pagination from '@/Components/Frontend/Pagination';
import { PageLayout } from '../Layout/PageLayout';

export default function Publications({ category, publications, infocus, sawteeInMedia, featured_image, srcSet }) {
	const contentColor = useColorModeValue('rgba(12, 17, 43, 0.8)', 'whiteAlpha.800');

	return (
		<MainLayout>
			<WebsiteHead
				title={category.meta_title || category.name}
				description={category.meta_description}
				image={featured_image ? featured_image.original_url : '/assets/logo-sawtee.webp'}
			/>
			<PageLayout featured_image={featured_image} srcSet={srcSet} title={category.name} showBackgroundPattern={false}>
				<Section pb="80px" py={{ base: '24px', lg: '80px' }} px={{ base: '32px', lg: '80px' }} size={'full'} mx="auto">
					<Grid
						templateColumns={{ base: '1fr', lg: 'repeat(5, 1fr)' }}
						gap={20}
						pos={'relative'}
						placeContent={'center'}
					>
						<GridItem colSpan={{ base: 1, lg: 3 }} px={4}>
							<SimpleGrid spacingX={6} spacingY={24} columns={{ base: 2, md: 3 }}>
								{publications.data.length > 0 ? (
									publications.data.map(publication => {
										return (
											<VStack key={publication.id}>
												<LinkBox
													as="article"
													maxW="140px"
													mx="auto"
													_before={{
														content: `''`,
														position: 'absolute',
														top: 0,
														left: 0,
														width: `100%`,
														height: '100%',
														borderRadius: 'var(--chakra-radii-md)',
														background: 'rgba(0,0,0,0.1)',
														backgroundBlendMode: 'overlay',
													}}
													_hover={{
														_before: {
															background: 'transparent',
														},
													}}
												>
													<InertiaChakraLinkOverlay href={`/publications/${publication.file.name}`} target="_blank">
														<Image
															src={`${publication.media[0]?.original_url}`}
															alt={publication.title}
															rounded="md"
															objectFit="cover"
															w="140px"
															fallbackSrc="/assets/SM-placeholder-150x150.png"
															aspectRatio={3 / 4}
														/>
													</InertiaChakraLinkOverlay>
												</LinkBox>
												{publication.title && (
													<InertiaChakraLink href={`/publications/${publication.file.name}`}>
														<Text mt={4} fontSize="sm" fontWeight="semibold" textAlign="center">
															{publication.title}
														</Text>
														{publication.subtitle && (
															<Text mt={1} fontSize="xs" textAlign="center">
																{publication.subtitle}
															</Text>
														)}
													</InertiaChakraLink>
												)}
											</VStack>
										);
									})
								) : (
									<>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
											return (
												<Box key={`100 + ${item.toString()}`} cursor="pointer">
													<Skeleton
														rounded="md"
														startColor="gray.300"
														endColor="gray.400"
														w={{
															base: '160px',
															md: '180px',
															lg: '180px',
														}}
														aspectRatio={3 / 4}
														mx="auto"
													/>
												</Box>
											);
										})}
									</>
								)}
							</SimpleGrid>
							{publications.data.length >= 12 && (
								<Pagination
									links={publications.links}
									currentPage={publications.current_page}
									totalPages={publications.last_page}
									nextPage={publications.next_page_url}
									prevPage={publications.prev_page_url}
									width="full"
									mt={12}
								/>
							)}
						</GridItem>

						<GridItem
							colSpan={{ base: 1, lg: 2 }}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							className="sidebar"
						>
							{sawteeInMedia && (
								<SidebarWidget
									array={sawteeInMedia}
									title={'SAWTEE in Media'}
									link={'/category/sawtee-in-media'}
									maxW={['md', 'lg', 'xl']}
									mt={12}
								/>
							)}
							{infocus && (
								<SidebarWidget
									array={infocus}
									title={'Infocus'}
									link={'/category/infocus'}
									maxW={['md', 'lg', 'xl']}
									mt={12}
									position={'sticky'}
									top={'8.5rem'}
								/>
							)}
						</GridItem>
					</Grid>
				</Section>
			</PageLayout>
		</MainLayout>
	);
}
