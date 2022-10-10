import { getPostsError, getPostsRequest, getPostsSuccess } from '../posts/actions';
import { getPosts } from '../../api/blog.api';

export const fetchPosts =
	(start = 0) =>
	dispatch => {
		dispatch(getPostsRequest());
		try {
			getPosts(start).then(data => dispatch(getPostsSuccess(data)));
		} catch (error) {
			dispatch(getPostsError(error));
		}
	};
