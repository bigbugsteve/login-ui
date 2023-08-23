import { initialState as initialUiState } from '../redux/ui/reducer';

export interface SelectListItem {
	name: string;
	value: string;
	label: string;
}
export type SelectList = Array<SelectListItem>;

type Auth = {
	signedIn: boolean;
	verifyLogin: boolean;
};

export interface ErrorType {
	dictionaryObject: string;
	errorCode: number;
}

interface RootState {
	auth: Auth;
	error: { errorObject: ErrorType };
	ui: typeof initialUiState;
}

export default RootState;
