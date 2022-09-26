import {
	GET_SINGLE_POST_ERROR,
	GET_SINGLE_POST_REQUEST,
	GET_SINGLE_POST_SUCCESS,
	GET_COMMENTS_REQUEST,
	GET_COMMENTS_SUCCESS,
	GET_COMMENTS_FAILURE,
} from './actions';

const initialValue = { post: null, comments: [], loading: false, commentLoading: false };

export function singlePostReducer(state = initialValue, action) {
	switch (action.type) {
		case GET_SINGLE_POST_REQUEST:
			return { ...state, loading: true };
		case GET_SINGLE_POST_SUCCESS:
			return { ...state, post: action.data, loading: false };

		case GET_SINGLE_POST_ERROR:
			return { ...state, loading: false };

		case GET_COMMENTS_REQUEST:
			return { ...state, commentLoading: true };

		case GET_COMMENTS_SUCCESS:
			return { ...state, comments: action.comments, commentLoading: false };
		case GET_COMMENTS_FAILURE:
			return { ...state, error: action.error };

		default:
			return state;
	}
}
