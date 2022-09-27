import { BASE_URL } from './config';

export function getUsers() {
	return fetch(`${BASE_URL}/users`).then(response => response.json());
}

export function getSingleUser(id) {
	return fetch(`${BASE_URL}/users/${id}`).then(response => response.json());
}
