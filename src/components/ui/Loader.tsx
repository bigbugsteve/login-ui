import React from 'react';
import ReactDOM from 'react-dom';
// import { reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { Typography, Box, CircularProgress, ThemeProvider } from '@mui/material';
import { Backdrop } from '@mui/material';
import { useSelector } from 'react-redux';

import RootState from '../../interfaces/RootState';
import { theme } from './theme';

const LoadingScreen: React.FC = () => {
	/* STATES */

	/* VARIABLES */
	const { t } = useTranslation('common');
	const isLoading = useSelector((state: RootState) => state.ui.isLoading);
	console.log('file: Loader.tsx:18 ~ isLoading:', isLoading);

	/* FUNCTIONS */
	const content = (
		<ThemeProvider theme={theme}>
			<Backdrop sx={{ color: '#fff', zIndex: '100000' }} open={isLoading}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<CircularProgress sx={{ margin: '1rem auto', color: '#C40886' }} />
					<Typography align="center" color="white" className="loading__title">
						{t('common.please_wait')}
					</Typography>
				</Box>
			</Backdrop>
		</ThemeProvider>
	);

	/* USEEFFECTS */

	return <>{ReactDOM.createPortal(content, document.getElementById('loader-hook')!)}</>;
};

export default LoadingScreen;
