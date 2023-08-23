/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NOTIFICATION_TYPE, Store } from 'react-notifications-component';

export const setNotification = (title: string, message: string, type: NOTIFICATION_TYPE) => {
	Store.addNotification({
		title: title,
		message: message,
		type: type,
		insert: 'top',
		container: 'top-right',
		animationIn: ['animated', 'fadeIn'],
		animationOut: ['animated', 'fadeOut'],
		dismiss: {
			duration: 4000,
			showIcon: false,
			pauseOnHover: true,
			touch: true,
			click: true,
		},
	});
};
