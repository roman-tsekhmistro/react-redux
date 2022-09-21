import { getPostsError, getPostsRequest, getPostsSuccess } from './postsActions';

export const fetchBlogs = () => dispatch => {
	dispatch(getPostsRequest());
	try {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => data.filter(item => item.id <= 20))
			.then(filteredData => dispatch(getPostsSuccess(filteredData)));
	} catch (error) {
		dispatch(getPostsError(error));
		return Promise.reject(error);
	}
};
