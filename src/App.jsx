import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
	return (
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	);
};

export default App;
