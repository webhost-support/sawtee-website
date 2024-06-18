import Section from '@/Components/Frontend/styles/section';
import {
	Box,
	Button,
	HStack,
	Heading,
	IconButton,
	Image,
	Link,
	SimpleGrid,
	Text,
	VStack,
	AspectRatio,
} from '@chakra-ui/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { FiPhone, FiMail, FiMap, FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { MdOutlineFax } from 'react-icons/md';
import { contactPageData } from '@/Utils/data';

const Contact = () => {
	return (
		<Section px={['4', '8']} py="80px" maxW="5xl" paddingBlock="50px" className={'contact-page-content'}>
			<Box p={{ sm: 5, md: 5 }} borderRadius="xl" boxShadow="lg">
				<Box p={4}>
					<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
						<Box textAlign={{ base: 'center', lg: 'left' }}>
							<Heading
								as="h4"
								fontSize={{ base: 'xl', md: '2xl' }}
								// color={headingColor}
								textTransform={'uppercase'}
								pb="0.75rem"
							>
								<Text as="span" fontWeight={'semibold'}>
									Working days:{' ' + 'Monday-Friday'}
								</Text>
								<Text as="span" fontWeight={'semibold'}></Text>
								<br />
								<Text as="span" fontWeight={'semibold'} fontSize={'md'}>
									Office hours:
									{' ' + contactPageData.opening_hours}
								</Text>
							</Heading>
							<VStack
								py={{ base: 3, md: 6, lg: 8 }}
								spacing={3}
								alignItems={{
									base: 'center',
									lg: 'start',
								}}
							>
								{contactPageData.phone_numbers.map(number => {
									return (
										<Button key={number} variant="ghost" leftIcon={<FiPhone size="20px" />}>
											<Link
												as="a"
												_hover={{
													textDecoration: 'none',
												}}
												textDecoration={'none'}
												href={`tel:${number}`}
											>
												{number}
											</Link>
										</Button>
									);
								})}
								<Button size="md" height="48px" variant="ghost" leftIcon={<MdOutlineFax size="20px" />}>
									<Link
										as="a"
										_hover={{
											textDecoration: 'none',
										}}
										textDecoration={'none'}
										href={`fax:${contactPageData.fax}`}
									>
										{contactPageData.fax}
									</Link>
								</Button>
								<Button size="md" height="48px" variant="ghost" leftIcon={<FiMail size="20px" />}>
									<Link
										as="a"
										_hover={{
											textDecoration: 'none',
										}}
										textDecoration={'none'}
										href={`mailto:${contactPageData.email}`}
									>
										{contactPageData.email}
									</Link>
								</Button>
								<Button size="md" height="48px" variant="ghost" leftIcon={<FiMap size="20px" />}>
									{contactPageData.address}
								</Button>
							</VStack>
							<HStack
								mt={4}
								spacing={5}
								px={5}
								justifyContent={{
									base: 'center',
									lg: 'flex-start',
								}}
							>
								{contactPageData.social_menus.map(({ name, link }) => {
									if (name === 'facebook') {
										return (
											<Link
												href={link}
												key={name}
												title={name.toUpperCase()}
												as="a"
												_hover={{
													textDecoration: 'none',
												}}
												textDecoration={'none'}
												target="_blank"
											>
												<IconButton
													aria-label={name}
													variant="ghost"
													size="lg"
													isRound={true}
													_hover={{
														bg: `${name}.600`,
													}}
													icon={<FiFacebook size="28px" />}
												/>
											</Link>
										);
									} else if (name === 'twitter') {
										return (
											<Link
												href={link}
												key={name}
												title={name.toUpperCase()}
												as="a"
												_hover={{
													textDecoration: 'none',
												}}
												textDecoration={'none'}
												target="_blank"
											>
												<IconButton
													aria-label={name}
													variant="ghost"
													size="lg"
													isRound={true}
													_hover={{
														bg: `${name}.600`,
													}}
													icon={<FiTwitter size="28px" />}
												/>
											</Link>
										);
									} else if (name === 'linkedin') {
										return (
											<Link
												href={link}
												key={name}
												title={name.toUpperCase()}
												as="a"
												_hover={{
													textDecoration: 'none',
												}}
												textDecoration={'none'}
												target="_blank"
											>
												<IconButton
													aria-label={name}
													variant="ghost"
													size="lg"
													isRound={true}
													_hover={{
														bg: `${name}.600`,
													}}
													icon={<FiLinkedin size="28px" />}
												/>
											</Link>
										);
									} else {
										return (
											<Link
												href={link}
												key={name}
												title={name.toUpperCase()}
												as="a"
												_hover={{
													textDecoration: 'none',
												}}
												textDecoration={'none'}
												target="_blank"
											>
												<IconButton
													aria-label={name}
													variant="ghost"
													size="lg"
													isRound={true}
													_hover={{
														bg: `red.600`,
													}}
													icon={<FiYoutube size="28px" />}
												/>
											</Link>
										);
									}
								})}
							</HStack>
						</Box>

						<Box bg="white" borderRadius="lg" m={8}>
							<Zoom>
								<Image width={'100%'} height="400px" src={'/assets/location-map-resized.webp'} />
							</Zoom>
						</Box>
					</SimpleGrid>
					<AspectRatio ration={16 / 9} mt="8">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8576852768524!2d85.329329!3d27.72168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1913dfb0b0b3%3A0x4d5d3519d24d3c38!2sSouth%20Asia%20Watch%20on%20Trade%2C%20Economics%20and%20Environment%20(SAWTEE)!5e0!3m2!1sen!2snp!4v1700216228197!5m2!1sen!2snp"
							width="100%"
							height="500"
							allowfullscreen="true"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</AspectRatio>
				</Box>
			</Box>
		</Section>
	);
};

export default Contact;
