const Grid = ({ children }) => {
	return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{children}</div>;
};

export default Grid;
