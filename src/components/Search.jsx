const Search = () => {
	return (
		<div className="mt-6 mb-4 lg:mt-8 lg:mb-4">
			<input
				id="search"
				type="text"
				className="w-full p-3 rounded-md bg-[#202023] focus:bg-[#2c2c2f] placeholder-white/60 focus:outline-none transition-colors duration-300 ease-in-out text-sm"
				placeholder="Search notes..."
				autoComplete="off"
			/>
		</div>
	);
};

export default Search;
