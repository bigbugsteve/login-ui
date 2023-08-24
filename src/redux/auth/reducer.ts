import { AnyAction } from 'redux';
import { SET_VERIFICATION_CODE, SIGNED_IN, VERIFICATION_IN_PROGRESS } from './actions';

const initialState = {
	signedIn: sessionStorage.getItem('token') ?? false,
	verifyLogin: false,
	verificationCode: null,
};

export default function authReducer(state = initialState, action: AnyAction) {
	switch (action.type) {
		case SIGNED_IN: {
			return {
				...state,
				signedIn: action.val,
			};
		}
		case VERIFICATION_IN_PROGRESS:
			return {
				...state,
				verifyLogin: action.val,
			};
		case SET_VERIFICATION_CODE:
			return {
				...state,
				verificationCode: action.val,
			};
		default:
			return state;
	}
}
