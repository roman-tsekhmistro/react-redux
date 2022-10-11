import {
	ADD_COMMENT_IN_LIST,
	DELETE_COMMENT_FROM_LIST,
	GET_COMMENTS_FAILURE,
	GET_COMMENTS_REQUEST,
	GET_COMMENTS_SUCCESS,
	GET_SINGLE_POST_ERROR,
	GET_SINGLE_POST_REQUEST,
	GET_SINGLE_POST_SUCCESS,
} from './actions';

const initialValue = { post: null, loading: false, comments: [], commentLoading: false };

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

		case ADD_COMMENT_IN_LIST:
			return { ...state, comments: [action.comment, ...state.comments] };

		case DELETE_COMMENT_FROM_LIST:
			return { ...state, comments: state.comments.filter(comment => comment.id !== action.parentId) };

		default:
			return state;
	}
}
