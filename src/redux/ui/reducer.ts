/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SET_LANGUAGE, SET_LOADING } from './actions';

export const initialState = {
	isLoading: false,
	language: 'en',
};

export default function uiReducer(state = initialState, action: Record<'type' | 'val', string | boolean>) {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				isLoading: action.val,
			};
		case SET_LANGUAGE:
			return {
				...state,
				language: action.val,
			};
		default:
			return state;
	}
}
