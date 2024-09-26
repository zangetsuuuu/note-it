import { useState, useEffect } from 'react';
import Icon from '../components/Icon';
import MetaTags from '../components/MetaTags';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Grid from '../components/Grid';
import Card from '../components/Card';

const Home = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
		setNotes(storedNotes);
	}, []);

	return (
		<>
			<MetaTags
				title="Home"
				type="website"
				description="Organize and manage your personal notes efficiently. Access, create, and edit notes seamlessly in one place."
			/>
			<Container>
				<Navbar />
				<Search />
				{notes.length > 0 ? (
					<Grid>
						{notes.map((note, index) => (
							<Card key={index} title={note.title} desc={note.description} date={note.date} />
						))}
					</Grid>
				) : (
					<div className="flex items-center justify-center space-x-2 h-[32rem] lg:h-[28rem] opacity-60">
						<Icon name="CircleAlert" size="20" />
						<p className="text-center">You don&apos;t have any notes</p>
					</div>	
				)}
			</Container>
		</>
	);
};

export default Home;
