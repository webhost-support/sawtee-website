import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import MainLayout from './Layout/MainLayout';
import PostLayout from './Layout/PostLayout';
import NewsletterPost from './Pages/NewsletterPost';
import WebsiteHead from '@/Components/Frontend/Head';
import WebinarPost from './Pages/WebinarPost';

export default function Post({ post, featured_image, srcSet }) {
	const { category, title, content } = post;

	const isProgramme = category.parent && category.parent.slug === 'programme';
	const isNewsletter = category.slug === 'newsletters';
	const isWebinarSeries = category.slug === 'webinar-series';
	const isDefault = !isNewsletter && !isWebinarSeries;

	return (
		<MainLayout>
			<WebsiteHead
				title={category.name + ' | ' + title}
				description={post.meta_description}
				image={featured_image ? featured_image : '/assets/logo-sawtee.webp'}
			/>

			<PostLayout
				post={post}
				featured_image={featured_image}
				srcSet={srcSet}
				isProgramPost={isProgramme}
				isNewsletter={isNewsletter}
			>
				{isNewsletter && <NewsletterPost post={post} />}
				{isWebinarSeries && <WebinarPost post={post} />}
				{isDefault && (
					<Box maxW="5xl" className="default_post_content">
						<Text
							dangerouslySetInnerHTML={{
								__html: content,
							}}
						/>
					</Box>
				)}
			</PostLayout>
		</MainLayout>
	);
}
