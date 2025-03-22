import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from "@ngrx/store";
import { routes } from './app.routes';
import { taskReducer } from "./store/task/task.reducer";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideStore({
      tasks: taskReducer
    }),
	]
};
