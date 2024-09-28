import Icon from "./Icon";

const EmptyState = ({ message }) => {
	return (
		<div className="flex items-center justify-center space-x-2 h-[36rem] lg:h-[30rem] opacity-60">
			<Icon name="CircleAlert" size="20" />
			<p className="text-center">{message}</p>
		</div>
	);
};

export default EmptyState;
