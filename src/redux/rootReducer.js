import { combineReducers } from 'redux';
import { singlePostReducer } from './singlePost/reducer';
import { postsReducer } from './posts/reducer';
import loginReducer from './login/reducer';

export const rootReducer = combineReducers({
	singlePostReducer,
	postsReducer,
	loginReducer,
});
