import { createReducer, on } from "@ngrx/store";
import { addTask, deleteTask, updateTask } from './task.actions';
import { Task } from './task.model';

export interface AppState {
  tasks: Task[];
}

export const initialState: AppState = {
  tasks: []
};

export const taskReducer = createReducer(initialState,
	on(addTask, (state, {newTask}) => {
		return { ...state, tasks : [...state.tasks, newTask] }
	}),
	on(updateTask, (state, {updatedTask}) => {
      return {
        ...state,
        tasks: state.tasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
      };
	}),
	on(deleteTask, (state, {id}) => {
      return { ...state, tasks: state.tasks.filter(task => task.id !== id) };
	})
);
