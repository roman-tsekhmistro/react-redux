import { ADD_PERFORMED_TODO_TASK, ADD_TODO_TASK, DELETE_TODO_TASK, EDIT_TODO_TASK } from './action';

const initialValue = { tasks: [], performedTasks: [] };

export function toDoReducer(state = initialValue, action) {
	switch (action.type) {
		case ADD_TODO_TASK:
			return { ...state, tasks: [action.task, ...state.tasks] };

		case DELETE_TODO_TASK:
			return { ...state, tasks: state.tasks.filter(task => task.id !== action.taskId) };

		case ADD_PERFORMED_TODO_TASK:
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.taskId),
				performedTasks: [...state.tasks.filter(task => task.id === action.taskId), ...state.performedTasks],
			};

		case EDIT_TODO_TASK:
			return {
				...state,
			};

		default:
			return state;
	}
}
