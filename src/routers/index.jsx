import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/note/Detail';
import New from '../pages/note/New';
import Edit from '../pages/note/Edit';
import NotFound from '../pages/404';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/new',
		element: <New />,
	},
	{
		path: '/note/:id',
		element: <Detail />,
	},
	{
		path: '/note/:id/edit',
		element: <Edit />,
	},
	{
		path: '*',
		element: <NotFound />,
	}
]);
