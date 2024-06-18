import InertiaChakraLink from '@/Components/Frontend/styles/inertia-chakra-link';
import { AspectRatio, Box, Button } from '@chakra-ui/react';

const WebinarPost = ({ post }) => {
	const file = post.media.filter(m => m.collection_name === 'post-files')[0];
	return (
		<Box>
			<Box mb="6" dangerouslySetInnerHTML={{ __html: post.content }} />
			<InertiaChakraLink href={file.original_url}>
				<Button>Summary of Proceedings</Button>
			</InertiaChakraLink>
			<AspectRatio mt={6} ratio={16 / 9}>
				<iframe
					width="700"
					height="400"
					src={post.link}
					title={post.title}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</AspectRatio>
		</Box>
	);
};

export default WebinarPost;
