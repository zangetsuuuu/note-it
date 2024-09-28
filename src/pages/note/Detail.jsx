import { useParams } from 'react-router-dom';
import { getNoteById } from '../../helpers/notes';
import MetaTags from '../../components/MetaTags';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import EmptyState from '../../components/EmptyState';
import NoteDetail from '../../components/NoteDetail';

const Detail = () => {
	const { id } = useParams();
	const note = getNoteById(id);

	return (
		<>
			<MetaTags title="Note Detail" description="View your note here" />
			<Container>
				<Navbar noteFound={Boolean(note)} />
				{note ? <NoteDetail note={note} /> : <EmptyState message="Note not found" />}
			</Container>
		</>
	);
};

export default Detail;
