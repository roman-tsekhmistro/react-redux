import {
	DELETE_PHOTO_FROM_ALBUM,
	GET_ALBUMS_FAILURE,
	GET_ALBUMS_REQUEST,
	GET_ALBUMS_SUCCESS,
	GET_PHOTOS_FOR_ALBUM_FAILURE,
	GET_PHOTOS_FOR_ALBUM_REQUEST,
	GET_PHOTOS_FOR_ALBUM_SUCCESS,
} from './actions';

const initialState = { albums: [], albumsLoading: false, photosForAlbum: [], photosLoading: false };

export function albumsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALBUMS_REQUEST:
			return { ...state, albumsLoading: true };
		case GET_ALBUMS_SUCCESS:
			return {
				...state,
				albums: action.albums,
				albumsLoading: false,
			};
		case GET_ALBUMS_FAILURE:
			return {
				...state,
				error: action.error,
			};

		case GET_PHOTOS_FOR_ALBUM_REQUEST:
			return {
				...state,
				photosLoading: true,
			};
		case GET_PHOTOS_FOR_ALBUM_SUCCESS:
			return {
				...state,
				photosForAlbum: action.receivedPhotosForAlbum,
				photosLoading: false,
			};
		case GET_PHOTOS_FOR_ALBUM_FAILURE:
			return {
				...state,
				error: action.error,
			};

		case DELETE_PHOTO_FROM_ALBUM:
			return { ...state, photosForAlbum: state.photosForAlbum.filter(photo => photo.id !== action.photoId) };

		default:
			return state;
	}
}
