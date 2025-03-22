import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { TasksActions } from "../../store/task/task.actions";
import { Task } from "../../store/task/task.model";
import { AppState } from "../../store/task/task.reducer";

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrl: './task.component.scss',
	standalone: true,
})
export class TaskComponent implements OnInit{
	tasks: Task[] = [];

	constructor(private store: Store<AppState>){}

	ngOnInit(): void {
		this.store.select('tasks').subscribe(tasks => this.tasks = tasks);
	}

	addNewTask() {
		const newTask: Task = {
			id: this.tasks.length + 1,
			title: 'New Task',
			description: 'This is a new task.'
		};
		this.store.dispatch(TasksActions["[Task]AddTask"]({ task: newTask }));
	}

	updateTask(task: Task) {
		const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
		this.store.dispatch(TasksActions["[Task]UpdateTask"]({ task: updatedTask }));
	}

	deleteTask(id: number) {
		this.store.dispatch(TasksActions["[Task]DeleteTask"]({ id }));
	}
}
