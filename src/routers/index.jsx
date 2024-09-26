import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import New from '../pages/note/New';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/new',
		element: <New />,
	}
]);
