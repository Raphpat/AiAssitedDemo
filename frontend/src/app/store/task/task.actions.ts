import { createActionGroup, props } from '@ngrx/store';
import { Task } from "./task.model";

export const TasksActions = createActionGroup({
	source: 'Tasks',
	events: {
		'[Task] Add Task': props<{task: Task}>(),
		'[Task] Update Task': props<{ task: Task }>(),
		'[Task] Delete Task': props<{ id: number }>()
	}
})
