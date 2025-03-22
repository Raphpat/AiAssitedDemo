import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { addTask, deleteTask, updateTask } from "../../store/task/task.actions";
import { Task } from "../../store/task/task.model";
import { AppState } from "../../store/task/task.reducer";

@Component({
	selector: 'app-task',
	imports: [],
	templateUrl: './task.component.html',
	styleUrl: './task.component.scss',
	standalone: true,
})
export class TaskComponent {
	tasks: Task[] = [];

	constructor(private store: Store<AppState>) {
		this.store.select('tasks').subscribe(tasks => this.tasks = tasks);
	}

	addNewTask() {
		const newTask: Task = {
			id: this.tasks.length + 1,
			title: 'New Task',
			description: 'This is a new task.'
		};
		this.store.dispatch(addTask({ task: newTask }));
	}

	updateTask(task: Task) {
		const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
		this.store.dispatch(updateTask({ task: updatedTask }));
	}

	deleteTask(id: number) {
		this.store.dispatch(deleteTask({ id }));
	}
}
