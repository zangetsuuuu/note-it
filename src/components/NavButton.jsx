import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteAllNotes, deleteNote } from '../helpers/notes';
import Dialog from './Dialog';
import Icon from './Icon';

const NavButton = ({ icon, url  }) => {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleClick = () => {
		if (icon === 'Trash') {
			setIsDialogOpen(true);
		} else {
			navigate(url);
		}
	};

	const handleConfirm = () => {
		if (location.pathname.includes('note')) {
			deleteNote(id);
			navigate('/');
		} else {
			deleteAllNotes();
			navigate(0);
		}
		setIsDialogOpen(false);
	};

	const handleCancel = () => {
		setIsDialogOpen(false);
	};

	return (
		<>
			<button className="text-white transition-transform hover:-skew-x-12" onClick={handleClick}>
				<Icon name={icon} />
			</button>
			{isDialogOpen && (
				<Dialog noteId={id} isOpen={isDialogOpen} onConfirm={handleConfirm} onCancel={handleCancel} />
			)}
		</>
	);
};

export default NavButton;
