import { createReducer, on } from '@ngrx/store';
import { TasksActions } from "./task.actions";
import { Task } from './task.model';

export interface AppState {
	tasks: Task[];
}

export const initialState: AppState = {
	tasks: []
};

export const taskReducer = createReducer(
	initialState,
	on(TasksActions["[Task]AddTask"], (state, { task }) => ({
		...state,
		tasks: [...state.tasks, task]
	})),
	on(TasksActions["[Task]UpdateTask"], (state, { task }) => ({
		...state,
		tasks: state.tasks.map(t => (t.id === task.id ? task : t))
	})),
	on(TasksActions["[Task]DeleteTask"], (state, { id }) => ({
		...state,
		tasks: state.tasks.filter(task => task.id !== id)
	}))
);
