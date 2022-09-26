export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const getPostsRequest = () => ({ type: GET_POSTS_REQUEST });
export const getPostsSuccess = posts => ({ type: GET_POSTS_SUCCESS, posts });
export const getPostsError = error => ({ type: GET_POSTS_ERROR, error });
