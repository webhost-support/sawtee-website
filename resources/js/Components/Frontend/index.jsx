import {
	Box,
	Button,
	HStack,
	Heading,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Flex,
	useColorModeValue,
	Grid,
	GridItem,
	LinkBox,
	SimpleGrid,
	IconButton,
	LinkOverlay,
	ListItem,
	Badge,
	Skeleton,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { HiArrowRight, HiChevronDown, HiChevronRight } from 'react-icons/hi';
import FullWidthCarousel from '@/Components/Frontend/FullWidthCarousel';
import { formatDate } from '@/Utils/helpers';
import MultiPostsCarousel from '@/Components/Frontend/MultiPostsSlider';
import InertiaChakraLink from '@/Components/Frontend/styles/inertia-chakra-link';
import InertiaChakraLinkOverlay from '@/Components/Frontend/styles/inertia-chakra-link-overlay';
import Feature from '@/Components/Frontend/feature';
import VideoCarousel from './VideoCarousel';
import SimpleList from './SimpleList';
import Section from '@/Components/Frontend/styles/section';
import { PlayIcon } from './icons';

export const ListItemVariant = {
	initial: {
		y: 50,
		transition: {
			y: { stiffness: 1000 },
		},
	},
	whileInView: {
		y: 0,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
};

export const ListVariant = {
	initial: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
	whileInView: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
};

export const CarouselSection = ({ slides, responsiveImages, carouselHeight }) => {
	return (
		slides &&
		slides.length > 0 && (
			<FullWidthCarousel
				slides={slides}
				navigation={false}
				loop={true}
				rewind={true}
				carouselHeight={carouselHeight}
				responsiveImages={responsiveImages}
			/>
		)
	);
};

export const AboutSection = ({ data }) => {
	return (
		<SimpleGrid minChildWidth={'300px'} spacing={16} alignItems="center" maxW={'5xl'} mx="auto">
			{data.map(item => {
				return (
					<Box key={item.id} pos="relative">
						<Box
							pos="absolute"
							border="4px solid"
							borderColor="blackAlpha.400"
							left={'25px'}
							top="-20px"
							w="full"
							h="full"
							rounded={'2xl'}
						/>

						<LinkBox position={'relative'} rounded={'2xl'} boxShadow={'2xl'} role="group">
							<IconButton
								aria-label={'Play Button'}
								variant={'ghost'}
								_groupHover={{ color: 'white' }}
								icon={<PlayIcon w={12} h={12} />}
								size={'lg'}
								color={'whiteAlpha.700'}
								position={'absolute'}
								left={'50%'}
								top={'50%'}
								transform={'translateX(-50%) translateY(-50%)'}
							/>

							<LinkOverlay href={item.link}>
								<Image src={item.image_src} alt={item.title} fit="cover" rounded="xl" align={'center'} />
							</LinkOverlay>
						</LinkBox>
					</Box>
				);
			})}
		</SimpleGrid>
	);
};

export const SawteeInMediaSection = ({ articles, link }) => {
	return (
		<MultiPostsCarousel
			posts={articles}
			spacing={30}
			pagination={false}
			showCategoryTag={true}
			scrollbar={true}
			my={10}
		>
			<InertiaChakraLink as={Link} href={link}>
				<ExploreButton size={['xs', 'sm']} text="More on sawtee in media " px={10} />
			</InertiaChakraLink>
		</MultiPostsCarousel>
	);
};

export const InfoSection = () => {
	return (
		<Box className="section">
			<SimpleGrid
				id="chart-wrapper"
				p={{ base: '6', lg: '8' }}
				columns={2}
				justifyContent="center"
				alignItems="center"
				minH={'500px'}
			>
				<iframe
					title="Reform Meter Dashboard_revised"
					width="100%"
					height="804"
					src="https://app.powerbi.com/view?r=eyJrIjoiOGRhNGUzNzUtYTk2NS00YzFjLWE3NDAtM2NjMjdjYTg1NmE1IiwidCI6IjIzM2IyYmFhLTdjNzUtNGI0YS04YjNiLTE3NTNkYmQzODBmOSIsImMiOjF9"
					allowFullScreen={true}
				></iframe>
			</SimpleGrid>
		</Box>
	);
};

export const ReformMonitorSection = ({ feature }) => {
	return <Feature feature={feature} />;
};

export const OutreachSection = ({ sawteeInMedia, events }) => {
	return (
		<Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(6, 1fr)' }} gap={10}>
			<GridItem colSpan={{ base: 1, md: 3 }}>
				<SimpleList heading={'sawtee in media'}>
					{sawteeInMedia.map(item => {
						return (
							<ListItem key={item.id} mb="1rem">
								<Box>
									<InertiaChakraLink
										textDecor="underline"
										textUnderlineOffset="3px"
										href={`/category/sawtee-in-media/${item.slug}`}
									>
										<Text fontSize={'0.875rem'} lineHeight={'short'}>
											{item.title}
										</Text>
									</InertiaChakraLink>
									<Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'.75rem'} mt={2}>
										{formatDate(item.published_at)}
									</Text>
								</Box>
							</ListItem>
						);
					})}
				</SimpleList>
				<ExploreButton size={['xs', 'sm']} text="More in sawtee in media " link={`/category/sawtee-in-media`} />
			</GridItem>

			<GridItem colSpan={{ base: 1, md: 3 }}>
				<SimpleList heading={'Featured Events'}>
					{events.map(event => {
						const featured_image =
							event.media.length > 0
								? event.media.filter(item => item.collection_name === 'post-featured-image')[0]?.original_url
								: '/assets/SM-placeholder-150x150.png';
						// const srcSet = featured_image
						//     ? featured_image.responsive_images.responsive.urls
						//     : null;

						return (
							<ListItem key={event.id} className="list-tem" mb="1rem">
								<LinkBox
									as={HStack}
									// w="full"
									align="center"
									justify="space-between"
									gap={4}
								>
									<Box flexGrow={1} maxW="70%">
										<InertiaChakraLinkOverlay
											as={Link}
											textDecor="underline"
											textUnderlineOffset="3px"
											href={`/category/featured-events/${event.slug}`}
										>
											<Text fontSize={'0.875rem'} lineHeight={'short'}>
												{event.title}
											</Text>
										</InertiaChakraLinkOverlay>
										<Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'.75rem'} mt={2}>
											{formatDate(event.published_at)}
										</Text>
									</Box>

									{featured_image && (
										<Box maxW="70%" boxSize={'90px'}>
											<Image
												src={featured_image}
												alt={event.title}
												w="full"
												border="1px solid"
												borderColor={'gray.400'}
												p={1}
												rounded="sm"
												aspectRatio={3 / 2}
											/>
										</Box>
									)}
								</LinkBox>
							</ListItem>
						);
					})}
				</SimpleList>
				<ExploreButton size={['xs', 'sm']} text="More on featured events" link={`/category/featured-events`} />
			</GridItem>
		</Grid>
	);
};

