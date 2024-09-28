import MetaTags from '../../components/MetaTags';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';

const New = () => {
	return (
		<>
            <MetaTags title="New Note" description="Create a new note here" />
			<Container>
				<Navbar />
				<Form />
			</Container>
		</>
	);
};

export default New;
