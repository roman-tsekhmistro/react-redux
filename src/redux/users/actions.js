export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const GET_SINGLE_USER_REQUEST = 'GET_SINGLE_USER_REQUEST';
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS';
export const GET_SINGLE_USER_FAILURE = 'GET_SINGLE_USER_FAILURE';

export const getUsersRequest = () => ({
	type: GET_USERS_REQUEST,
});
export const getUsersSuccess = users => ({
	type: GET_USERS_SUCCESS,
	users,
});
export const getUsersFailure = error => ({
	type: GET_USERS_ERROR,
	error,
});

export const getSingleUserRequest = () => ({
	type: GET_SINGLE_USER_REQUEST,
});

export const getSingleUserSuccess = user => ({
	type: GET_SINGLE_USER_SUCCESS,
	user,
});

export const getSingleUserFailure = error => ({
	type: GET_SINGLE_USER_FAILURE,
	error,
});
