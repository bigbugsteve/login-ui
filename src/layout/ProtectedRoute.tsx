import { ReactNode, useEffect } from 'react';
import RootState from '../interfaces/RootState';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const signedIn = useSelector((state: RootState) => state.auth.signedIn);
	const navigate = useNavigate();
	useEffect(() => {
		if (!signedIn) {
			console.log('not logged in...');
			navigate('/');
		}
	});
	return <>{children}</>;
};

export default ProtectedRoute;
