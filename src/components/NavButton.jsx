import { useNavigate } from 'react-router-dom';
import Icon from './Icon';

const routes = {
	House: '/',
	CirclePlus: '/new',
};

const NavButton = ({ icon }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(routes[icon] || '/');
	};

	return (
		<button className="text-white transition-transform hover:-skew-x-12" onClick={handleClick}>
			<Icon name={icon} />
		</button>
	);
};

export default NavButton;
