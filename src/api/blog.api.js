import { BASE_URL } from './config';

export function getPosts(start) {
	return fetch(`${BASE_URL}/posts?_start=${start}&_limit=6`).then(response => response.json());
}

export function getPost(id) {
	return fetch(`${BASE_URL}/posts/${id}`).then(response => response.json());
}

export function getComments() {
	return fetch(`${BASE_URL}/comments?_start=0&_limit=5`).then(response => response.json());
}

export function getPostComments(postId) {
	return fetch(`${BASE_URL}/comments/${postId}`);
}
