import { put } from 'redux-saga/effects';
import { SET_LOADING } from '../ui/actions';
import Service from '../../api/api';
// import { useContext } from 'react';

export const PERFORM_LOGIN = 'PERFORM_LOGIN';
export const VERIFY_CODE = 'VERIFY_CODE';
export const SIGNED_IN = 'SIGNED_IN';
export const LOG_OUT = 'LOG_OUT';
export const VERIFICATION_IN_PROGRESS = 'VERIFICATION_IN_PROGRESS';

export function* performLogin(data) {
	yield put({ type: SET_LOADING, val: true });

	const { val: payload } = data;

	try {
		const response = yield fetch('/2factor/login', {
			method: 'POST',
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			yield put({ type: VERIFICATION_IN_PROGRESS, val: true });
		} else {
			throw new Error('Hiba történt a szerver oldalon.');
		}
	} catch (error) {}

	yield put({ type: SET_LOADING, val: false });
}

export function* verifyCode(data) {
	yield put({ type: SET_LOADING, val: true });
	const { val: payload } = data;
	try {
		const response = yield fetch('/2factor/verify', {
			method: 'POST',
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			const token = response.headers.get('Authorization');
			sessionStorage.setItem('token', token as string);
			yield put({ type: SIGNED_IN, val: true });
			// const responseData = yield response.json();
			// yield put({ type: VERIFY_CODE, val: { ...payload, code: responseData } });
			// yield put({ type: VERIFICATION_IN_PROGRESS, val: true });
		} else if (response.status === 401) {
			yield put({ type: SIGNED_IN, val: false });
		} else {
			throw new Error('Hiba történt a szerver oldalon.');
		}
	} catch (error) {}
	yield put({ type: SET_LOADING, val: false });
}

export function* logout() {
	yield put({ type: SET_LOADING, val: true });
	sessionStorage.clear();
	yield put({ type: SET_LOADING, val: false });
}