export const InfocusSection = ({ data }) => {
	return (
		<SimpleList heading={null} borderLeft={'none'}>
			{data.map(item => {
				return (
					<ListItem key={item.id} mb="1rem">
						<LinkBox>
							<Box>
								<InertiaChakraLinkOverlay
									as={Link}
									target="_blank"
									textDecor="underline"
									textUnderlineOffset="3px"
									href={`/category/in-focus/${item.slug}`}
								>
									<Text lineHeight={'short'}>{item.title}</Text>
								</InertiaChakraLinkOverlay>
								<Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'.875rem'} mt={4}>
									{item.excerpt}
								</Text>
							</Box>
						</LinkBox>
					</ListItem>
				);
			})}
		</SimpleList>
	);
};

export const FeaturedPublications = ({ publications }) => {
	return (
		<GlassBox py={4}>
			<SimpleList border="none" heading={'featured publications'}>
				{publications.map(publication => {
					const media = publication.media.length
						? publication.media.filter(media => media.collection_name === 'publication_featured_image')[0].original_url
						: '/assets/SM-placeholder-150x150.png';
					return (
						<ListItem key={publication.id} mb="1rem">
							<LinkBox as={HStack} justify="space-between" gap={6}>
								<Box w="80%">
									<Link href={`category/publications/${publication.category?.slug}`}>
										<Badge
											size={'sm'}
											colorScheme="gray"
											mb={2}
											rounded="md"
											px="2"
											fontSize="0.75rem"
											fontWeight="normal"
										>
											{publication.category?.name}
										</Badge>
									</Link>
									<InertiaChakraLinkOverlay
										// as={Link}
										target="_blank"
										textDecor="underline"
										textUnderlineOffset="3px"
										href={publication.file ? `/publications/${publication.file.name}` : '#'}
									>
										<Text fontSize={'0.875rem'} lineHeight={'short'}>
											{publication.title}
										</Text>
									</InertiaChakraLinkOverlay>
									<Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'.75rem'} mt={1}>
										{publication.subtitle}
									</Text>
								</Box>

								{media && (
									<Box w="20%">
										<Image
											src={media}
											alt={publication.title}
											w="60px"
											border="1px solid"
											borderColor={'gray.400'}
											p={1}
											rounded="sm"
											aspectRatio={3 / 4}
											mx="auto"
										/>
									</Box>
								)}
							</LinkBox>
						</ListItem>
					);
				})}
			</SimpleList>
		</GlassBox>
	);
};

