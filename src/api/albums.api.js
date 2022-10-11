import { BASE_URL } from './config';

export function getAlbums() {
	return fetch(`${BASE_URL}/albums?_limit=20`).then(albums => albums.json());
}

export function getPhotosForAlbums(albumId) {
	return fetch(`${BASE_URL}/photos?albumId=${albumId}`).then(photos => photos.json());
}
