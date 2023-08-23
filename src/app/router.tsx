import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../layout';

import Login from '../pages/login';
import Contact from '../pages/contact';
import ErrorHandling from '../layout/ErrorHandling';
import Home from '../pages/home';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={
				<ErrorHandling>
					<Layout />
				</ErrorHandling>
			}
		>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route path="contact" element={<Contact />} />
		</Route>,
	),
);
