import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import RootState from '../../interfaces/RootState';
import { SET_LANGUAGE } from '../../redux/ui/actions';

const SelectLanguage = () => {
	const languageList = [
		{ name: 'EN', value: 'en', label: 'EN' },
		{ name: 'FR', value: 'fr', label: 'FR' },
		{ name: 'NL', value: 'nl', label: 'NL' },
	];
	const dispatchAction = useDispatch();
	const currentLng = useSelector((state: RootState) => state?.ui?.language);

	const { i18n } = useTranslation('common');
	const { t } = useTranslation('common');

	const changeLng = (e: SelectChangeEvent<string>) => {
		dispatchAction({ type: SET_LANGUAGE, val: e.target.value });
		i18n.changeLanguage(e.target.value);
	};

	return (
		<ThemeProvider theme={theme}>
			<FormControl fullWidth sx={{ fontSize: '.6rem', width: '120px', position: 'absolute', top: '20px', right: '20px', zIndex: '1000' }}>
				<InputLabel id="demo-simple-select-label">{t('common.language')}</InputLabel>
				<Select
					sx={{ fontSize: '.8rem' }}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={currentLng}
					label={t('common.language')}
					onChange={changeLng}
				>
					{languageList.map((item, index) => {
						return (
							<MenuItem key={index} value={item.value} sx={{}}>
								{item.name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</ThemeProvider>
	);
};

export default SelectLanguage;
