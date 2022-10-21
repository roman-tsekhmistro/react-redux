export const ADD_TODO_TASK = 'ADD_TODO_TASK';
export const DELETE_TODO_TASK = 'DELETE_TODO_TASK';

export const ADD_PERFORMED_TODO_TASK = 'ADD_PERFORMED_TODO_TASK';

export const EDIT_TODO_TASK = 'EDIT_TODO_TASK';

export const addTaskInTaskList = task => ({
	type: ADD_TODO_TASK,
	task,
});

export const deleteTaskInTaskList = taskId => ({
	type: DELETE_TODO_TASK,
	taskId,
});

export const addPerformedTask = taskId => ({
	type: ADD_PERFORMED_TODO_TASK,
	taskId,
});

export const editToDoTask = (currentTask, editedTaskBody) => ({
	type: EDIT_TODO_TASK,
	editedTaskBody,
	currentTask,
});
