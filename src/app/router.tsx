import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../layout';

// import Login from '../pages/login';
import Home from '../pages/home';
import LoadingScreen from '../components/ui/Loader';
import React, { lazy } from 'react';
import ProtectedRoute from '../layout/ProtectedRoute';

const Login = lazy(() => import('../pages/login'));
const ErrorHandling = lazy(() => import('../layout/ErrorHandling'));
const Contact = lazy(() => import('../pages/contact'));
const NotFound = lazy(() => import('../pages/notfound'));
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
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
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
			<Route
				path="*"
				element={
					<React.Suspense fallback={<LoadingScreen />}>
						<NotFound />
					</React.Suspense>
				}
			/>
		</Route>,
	),
	{ basename: import.meta.env.DEV ? '/' : '/login-ui/' },
);
