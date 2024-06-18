import AirBnbCard from '@/Components/Frontend/AirBnbCard';
import { Content, GlassBox } from '@/Components/Frontend/index';
import InertiaChakraLink from '@/Components/Frontend/styles/inertia-chakra-link';
import {
	Box,
	Heading,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	ListItem,
	Text,
	UnorderedList,
	SimpleGrid,
	HStack,
	Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { mediaFellows } from '@/Utils/data';

export default function MediaFellows({ content }) {
	return (
		<Content
			className="page-content"
			px={{ base: '32px', md: '0' }}
			mx="auto"
			py={'80px'}
			maxW={'4xl'}
			fontSize={{ base: 'md', lg: 'lg' }}
		>
			<Box dangerouslySetInnerHTML={{ __html: content }} />
			<GlassBox mt={8} px={6}>
				{mediaFellows &&
					mediaFellows.length > 0 &&
					mediaFellows.map((mediaFellow, i) => {
						return <Fellows mediaFellow={mediaFellow} />;
					})}
			</GlassBox>
		</Content>
	);
}

export const Fellows = ({ mediaFellow, i }) => {
	const { id, name, avatar, designation, bio, published_stories, experience } = mediaFellow;

	return (
		<>
			<Box id={id} my={10}>
				<HStack alignItems="center">
					<Avatar name={name} src={avatar} height={'80px'} width={'80px'} />
					<HStack ml={6}>
						<Heading as="h2" fontSize="xl" fontFamily="heading" style={{ marginBlock: '0' }}>
							{name}
						</Heading>
						<Text style={{ margin: '0' }}>{designation}</Text>
					</HStack>
				</HStack>

				<Text my={8}>{bio}</Text>

				<Accordion allowToggle>
					<AccordionItem>
						<AccordionButton>
							{'Published Stories'}
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel px={['5', '10']}>
							<UnorderedList>
								{published_stories &&
									published_stories.length > 0 &&
									published_stories.map(({ title, link }) => {
										return (
											<ListItem key={title}>
												<InertiaChakraLink href={link}>{title}</InertiaChakraLink>
											</ListItem>
										);
									})}
							</UnorderedList>

							<SimpleGrid minChildWidth="300px" spacing="6" mt={10}>
								{published_stories &&
									published_stories.length > 0 &&
									published_stories.map(({ image_src, title, media_src }, i) => {
										return <AirBnbCard key={i} img={image_src} title={title} mediaSrc={media_src} />;
									})}
							</SimpleGrid>
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionButton>
							{'Experience with the Fellowship'}
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel px={['5', '10']}>
							{experience.length > 0 &&
								experience.map(exp => {
									return (
										<Text
											my={2}
											dangerouslySetInnerHTML={{
												__html: exp,
											}}
										/>
									);
								})}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
		</>
	);
};
