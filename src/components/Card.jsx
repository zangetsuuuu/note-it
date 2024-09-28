import { useNavigate } from 'react-router-dom';

const Card = ({ id, title, desc, date }) => {
	const navigate = useNavigate();

	return (
		<div
			className="h-full flex flex-col justify-between bg-[#202023] hover:bg-[#2c2c2f] transition-colors duration-300 ease-in-out rounded-md p-4 hover:cursor-pointer"
			onClick={() => navigate(`/note/${encodeURIComponent(id)}`)}
		>
			<div className="space-y-1">
				<h2 className="text-lg font-medium lg:text-xl line-clamp-2">{title}</h2>
				<p className="text-sm font-light text-pretty opacity-80 line-clamp-3 lg:line-clamp-4">{desc}</p>
			</div>
			<p className="mt-4 text-xs font-light opacity-40">{date}</p>
		</div>
	);
};

export default Card;
