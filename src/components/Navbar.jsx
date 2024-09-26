import Icon from './Icon';
import NavButton from './NavButton';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
	const { pathname } = useLocation();
	const isHomePage = pathname === '/';

	return (
		<nav className="flex items-center justify-between">
			<div className="flex items-center space-x-2">
				<Icon name={isHomePage ? 'NotebookPen' : 'CirclePlus'} />
				<h1 className="text-2xl font-medium md:text-3xl xl:text-3xl">{isHomePage ? 'Notes' : 'New Note'}</h1>
			</div>
			<div className="flex space-x-6">
				{isHomePage ? (
					<>
						<NavButton icon="CirclePlus" />
						<NavButton icon="Trash" />
					</>
				) : (
					<NavButton icon="House" />
				)}
			</div>
		</nav>
	);
};

export default Navbar;
