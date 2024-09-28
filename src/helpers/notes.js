import { nanoid } from 'nanoid';

const getSavedNotes = () => JSON.parse(localStorage.getItem('notes')) || [];
const saveNotes = (notes) => {
	localStorage.setItem('notes', JSON.stringify(notes));
};

export const getNoteById = (id) => {
	const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
	return savedNotes.find((note) => note.id === decodeURIComponent(id));
};

export const createNote = ({ title, description }) => {
	const newNote = { id: nanoid(), title, description, date: new Date().toISOString() };
	const updatedNotes = [...getSavedNotes(), newNote];
	saveNotes(updatedNotes);
};

export const updateNote = ({ id, title, description }) => {
	const updatedNotes = getSavedNotes().map((note) =>
		note.id === id ? { ...note, title, description, date: new Date().toISOString() } : note
	);
	saveNotes(updatedNotes);
};

export const deleteNote = (id) => {
	const updatedNotes = getSavedNotes().filter((note) => note.id !== id);
	saveNotes(updatedNotes);
};

export const deleteAllNotes = () => {
	localStorage.removeItem('notes');
};
