export const GET_SINGLE_POST_REQUEST = 'GET_SINGLE_POST_REQUEST';
export const GET_SINGLE_POST_SUCCESS = 'GET_SINGLE_POST_SUCCESS';
export const GET_SINGLE_POST_ERROR = 'GET_SINGLE_POST_ERROR';

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';

export const getSinglePostRequest = () => ({ type: GET_SINGLE_POST_REQUEST });
export const getSinglePostSuccess = data => ({ type: GET_SINGLE_POST_SUCCESS, data });
export const getSinglePostError = data => ({ type: GET_SINGLE_POST_ERROR, data });

export const getCommentsRequest = () => ({
	type: GET_COMMENTS_REQUEST,
});
export const getCommentsSuccess = comments => ({
	type: GET_COMMENTS_SUCCESS,
	comments,
});

export const getCommentsFailure = error => ({
	type: GET_COMMENTS_FAILURE,
	error,
});
