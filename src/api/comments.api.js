import { BASE_URL } from './config';

export function getComments() {
	return fetch(`${BASE_URL}/comments?_start=0&_limit=5`).then(response => response.json());
}
