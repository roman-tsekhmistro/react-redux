import {
	getCommentsFailure,
	getCommentsRequest,
	getCommentsSuccess,
	getSinglePostError,
	getSinglePostRequest,
	getSinglePostSuccess,
} from '../singlePost/actions';
import { getComments, getPost } from '../../api/blog.api';

export const fetchSinglePost = id => dispatch => {
	dispatch(getSinglePostRequest());
	try {
		getPost(id).then(data => dispatch(getSinglePostSuccess(data)));
	} catch (error) {
		dispatch(getSinglePostError(error));
	}
};

export const fetchComments = id => dispatch => {
	dispatch(getCommentsRequest());
	try {
		getComments(id).then(comments => dispatch(getCommentsSuccess(comments)));
	} catch (error) {
		dispatch(getCommentsFailure(error));
	}
};
