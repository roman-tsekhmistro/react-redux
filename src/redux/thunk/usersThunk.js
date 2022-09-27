import {
	getSingleUserFailure,
	getSingleUserRequest,
	getSingleUserSuccess,
	getUsersFailure,
	getUsersRequest,
	getUsersSuccess,
} from '../users/actions';
import { getSingleUser, getUsers } from '../../api/users.api';
import { getCommentsFailure, getCommentsRequest, getCommentsSuccess } from '../singlePost/actions';
import { getComments } from '../../api/comments.api';

export const fetchUsers = () => dispatch => {
	dispatch(getUsersRequest());
	try {
		getUsers().then(users => dispatch(getUsersSuccess(users)));
	} catch (error) {
		dispatch(getUsersFailure(error));
	}
};

export const fetchSingleUser = id => dispatch => {
	dispatch(getSingleUserRequest());
	try {
		getSingleUser(id).then(user => dispatch(getSingleUserSuccess(user)));
	} catch (error) {
		dispatch(getSingleUserFailure(error));
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
