const initialState = { token: '', isAuth: false };

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isAuth: true,
				token: action.token,
			};
		case 'LOGOUT':
			return {
				...state,
				isAuth: false,
				token: '',
			};
		default:
			return { state };
	}
}
