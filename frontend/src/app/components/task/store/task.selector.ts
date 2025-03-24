import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Task } from "./task.model";

export const selectTasks = createFeatureSelector<Task[]>('tasks');

export const selectTaskById = (props :{id: number}) =>
  createSelector(selectTasks, tasks => tasks.find(task => task.id === props.id));
