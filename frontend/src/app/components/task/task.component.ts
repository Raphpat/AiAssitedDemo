import { map, Observable, take } from 'rxjs';

import { CommonModule } from "@angular/common";
import { Component, inject } from '@angular/core';
import { Store } from "@ngrx/store";
import { addTask, deleteTask, updateTask } from "./store/task.actions";
import { Task } from "./store/task.model";
import { selectTasks } from "./store/task.selector";

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
	private store = inject(Store)
 	tasks$: Observable<Task[]> = this.store.select(selectTasks);

  addNewTask() {
		this.tasks$.pipe(map(tasks => tasks.length), take(1)).subscribe((id) => {
			const newTask: Task = {
				id,
				title: 'New Task',
				description: 'This is a new task.'
			};
			this.store.dispatch(addTask({newTask}));
		})

  }

  updateTask(task: Task) {
		    const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
    this.store.dispatch(updateTask({updatedTask}));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({id}));
  }
}
