import {
	getCommentsFailure,
	getCommentsRequest,
	getCommentsSuccess,
	getSinglePostError,
	getSinglePostRequest,
	getSinglePostSuccess,
} from '../singlePost/actions';
import { getPost } from '../../api/blog.api';
import { getComments } from '../../api/comments.api';

export const fetchSinglePost = id => dispatch => {
	dispatch(getSinglePostRequest());
	try {
		getPost(id).then(data => dispatch(getSinglePostSuccess(data)));
	} catch (error) {
		dispatch(getSinglePostError(error));
	}
};

export const fetchComments = () => dispatch => {
	dispatch(getCommentsRequest());
	try {
		getComments().then(comments => dispatch(getCommentsSuccess(comments)));
	} catch (error) {
		dispatch(getCommentsFailure(error));
	}
};
