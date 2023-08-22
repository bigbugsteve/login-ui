import i18next from 'i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import { config as i18nextConfig } from '../translations/index';
import { router } from './router';

i18next.init(i18nextConfig);

export const App = (): React.ReactElement => {
	return (
		<I18nextProvider i18n={i18next}>
			<RouterProvider router={router} />
		</I18nextProvider>
	);
};
