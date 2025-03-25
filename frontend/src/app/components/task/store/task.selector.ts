import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./task.reducer";

export const selectTaskState = createFeatureSelector<AppState>('tasks');

export const selectTasks = createSelector(selectTaskState, (state: AppState) => state.tasks);

export const selectTaskById = (id: number) =>
  createSelector(selectTasks, tasks => tasks.find(task => task.id === id));
