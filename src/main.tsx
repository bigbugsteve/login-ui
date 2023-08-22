import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app.tsx';
import './styles/app.scss';
import { worker } from './mocks/browser.ts';

worker.start();
const root = createRoot(document.getElementById('root') as HTMLElement);
if (import.meta.env.MODE === 'development') {
	// When development, setup the MSW.
	// import the worker (under the browser.ts file)
	import('./mocks/browser.ts')
		.then(({ worker }) => {
			// Start the worker.
			worker.start();
		})
		.then(() => {
			// Render the application.
			root.render(
				<>
					<App />
				</>,
			);
		});
} else {
	// Render the application in production without the MSW.
	root.render(
		<>
			<App />
		</>,
	);
}
// ReactDOM.createRoot(document.getElementById('root')!).render(
// 	<>
// 		<App />
// 	</>,
// );
