import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';

const Form = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [alert, setAlert] = useState('');

	const inputClasses =
		'w-full p-3 rounded-md bg-[#202023] focus:bg-[#2c2c2f] placeholder-white/60 focus:outline-none transition-colors duration-300 ease-in-out text-sm';

	const handleSave = (e) => {
		e.preventDefault();

		if (!title || !description) {
			setAlert('Please fill in both fields.');
			return;
		}

		const newNote = { title, description, date: new Date().toISOString() };
		const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
		const updatedNotes = [...savedNotes, newNote];

		localStorage.setItem('notes', JSON.stringify(updatedNotes));

		setTitle('');
		setDescription('');
		setAlert('');
		navigate('/');
	};

	return (
		<form className="my-6 lg:my-8" onSubmit={handleSave}>
			{alert && (
				<div className="flex items-center p-3 mb-4 space-x-2 text-xs bg-yellow-600 rounded-md">
					<Icon name="CircleAlert" size="16" />
					<p>{alert}</p>
				</div>
			)}
			<input
				id="title"
				type="text"
				className={inputClasses}
				placeholder="Note title"
				autoComplete="off"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				id="description"
				className={`${inputClasses} h-80 resize-none mt-4`}
				placeholder="Note description"
				autoComplete="off"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button
				type="submit"
				className="w-full flex items-center justify-center space-x-2 mt-3 p-3 bg-[#202023] hover:bg-[#2c2c2f] rounded-md text-white text-sm"
			>
				<Icon name="Save" size="16" />
				<span>Save</span>
			</button>
		</form>
	);
};

export default Form;
