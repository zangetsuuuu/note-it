import { useState, useEffect } from 'react';
import { formatDate } from '../helpers/utils';
import MetaTags from '../components/MetaTags';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Grid from '../components/Grid';
import Card from '../components/Card';
import EmptyState from '../components/EmptyState';

const Home = () => {
	const [notes, setNotes] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
		setNotes(savedNotes);
	}, []);

	const filteredNotes = notes.filter(
		(note) =>
			note.title.toLowerCase().includes(search.toLowerCase()) ||
			note.description.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<MetaTags
				title="Home"
				type="website"
				description="Organize and manage your personal notes efficiently. Access, create, and edit notes seamlessly in one place."
			/>
			<Container>
				<Navbar />
				<Search search={search} setSearch={setSearch} />
				{filteredNotes.length > 0 ? (
					<Grid>
						{filteredNotes.map((note) => (
							<Card
								key={note.id}
								id={note.id}
								title={note.title}
								desc={note.description}
								date={formatDate(note.date)}
							/>
						))}
					</Grid>
				) : (
					<EmptyState message={search ? `No notes match your search for "${search}".` : "You haven't created any notes yet"} />
				)}
			</Container>
		</>
	);
};

export default Home;