export const PublicationsSection = ({ publications }) => {
	return (
		<MultiPostsCarousel
			spacing={30}
			pagination={'false'}
			navigation={'true'}
			scrollbar={'false'}
			link={'/category/publications'}
			text={'More in publications'}
		>
			{publications.map(publication => {
				const media = publication.media.length
					? publication.media.filter(media => media.collection_name === 'publication_featured_image')[0].original_url
					: '/assets/SM-placeholder-150x150.png';
				return (
					<swiper-slide key={publication.id} class="swiper-slide publication-slide">
						<Flex my={8} justify="center">
							<LinkBox textAlign="center">
								<Image
									src={media}
									fallbackSrc="/assets/SM-placeholder-150x150.png"
									w="180px"
									h={'240px'}
									alt={publication.title}
									title={publication.title}
									rounded="md"
									// aspectRatio={3 / 4}
									mx="auto"
									mb="2"
								/>
								<LinkOverlay fontSize={'xs'} href={`/publications/${publication.file.name}`}>
									{publication.title}
								</LinkOverlay>
							</LinkBox>
						</Flex>
					</swiper-slide>
				);
			})}
			{publications.length <= 0 &&
				[1, 2, 3].map(item => (
					<Box my={8} key={item}>
						<swiper-slide class="swiper-slide publication-slide">
							<Skeleton
								w="180px"
								height={'240px'}
								alt={publication.title}
								rounded="md"
								// aspectRatio={3 / 4}
								mx="auto"
							/>
						</swiper-slide>
					</Box>
				))}
		</MultiPostsCarousel>
	);
};

export const VideosSection = ({ posts }) => {
	return <VideoCarousel posts={posts} navigation={true} />;
};

// A debounced input react component
export function DebouncedInput({ value: initialValue, onChange, debounce = 500, ...props }) {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value);
		}, debounce);

		return () => clearTimeout(timeout);
	}, [value]);

	return <Input {...props} value={value} onChange={e => setValue(e.target.value)} />;
}

export const Content = styled(Section)`
	word-break: break-word;
	white-space: collapse balance;

	line-height: var(--chakra-lineHeights-taller);

	p {
		padding-block: 10px;
		font-size: 16px;
		line-height: var(--chakra-lineHeights-tall);
	}

	* {
		max-width: 100%;
	}

	ul,
	ol {
		padding: 0;
		margin-left: 1rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
		word-break: break-word;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	figure {
		margin: 24px auto;
		/* next line overrides an inline style of the figure element. */
		width: 100% !important;
	}

	iframe {
		display: block;
		margin: auto;
	}
`;

export const GlassBox = ({ children, ...rest }) => {
	return (
		<Box
			border="1px solid"
			borderColor={useColorModeValue('#ebebeb', '#333')}
			rounded="md"
			shadow="md"
			w="full"
			bg={useColorModeValue('whiteAlpha.200', 'var(--color-darker)')}
			{...rest}
		>
			{children}
		</Box>
	);
};

