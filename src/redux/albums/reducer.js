import { GET_ALBUMS_FAILURE, GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS } from './actions';

const initialState = { albums: [], loading: false };

export function albumsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALBUMS_REQUEST:
			return { ...state, loading: true };
		case GET_ALBUMS_SUCCESS:
			return {
				...state,
				albums: action.albums,
				loading: false,
			};
		case GET_ALBUMS_FAILURE:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
}
