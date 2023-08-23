import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import LoadingScreen from '../components/ui/Loader';
const Layout = () => {
	return (
		<div className="layout">
			<LoadingScreen />
			<ReactNotifications />
			<Outlet />
		</div>
	);
};

export default Layout;
