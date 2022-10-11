import { BASE_URL } from './config';

export function getCommentsForPost(id) {
	return fetch(`${BASE_URL}/posts/${id}/comments`).then(comments => comments.json());
}
