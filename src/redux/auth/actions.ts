import { put } from 'redux-saga/effects';
import { SET_LOADING } from '../ui/actions';
// import Service from '../../api/api';
import { Inputs } from '../../pages/login/components/LoginForm';
// import { useContext } from 'react';

export const PERFORM_LOGIN = 'PERFORM_LOGIN';
export const VERIFY_CODE = 'VERIFY_CODE';
export const SIGNED_IN = 'SIGNED_IN';
export const LOG_OUT = 'LOG_OUT';
export const VERIFICATION_IN_PROGRESS = 'VERIFICATION_IN_PROGRESS';

export function* performLogin(data: { type: string; val: Partial<Inputs> }) {
	yield put({ type: SET_LOADING, val: true });

	const { val: payload } = data;

	try {
		const response: Response = yield fetch('/2factor/login', {
			method: 'POST',
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			yield put({ type: VERIFICATION_IN_PROGRESS, val: true });
		} else {
			yield put({
				type: 'SET_ERROR_OBJECT',
				val: {
					dictionaryObject: 'login_errors',
					errorCode: response?.status,
				},
			});
			throw new Error(`${response?.status} Something went wrong...`);
		}
	} catch (error) {
		yield put({
			type: 'SET_ERROR_OBJECT',
			val: {
				dictionaryObject: 'login_errors',
				errorCode: 500,
			},
		});
	}

	yield put({ type: SET_LOADING, val: false });
}

export function* verifyCode(data: { type: string; val: Partial<Inputs> }) {
	yield put({ type: SET_LOADING, val: true });
	const { val: payload } = data;
	try {
		const response: Response = yield fetch('/2factor/verify', {
			method: 'POST',
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			const token = response.headers.get('Authorization');
			yield put({ type: VERIFICATION_IN_PROGRESS, val: false });

			sessionStorage.setItem('token', token as string);
			yield put({ type: SIGNED_IN, val: true });
		} else if (response.status === 401) {
			yield put({
				type: 'SET_ERROR_OBJECT',
				val: {
					dictionaryObject: 'login_errors',
					errorCode: response?.status,
				},
			});
			yield put({ type: SIGNED_IN, val: false });
		} else {
			yield put({
				type: 'SET_ERROR_OBJECT',
				val: {
					dictionaryObject: 'login_errors',
					errorCode: response?.status,
				},
			});
			throw new Error(`${response?.status} Something went wrong...`);
		}
	} catch (error) {
		yield put({
			type: 'SET_ERROR_OBJECT',
			val: {
				dictionaryObject: 'login_errors',
				errorCode: 500,
			},
		});
	}
	yield put({ type: SET_LOADING, val: false });
}

export function* logout() {
	yield put({ type: SET_LOADING, val: true });
	yield put({ type: SIGNED_IN, val: false });
	sessionStorage.clear();
	yield put({ type: SET_LOADING, val: false });
}
