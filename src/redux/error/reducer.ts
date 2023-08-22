/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SET_ERROR_OBJECT } from './actions';

const initialState = {
	errorObject: null,
};

export default function errReducer(state = initialState, action: Record<'type' | 'val', string | boolean>) {
	switch (action.type) {
		case SET_ERROR_OBJECT:
			return {
				...state,
				errorObject: action.val,
			};
		default:
			return state;
	}
}
