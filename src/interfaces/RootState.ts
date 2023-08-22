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

interface RootState {
	auth: Auth;
	ui: typeof initialUiState;
}

export default RootState;
