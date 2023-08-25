import { Box, Button, CardMedia, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
	const { t } = useTranslation('common');
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Box sx={{ padding: '2rem', borderRadius: '35px', backgroundColor: 'rgba(255, 255, 255, .9)' }}>
				<CardMedia
					sx={{
						margin: 'auto',
						objectFit: 'contain',
						height: '300px',
						maxHeight: '70%',
					}}
					component="img"
					alt="not found"
					image="../img/not_found.svg"
				/>
				<Typography component="h1" variant="h4" sx={{ margin: '2rem auto 1rem auto', textAlign: 'center' }}>
					{t('common.not_found')}
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Link to="/">
						<Button className="btn__primary btn btn-primary" type="button" sx={{ margin: '1rem 0' }}>
							{t('common.home')}
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default NotFound;
