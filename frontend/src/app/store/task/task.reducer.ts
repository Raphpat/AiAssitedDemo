import { addTask, deleteTask, TaskActions, updateTask } from './task.actions';
import { Task } from './task.model';
export interface AppState {
	tasks: Task[];
}

export const initialState : AppState = {
	tasks : []
};

export function taskReducer(state = initialState, action: TaskActions) : AppState {
	switch(action.type) {
		case addTask.type:
      return { ...state, tasks: [...state.tasks, action.task] };
    case updateTask.type:
      return {
        ...state,
        tasks: state.tasks.map(task => (task.id === action.task.id ? action.task : task))
      };
    case deleteTask.type:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };
    default:
      return state;
  }
}
