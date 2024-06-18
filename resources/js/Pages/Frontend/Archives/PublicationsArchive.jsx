import { Grid, GridItem, Text, VStack, Box, SimpleGrid, LinkBox, Image, useColorModeValue } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import React from 'react';
import Section from '@/Components/Frontend/styles/section';
import SidebarWidget from '@/Components/Frontend/sidebarWidget';
import MainLayout from '../Layout/MainLayout';
import { GlassBox } from '@/Components/Frontend';
import SubscriptionCard from '@/Components/Frontend/subscriptionCard';
import WebsiteHead from '@/Components/Frontend/Head';
import { PageLayout } from '../Layout/PageLayout';
import InertiaChakraLinkOverlay from '@/Components/Frontend/styles/inertia-chakra-link-overlay';
import InertiaChakraLink from '@/Components/Frontend/styles/inertia-chakra-link';

export default function PublicationsArchive({
	category,
	infocus,
	sawteeInMedia,
	publications,
	showSubscriptionBox = true,
	featured_image,
	srcSet,
}) {
	return (
		<MainLayout>
			<WebsiteHead
				title={category.meta_title ? category.meta_title : category.name}
				description={category.meta_description}
				image={featured_image ? featured_image.original_url : '/assets/logo-sawtee.webp'}
			/>
			<PageLayout featured_image={featured_image} srcSet={srcSet} title={category.name} showBackgroundPattern={false}>
				<Section pb="80px" py={{ base: '24px', lg: '80px' }} px={{ base: '32px', lg: '80px' }} size={'full'} mx="auto">
					<Grid
						templateColumns={{ base: '1fr', xl: 'repeat(6, 1fr)' }}
						gap={10}
						pos={'relative'}
						placeContent={'center'}
					>
						<GridItem colSpan={{ base: 1, xl: 4 }} px={4} className="publication-slider-wrapper">
							<ItemsList items={category.children} publications={publications} />
						</GridItem>

						<GridItem colSpan={{ base: 1, xl: 2 }} as={VStack} spacing={12} className="sidebar">
							{sawteeInMedia && (
								<SidebarWidget
									array={sawteeInMedia}
									title={'SAWTEE in Media'}
									link={'/category/sawtee-in-media'}
									maxW={['md', 'lg', 'xl']}
								/>
							)}
							{infocus && (
								<SidebarWidget array={infocus} title={'Infocus'} link={'/category/infocus'} maxW={['md', 'lg', 'xl']} />
							)}

							{showSubscriptionBox && (
								<GlassBox maxW={['md', 'lg', 'xl']} py="4" px="8" rounded="xl">
									<SubscriptionCard />
								</GlassBox>
							)}
						</GridItem>
					</Grid>
				</Section>
			</PageLayout>
		</MainLayout>
	);
}

const ItemComponent = ({ item, publications }) => {
	return (
		<Box
			key={item.name}
			py={12}
			borderBottom={'2px solid'}
			borderColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}
			border
		>
			<Text
				as="h3"
				id={item.name}
				fontSize={{ base: 'xl', lg: '2xl' }}
				fontFamily="heading"
				fontWeight={'bold'}
				color={'var(--color-text)'}
				mb={30}
			>
				{
					<Link title={`Explore ${item.name}`} href={`/category/publications/${item.slug}`}>
						{item.name}
					</Link>
				}
			</Text>
			{publications[item.slug].length > 0 && (
				<SimpleGrid minChildWidth={'140px'} spacing={10}>
					{publications[item.slug].map(publication => {
						return (
							<Box>
								<LinkBox
									as="article"
									maxW={'140px'}
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
									<InertiaChakraLinkOverlay
										title={publication.title}
										href={publication.file ? `/publications/${publication.file.name}` : '#'}
										target="_blank"
									>
										<Image
											src={`${publication.media[0]?.original_url}`}
											alt={publication.title}
											title={publication.title}
											rounded="md"
											objectFit="cover"
											w={'140px'}
											aspectRatio={3 / 4}
											loading="lazy"
											fallbackSrc="/assets/SM-placeholder-150x150.png"
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
							</Box>
						);
					})}
				</SimpleGrid>
			)}
		</Box>
	);
};

// Recursive function to render items and their children
const renderItems = (items, publications) => {
	return items.map(item => (
		<React.Fragment key={item.id}>
			<ItemComponent item={item} publications={publications} />
			{item.children && item.children.length > 0 && !item.children[0].children && (
				<React.Fragment key={item.id}>renderItems(item.children, publications)</React.Fragment>
			)}
		</React.Fragment>
	));
};

// Main component that receives the data
const ItemsList = ({ items, publications }) => {
	return renderItems(items, publications);
};
