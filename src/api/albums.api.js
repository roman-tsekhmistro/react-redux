import { BASE_URL } from './config';

export function getAlbums() {
	return fetch(`${BASE_URL}/albums?_limit=20`).then(response => response.json());
}
