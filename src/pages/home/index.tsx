import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { LOG_OUT } from '../../redux/auth/actions';
import { SET_LOADING } from '../../redux/ui/actions';

const Home = () => {
	const { t } = useTranslation('common');
	const dispatchAction = useDispatch();
	const navigate = useNavigate();
	const logout = () => {
		dispatchAction({ type: SET_LOADING, val: true });
		setTimeout(() => {
			dispatchAction({ type: LOG_OUT });
			navigate('/');
		}, 500);
	};
	return (
		<Box
			className="home__page"
			sx={{
				position: 'relative',
				height: '100%',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box>
				<Grid
					container
					className={`login__wrapper`}
					sx={{
						borderRadius: '35px',
						backgroundColor: 'rgba(255, 255, 255, .9)',
						boxShadow: '10px 10px 10px rgba(0,0,0,.1)',
						width: '80%',
						maxWidth: '1000px',
						margin: 'auto',
						display: 'flex',
						position: 'relative',
					}}
				>
					<Grid
						item
						xs={12}
						sx={{
							padding: '1rem',
							display: 'flex',
							position: 'relative',
							justifyContent: 'space-between',
						}}
					>
						<Typography variant="h2" sx={{ margin: '1rem', fontSize: '1.5rem' }}>
							{t('home.title')}
						</Typography>
						<Button sx={{ margin: '1rem', fontSize: '1.5rem' }} onClick={logout}>
							<LogoutIcon />
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								position: 'relative',
								alignSelf: 'center',
								borderRadius: '50%',
								height: '100%',
							}}
						>
							<CardMedia
								sx={{
									margin: 'auto',
									objectFit: 'contain',
									height: '300px',
									maxHeight: '70%',
								}}
								component="img"
								alt="benefit hub"
								image="../img/home_page.svg"
							/>
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ padding: '1rem' }}>
						<Typography
							variant="subtitle2"
							sx={[
								{
									color: '#750461',
									textDecoration: 'underline',
									margin: '.7rem',
									fontSize: '1rem',
								},
							]}
						>
							<Link to={'/contact'}>{t('login.contact')}</Link>
						</Typography>
					</Grid>

					{/* <Grid
						item
						xs={12}
						md={6}
						sx={{
							backgroundColor: { xs: 'white', md: 'transparent' },
							borderRadius: { xs: '20px', md: '0' },
							padding: '1rem',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'end',
						}}
					></Grid> */}
				</Grid>
			</Box>
		</Box>
	);
};

export default Home;
