import { Outlet } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import LoadingScreen from '../components/ui/Loader';
import SelectLanguage from '../components/ui/SelectLanguage';
const Layout = () => {
	return (
		<div className="layout">
			<SelectLanguage />
			<LoadingScreen />
			<ReactNotifications />
			<Outlet />
		</div>
	);
};

export default Layout;
