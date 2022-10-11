export const GET_ALBUMS_REQUEST = 'GET_ALBUMS_REQUEST';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE';

export const GET_PHOTOS_FOR_ALBUM_REQUEST = 'GET_PHOTOS_FOR_ALBUM_REQUEST';
export const GET_PHOTOS_FOR_ALBUM_SUCCESS = 'GET_PHOTOS_FOR_ALBUM_SUCCESS';
export const GET_PHOTOS_FOR_ALBUM_FAILURE = 'GET_PHOTOS_FOR_ALBUM_FAILURE';

export const DELETE_PHOTO_FROM_ALBUM = 'DELETE_PHOTO_FROM_ALBUM';

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

export const getPhotosForAlbumRequest = () => ({
	type: GET_PHOTOS_FOR_ALBUM_REQUEST,
});

export const getPhotosForAlbumSuccess = receivedPhotosForAlbum => ({
	type: GET_PHOTOS_FOR_ALBUM_SUCCESS,
	receivedPhotosForAlbum,
});

export const getPhotosForAlbumFailure = error => ({
	type: GET_PHOTOS_FOR_ALBUM_FAILURE,
	error,
});

export const removePhotoFromAlbum = (photos, photoId) => ({
	type: DELETE_PHOTO_FROM_ALBUM,
	photos,
	photoId,
});
