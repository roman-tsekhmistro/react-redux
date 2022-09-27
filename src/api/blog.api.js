import { BASE_URL } from './config';

export function getPosts(start) {
	return fetch(`${BASE_URL}/posts?_start=${start}&_limit=6`).then(response => response.json());
}

export function getPost(id) {
	return fetch(`${BASE_URL}/posts/${id}`).then(response => response.json());
}
