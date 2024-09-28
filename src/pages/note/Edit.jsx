import { useParams } from 'react-router-dom';
import { getNoteById } from '../../helpers/notes';
import MetaTags from '../../components/MetaTags';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import EmptyState from '../../components/EmptyState';

const Edit = () => {
	const { id } = useParams();
	const note = getNoteById(id);

	return (
		<>
			<MetaTags title="Edit Note" description="Edit your note here" />
			<Container>
				<Navbar />
				{note ? <Form note={note} /> : <EmptyState message="Note not found" />}
			</Container>
		</>
	);
};

export default Edit;
