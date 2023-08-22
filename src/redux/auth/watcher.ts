import { takeLatest } from 'redux-saga/effects';
import { LOG_OUT, PERFORM_LOGIN, VERIFY_CODE, logout, performLogin, verifyCode } from './actions';

export default [
	takeLatest(PERFORM_LOGIN, performLogin),
	takeLatest(VERIFY_CODE, verifyCode),
	takeLatest(LOG_OUT, logout),
];
