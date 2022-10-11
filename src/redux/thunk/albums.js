import { getAlbums, getPhotosForAlbums } from '../../api/albums.api';
import {
	getAlbumsFailure,
	getAlbumsRequest,
	getAlbumsSuccess,
	getPhotosForAlbumFailure,
	getPhotosForAlbumRequest,
	getPhotosForAlbumSuccess,
	removePhotoFromAlbum,
} from '../albums/actions';

export const fetchAlbums = () => dispatch => {
	dispatch(getAlbumsRequest());
	try {
		getAlbums().then(albums => dispatch(getAlbumsSuccess(albums)));
	} catch (error) {
		dispatch(getAlbumsFailure(error));
	}
};

export const fetchPhotosForTheAlbumId = albumId => dispatch => {
	dispatch(getPhotosForAlbumRequest());
	try {
		getPhotosForAlbums(albumId).then(photosForAlbum => dispatch(getPhotosForAlbumSuccess(photosForAlbum)));
	} catch (error) {
		dispatch(getPhotosForAlbumFailure(error));
	}
};

export const fetchPhotosAfterDelete = photoId => dispatch => {
	dispatch(getPhotosForAlbumRequest());
	try {
		getPhotosForAlbums().then(photosForAlbum => dispatch(removePhotoFromAlbum(photosForAlbum, photoId)));
	} catch (error) {
		dispatch(getPhotosForAlbumFailure(error));
	}
};
