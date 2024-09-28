import { getNoteById } from "../helpers/notes";

const Dialog = ({ noteId, isOpen, onConfirm, onCancel }) => {
	const note = getNoteById(noteId);
	const title = note?.title ? `Delete "${note.title}"?` : 'Delete all notes?';
	
	return (
		<div
			className={`fixed inset-0 bg-black/20 opacity-0 backdrop-blur-sm flex items-center justify-center z-50 ${
				isOpen ? 'opacity-100' : 'opacity-0 hidden'
			}`}
		>
			<div className="p-6 space-y-6 text-center rounded-md">
				<h1 className="text-lg font-medium lg:text-xl">{title}</h1>
				<div className="flex items-center justify-center space-x-4">
					<button
						className="w-20 h-10 py-2 text-base font-medium text-white transition duration-200 bg-red-500 rounded-md lg:w-24 hover:bg-red-600"
						onClick={onConfirm}
					>
						Yes
					</button>
					<button
						className="w-20 h-10 py-2 text-base font-medium text-gray-800 transition duration-200 bg-white rounded-md lg:w-24 hover:bg-gray-300"
						onClick={onCancel}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
