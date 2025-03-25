import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

export const addTask = createAction('[Task] add task', props<{newTask: Task}>());
export const updateTask = createAction('[Task] update task', props<{updatedTask: Task}>());
export const deleteTask = createAction('[Tasl] delete task', props<{id: number}>());
