const initialState = { token: '', isAuth: false };

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isAuth: true,
			};
		case 'IS_LOGGED_IN':
			return {
				...state,
				token: localStorage.getItem('TOKEN'),
			};
		case 'LOGOUT':
			return {
				...state,
				isAuth: false,
				token: '',
			};
		default:
			console.log('U made mistake');
	}
}
