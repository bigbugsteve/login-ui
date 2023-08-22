/* eslint-disable no-console */
import { AnyAction, Dispatch, Middleware, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import authReducer from './auth/reducer';
import errReducer from './error/reducer';

const sagaMiddleWare = createSagaMiddleware();
const reducer = combineReducers({
	auth: authReducer,
	error: errReducer,
});

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logger: Middleware<{}, any, Dispatch<AnyAction>> = (store) => {
	return (next) => {
		return (action) => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] next state', store.getState());
			return result;
		};
	};
};

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleWare, logger)));
sagaMiddleWare.run(rootSaga);
export default store;
