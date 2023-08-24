import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';

const Login = () => {
	const { t } = useTranslation('common');
	return (
		<Box
			className="login__page"
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
					className={`login__wrapper 
          `}
					sx={{
						borderRadius: '35px',
						backgroundColor: 'rgba(255, 255, 255, .9)',
						boxShadow: '10px 10px 10px rgba(0,0,0,.1)',
						height: '500px',
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
						md={6}
						sx={{
							padding: '1rem',
							display: { xs: 'none', md: 'flex' },
							position: 'relative',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<Typography variant="h2" sx={{ margin: '1rem', fontSize: '1.5rem' }}>
							{t('login.title')}
						</Typography>

						<Box
							sx={{
								position: 'relative',
								alignSelf: 'center',
								borderRadius: '50%',
							}}
						>
							<CardMedia
								sx={{
									maxHeight: 'auto',
									width: '100%',
									maxWidth: '90%',
									margin: 'auto',
									objectFit: 'contain',
								}}
								component="img"
								alt="login image"
								height="100%"
								image="../img/connection.svg"
							/>
						</Box>
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
					<Grid
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
						}}
					>
						<Typography variant="h2" sx={{ margin: '1rem', fontSize: '1.5rem' }}>
							{t('login.subtitle')}
						</Typography>
						<Box sx={{ justifySelf: 'center' }}>
							<LoginForm />
						</Box>
						<Box></Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Login;
