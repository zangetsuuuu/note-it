import { useLocation, useParams } from 'react-router-dom';
import Icon from './Icon';
import NavButton from './NavButton';

const Navbar = ({ noteFound }) => {
	const { pathname } = useLocation();
	const { id } = useParams();

	const navConfig = {
		'/': {
			icon: 'NotebookPen',
			title: 'Notes',
			buttons: [
				{ icon: 'CirclePlus', url: '/new' },
				{ icon: 'Trash', url: '' },
			],
		},
		'/new': {
			icon: 'CirclePlus',
			title: 'New Note',
			buttons: [{ icon: 'House', url: '/' }],
		},
		[`/note/${encodeURIComponent(id)}/edit`]: {
			icon: 'SquarePen',
			title: 'Edit Note',
			buttons: [{ icon: 'House', url: '/' }],
		},
		[`/note/${encodeURIComponent(id)}`]: {
			icon: 'NotebookPen',
			title: 'Note Detail',
			buttons: noteFound
				? [
						{ icon: 'SquarePen', url: `/note/${id}/edit` },
						{ icon: 'Trash', url: '' },
						{ icon: 'House', url: '/' },
				  ]
				: [{ icon: 'House', url: '/' }],
		},
	};

	const { icon, title, buttons } = navConfig[pathname] || { icon: '', title: '', buttons: [] };

	return (
		<nav className="flex items-center justify-between mb-6 lg:mb-8">
			<div className="flex items-center space-x-2">
				<Icon name={icon} />
				<h1 className="text-2xl font-medium md:text-3xl xl:text-3xl">{title}</h1>
			</div>
			<div className="flex space-x-6">
				{buttons.map((button, index) => (
					<NavButton key={index} icon={button.icon} url={button.url} />
				))}
			</div>
		</nav>
	);
};

export default Navbar;
