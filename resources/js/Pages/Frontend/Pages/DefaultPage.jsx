import { Content } from '@/Components/Frontend/index';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

const DefaultPage = ({ sections, content, ...rest }) => {
	const headingColor = useColorModeValue('gray.900, whiteAlpha.900');
	const contentColor = useColorModeValue('gray.800', 'whiteAlpha.800');
	return (
		<Content className="page-content" px={{ base: '32px', md: '0' }} mx="auto" py={'80px'} maxW={'2xl'} {...rest}>
			{content && (
				<Box>
					<Box color={contentColor}>
						<Box
							as="p"
							dangerouslySetInnerHTML={{
								__html: content,
							}}
						/>
					</Box>
				</Box>
			)}

			{sections &&
				sections.map(({ title, media, description }) => {
					return (
						<Box>
							<Heading as="h3" fontSize={['lg', 'xl', '2xl']} py={'4'} mb="4" fontFamily="heading" color={headingColor}>
								{title}
							</Heading>
							<Box color={contentColor}>
								<Box
									as="p"
									dangerouslySetInnerHTML={{
										__html: description,
									}}
								/>
							</Box>
						</Box>
					);
				})}
		</Content>
	);
};

export default DefaultPage;
