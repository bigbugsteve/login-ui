import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Contact = () => {
	const { t } = useTranslation('common');

	return (
		<Box sx={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
			<Grid
				container
				className="login__wrapper"
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
				<Grid item md={5} sx={{ display: { xs: 'none', md: 'block', padding: '2rem' } }}>
					<Typography component="h1" variant="h5">
						{t('contact.contact_info')}
					</Typography>
					<CardMedia
						sx={{
							maxHeight: 'auto',
							width: '100%',
							maxWidth: '90%',
							margin: 'auto',
							objectFit: 'contain',
						}}
						component="img"
						alt="benefit hub"
						height="100%"
						image="../img/contact_us.svg"
					/>
				</Grid>
				<Grid
					item
					xs={10}
					md={5}
					sx={{
						margin: 'auto',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: '100%',
						padding: '2rem 0',
					}}
				>
					<Box></Box>
					<Box>
						<Typography variant="body1">{t('contact.email')}:</Typography>
						<Link to="mailto:anagybogar@gmail.com">anagybogar@gmail.com</Link>
					</Box>

					<Grid item sx={{ width: '50%', margin: '0.5rem auto' }}>
						<Link to="/">
							<Button className="btn__primary btn btn-primary" fullWidth type="submit">
								{t('contact.back')}
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Contact;
