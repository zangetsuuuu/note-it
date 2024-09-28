import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createNote, updateNote } from '../helpers/notes';
import Icon from './Icon';

const Form = ({ note }) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [title, setTitle] = useState(note?.title || '');
	const [description, setDescription] = useState(note?.description || '');
	const [alert, setAlert] = useState('');

	const isEditMode = Boolean(id);

	const handleForm = (e) => {
		e.preventDefault();

		// Validate form input
		if (!title.trim() || !description.trim()) {
			setAlert('Both title and description are required.');
			return;
		}

		if (isEditMode) {
			updateNote({ id, title, description });
			navigate(`/note/${id}`);
		} else {
			createNote({ title, description });
			navigate('/');
		}

		resetForm();
	};

	const resetForm = () => {
		setTitle('');
		setDescription('');
		setAlert('');
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleForm(e);
		}
	};

	return (
		<form className="my-6 lg:my-8" onSubmit={handleForm}>
			{alert && (
				<div className="flex items-center p-3 mb-4 space-x-2 text-xs bg-yellow-600 rounded-md">
					<Icon name="CircleAlert" size="16" />
					<p>{alert}</p>
				</div>
			)}
			<input
				id="title"
				type="text"
				className="w-full p-3 rounded-md bg-[#202023] focus:bg-[#2c2c2f] placeholder-white/60 focus:outline-none transition-colors duration-300 ease-in-out text-sm"
				placeholder="Note title"
				autoComplete="off"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<textarea
				id="description"
				className="w-full p-3 rounded-md bg-[#202023] focus:bg-[#2c2c2f] placeholder-white/60 focus:outline-none transition-colors duration-300 ease-in-out text-sm h-80 resize-none mt-4"
				placeholder="Note description"
				autoComplete="off"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button
				type="submit"
				className="w-full flex items-center justify-center space-x-2 mt-3 p-3 bg-[#202023] hover:bg-[#2c2c2f] rounded-md text-white text-sm"
			>
				<Icon name={isEditMode ? 'Save' : 'Plus'} size="16" />
				<span>{isEditMode ? 'Save' : 'Create'}</span>
			</button>
		</form>
	);
};

export default Form;
