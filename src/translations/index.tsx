import resources from './resources';

const lang = localStorage.getItem('language');

export const config = {
	interpolation: {
		escapeValue: false,
	},
	lng: lang ?? 'en',
	resources,
};

export { resources };
