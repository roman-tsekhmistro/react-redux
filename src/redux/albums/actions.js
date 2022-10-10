export const GET_ALBUMS_REQUEST = 'GET_ALBUMS_REQUEST';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE';

export const getAlbumsRequest = () => ({
	type: GET_ALBUMS_REQUEST,
});

export const getAlbumsSuccess = albums => ({
	type: GET_ALBUMS_SUCCESS,
	albums,
});

export const getAlbumsFailure = error => ({
	type: GET_ALBUMS_FAILURE,
	error,
});
