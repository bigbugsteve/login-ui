import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../layout';

// import Login from '../pages/login';
import Contact from '../pages/contact';
import ErrorHandling from '../layout/ErrorHandling';
import Home from '../pages/home';
import LoadingScreen from '../components/ui/Loader';
import React, { lazy } from 'react';

const Login = lazy(() => import('../pages/login'));
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
			<Route
				path="/"
				element={
					<React.Suspense fallback={<LoadingScreen />}>
						<Login />
					</React.Suspense>
				}
			/>
			<Route
				path="/home"
				element={
					<React.Suspense fallback={<LoadingScreen />}>
						<Home />
					</React.Suspense>
				}
			/>
			<Route
				path="contact"
				element={
					<React.Suspense fallback={<LoadingScreen />}>
						<Contact />
					</React.Suspense>
				}
			/>
		</Route>,
	),
);
