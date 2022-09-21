import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import postsReducer from './postsReducer';

export const rootReducer = combineReducers({
	loginReducer,
	postsReducer,
});
