import React, { ReactNode, useEffect } from 'react';
import { NOTIFICATION_TYPE, ReactNotifications } from 'react-notifications-component';
import RootState, { ErrorType } from '../interfaces/RootState';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../components/ui/Notification';
import { useTranslation } from 'react-i18next';
import { GeneralErrors, handleGeneralError } from '../lib/utilities';

interface ErrorHandlingProps {
	children: ReactNode;
}

const ErrorHandling: React.FC<ErrorHandlingProps> = ({ children }) => {
	const errorObject = useSelector((state: RootState) => state.error.errorObject);
	console.log('file: ErrorHandling.tsx:15 ~ errorObject:', errorObject);

	const dispatchStore = useDispatch();
	const { t } = useTranslation();

	const errorHandling = (errorObject: ErrorType) => {
		let appearance: NOTIFICATION_TYPE = 'warning';
		let title = 'test';
		let target = 'test';

		switch (errorObject?.error) {
			case 200:
				appearance = 'success';
				title = t('error_handling.success');
				break;
			case 401:
				appearance = 'warning';
				title = t('error_handling.warning');
				break;
			default:
				appearance = 'danger';
				title = t('error_handling.error');
		}
		target = t(`${errorObject?.dictionaryObject}.${handleGeneralError(GeneralErrors, errorObject?.error)}`);

		setNotification(title, target, appearance);
		dispatchStore({ type: 'SET_ERROR_OBJECT', val: null });
	};

	useEffect(() => {
		if (errorObject !== null) {
			errorHandling(errorObject);
		}
	}, [errorObject]);

	return (
		<>
			<ReactNotifications />
			{children}
		</>
	);
};

export default React.memo(ErrorHandling);
