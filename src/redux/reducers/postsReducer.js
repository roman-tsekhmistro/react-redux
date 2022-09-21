import { GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from '../actions/postsActions';

const initialState = { posts: [], loading: false };

export default function postsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_POSTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.posts,
				loading: false,
			};
		case GET_POSTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
