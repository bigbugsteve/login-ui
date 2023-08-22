import React from 'react';
import { Outlet } from 'react-router-dom';
import ErrorHandling from './ErrorHandling';
import { ReactNotifications } from 'react-notifications-component';
const Layout = () => {
	return (
		<div className="layout">
			<ReactNotifications />
			<Outlet />
		</div>
	);
};

export default Layout;
