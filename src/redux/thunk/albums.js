import { getAlbums } from '../../api/albums.api';
import { getAlbumsFailure, getAlbumsRequest, getAlbumsSuccess } from '../albums/actions';

export const fetchAlbums = () => dispatch => {
	dispatch(getAlbumsRequest());
	try {
		getAlbums().then(albums => dispatch(getAlbumsSuccess(albums)));
	} catch (error) {
		dispatch(getAlbumsFailure(error));
	}
};