export const Accordian = ({ data }) => {
	const [accordianData, setAccordianData] = useState([...data]);

	const ChangeAccordianOpenState = (id, open) => {
		const newState = accordianData.map(obj => {
			// 👇️ if id equals 2d, update open property
			if (obj.open === true) {
				return { ...obj, open: false };
			}
			if (obj.id === id) {
				return { ...obj, open: !open };
			}

			// 👇️ otherwise return object as is
			return obj;
		});

		setAccordianData(newState);
	};

	function createMarkup(content) {
		return { __html: `${content}` };
	}

	return (
		<Wrapper>
			{accordianData.map(({ name, content, id, open }) => {
				return (
					<li key={id} onClick={() => ChangeAccordianOpenState(id, open)}>
						<div className="accordian-item">
							<p>{name}</p>
							{open ? <HiChevronDown size={'3rem'} /> : <HiChevronRight size={'3rem'} />}
						</div>
						{open ? (
							<div className="accordian-content">
								<p dangerouslySetInnerHTML={createMarkup(content)} />
							</div>
						) : null}
					</li>
				);
			})}
		</Wrapper>
	);
};

export const Title = ({ title, ...rest }) => {
	return (
		<Heading
			as="h3"
			fontSize={'1.5rem'}
			fontWeight="bold"
			fontFamily={
				'Gotham Narrow SSm A,Gotham Narrow SSm B,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
			}
			marginBottom={'3rem !important'}
			display={'flex'}
			alignItems={'center'}
			_after={{
				content: `""`,
				height: '2px',
				bg: useColorModeValue('blackAlpha.400', 'whiteAlpha.400'),
				ml: '1rem',
				borderRadius: '4px',
				flexGrow: 1,
			}}
			{...rest}
		>
			{title}
		</Heading>
	);
};

export const MapModel = ({ isOpen, onClose, mapLink }) => {
	const modalContentColor = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(0, 0, 0, 0.7)');
	const modelHeaderColor = useColorModeValue('gray.700', 'whiteAlpha.900');
	return (
		<Modal
			isCentered
			onClose={onClose}
			isOpen={isOpen}
			motionPreset="slideInBottom"
			closeOnOverlayClick={true}
			scrollBehavior="inside"
			size={'xl'}
		>
			<ModalOverlay />
			<ModalContent bg={modalContentColor}>
				<ModalHeader color={modelHeaderColor}>Our Location</ModalHeader>
				<ModalCloseButton />
				<ModalBody margin={'0 auto'}>
					<Image objectFit={'cover'} src={'/assets/location-map-resized.webp'} />
				</ModalBody>

				<ModalFooter>
					<Button
						as={InertiaChakraLink}
						size="sm"
						variant="solid"
						colorScheme={'primary'}
						href="https://goo.gl/maps/fwZuwNSbjN5jwZia7"
						target="_blank"
						onClick={onClose}
					>
						Open in Google Map
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export const ExploreButton = ({ text = 'Explore All', link, ...rest }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<InertiaChakraLink as={Link} href={link ? link : '#'}>
			<Button
				variant={'link'}
				colorScheme={'primary'}
				aria-label={text}
				fontWeight={'normal'}
				onMouseEnter={() => setHovered(!hovered)}
				onMouseLeave={() => hovered && setHovered(!hovered)}
				rightIcon={hovered ? <HiArrowRight /> : <HiChevronRight />}
				href={link ? link : '#'}
				size={'sm'}
				{...rest}
			>
				{text}
			</Button>
		</InertiaChakraLink>
	);
};

export const StyledChakraLink = styled(InertiaChakraLink)`
	position: relative;
	text-decoration: none;
	font-family: ${props => (props.fontFamily ? `var(--chakra-fonts-${props.fontFamily})` : 'var(--chakra-fonts-body)')};
	font-size: ${props => (props.fontSize ? `var(--chakra-fontSizes-${props.fontSize})` : 'var(--chakra-fontSizes-sm)')};
	color: ${props => (props.color ? props.color : 'var(--chakra-colors-gray-700)')};

	&::after {
		content: '';
		width: 0%;
		height: 1px;
		position: absolute;
		bottom: 0;
		left: 0;
		margin: 0;

		background: ${props => (props.color ? props.color : '#fff')};
		opacity: 0;
		transition: all 0.5s ease;
	}

	&:hover {
		text-decoration: none;

		&::after {
			width: 100%;
			opacity: 1;
		}
	}
`;
