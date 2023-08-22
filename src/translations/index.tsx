import resources from './resources';

const lang = localStorage.getItem('language');

export const config = {
	interpolation: {
		escapeValue: false, // React already does escaping
	},
	lng: lang ?? 'en',
	resources,
};

export { resources };
