import {
	getCommentsFailure,
	getCommentsRequest,
	getCommentsSuccess,
	getSinglePostError,
	getSinglePostRequest,
	getSinglePostSuccess,
	removeCommentFromList,
} from '../singlePost/actions';
import { getPost } from '../../api/blog.api';
import { getCommentsForPost } from '../../api/comments.api';

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
		getCommentsForPost(id).then(comments => dispatch(getCommentsSuccess(comments)));
	} catch (error) {
		dispatch(getCommentsFailure(error));
	}
};

export const fetchCommentsAfterDelete = parentId => dispatch => {
	dispatch(getCommentsRequest());
	try {
		getCommentsForPost().then(comments => dispatch(removeCommentFromList(comments, parentId)));
	} catch (error) {
		dispatch(getCommentsFailure(error));
	}
};
