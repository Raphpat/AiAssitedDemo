import { NgFor } from "@angular/common";
import { Component } from '@angular/core';
import { Task } from "./store/task.model";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-task',
  imports: [NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
	standalone: true
})
export class TaskComponent {
 tasks: Task[] = [];

  constructor(private store: Store) {
    //this.store.select('tasks').subscribe(tasks => this.tasks = tasks);
  }

  addNewTask() {
    //this.store.dispatch(addTask());
  }

  updateTask(task: Task) {
    const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
    //this.store.dispatch(updateTask());
  }

  deleteTask(id: number) {
    //this.store.dispatch(deleteTask());
  }
}
