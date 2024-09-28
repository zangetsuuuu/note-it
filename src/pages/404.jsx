import MetaTags from '../components/MetaTags';
import Container from '../components/Container';
import EmptyState from '../components/EmptyState';

const NotFound = () => {
	return (
		<>
			<MetaTags
				title="404 - Not Found"
				description="The page you are looking for is not found"
			/>
			<Container>
				<EmptyState message="404 - Not Found" />
			</Container>
		</>
	);
};

export default NotFound;
