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

	yield put({ type: SET_LOADING, val: false });
}

export function* verifyCode(data) {
	yield put({ type: SET_LOADING, val: true });

	yield put({ type: SET_LOADING, val: false });
}

export function* logout() {
	yield put({ type: SET_LOADING, val: true });
	sessionStorage.clear();
	yield put({ type: SET_LOADING, val: false });
}
