import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description, type }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:type" content={type} />
			<meta property="og:description" content={description} />
		</Helmet>
	);
};

export default MetaTags;
