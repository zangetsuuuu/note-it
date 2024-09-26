const Card = ({ title, desc, date }) => {
	const formatDate = (dateString) => {
		if (!dateString) return 'Invalid date';
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString('en-US', options);
	};

	return (
		<div className="h-full flex flex-col justify-between bg-[#202023] hover:bg-[#2c2c2f] transition-colors duration-300 ease-in-out rounded-md p-4 hover:cursor-pointer">
			<div className="space-y-1">
				<h2 className="text-lg font-medium lg:text-xl line-clamp-2">{title}</h2>
				<p className="text-sm font-light text-pretty opacity-80 line-clamp-3 lg:line-clamp-4">{desc}</p>
			</div>
			<p className="mt-4 text-xs font-light opacity-40">{formatDate(date)}</p>
		</div>
	);
};

export default Card;
