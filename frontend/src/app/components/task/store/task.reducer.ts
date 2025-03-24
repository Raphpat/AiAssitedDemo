import { createReducer, on } from "@ngrx/store";
import { addTask } from './task.actions';
import { Task } from './task.model';

export interface AppState {
  tasks: Task[];
}

export const initialState: AppState = {
  tasks: []
};

export const taskReducer = createReducer(initialState,
	on(addTask, (state) => {
		return { ...state, tasks : [...state.tasks, {
      id: 4,
      title: 'New Task',
      description: 'This is a new task.'
    }] }
	}),
//on(updateTask, (state) => {
//	return {
//		...state
//	};
//}),
//on(deleteTask, (state) => {
//	return { ...state };
//})
);
