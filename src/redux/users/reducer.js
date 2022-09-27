import {
	GET_SINGLE_USER_FAILURE,
	GET_SINGLE_USER_REQUEST,
	GET_SINGLE_USER_SUCCESS,
	GET_USERS_ERROR,
	GET_USERS_REQUEST,
	GET_USERS_SUCCESS,
} from './actions';

const initialState = { users: [], user: null, loading: false };

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_USERS_SUCCESS:
			return {
				...state,
				users: action.users,
				loading: false,
			};
		case GET_USERS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};

		case GET_SINGLE_USER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_SINGLE_USER_SUCCESS:
			return {
				...state,
				user: action.user,
				loading: false,
			};
		case GET_SINGLE_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};

		default:
			return state;
	}
}
