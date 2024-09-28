import { formatDate } from '../helpers/utils';
import Icon from './Icon';

const NoteDetail = ({ note }) => {
	return (
		<div className="space-y-4">
			<div className="w-full p-4 lg:p-6 rounded-md bg-[#202023] text-sm space-y-2">
				<h1 className="text-xl font-medium lg:text-2xl">{note.title}</h1>
				<p className="text-sm font-light text-pretty opacity-80">{note.description}</p>
			</div>
			<div className="w-fit px-4 lg:px-6 py-2 lg:py-3 rounded-md bg-[#202023] text-sm">
				<div className="flex items-center space-x-1.5 opacity-60">
					<Icon name="Calendar" size="12" />
					<p className="text-xs font-light">{formatDate(note.date)}</p>
				</div>
			</div>
		</div>
	);
};

export default NoteDetail;
