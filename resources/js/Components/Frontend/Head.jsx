import { Head } from '@inertiajs/react';

const WebsiteHead = ({ title, description, image, children }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta httpEquiv="imagetoolbar" content="no" />
			<meta head-key="description" name="description" content={description} />
			<meta head-key="imagetoolbar" httpEquiv="imagetoolbar" content="no" />
			<meta head-key="og:title" property="og:title" content={'SAWTEE | ' + title} />
			<meta head-key="og:type" property="og:type" content="post page" />
			<meta head-key="og:description" property="og:description" content={description} />
			<meta head-key="og:image" property="og:image" content={image} />
			<meta head-key="og:url" property="og:url" content="/" />
			<meta
				head-key="og:site_name"
				property="og:site_name"
				content="SOUTH ASIA WATCH ON TRADE, ECONOMICS AND ENVIRONMENT"
			/>
			<meta head-key="twitter:card" name="twitter:card" content="summary_large_image" />
			{children}
		</Head>
	);
};

export default WebsiteHead;
