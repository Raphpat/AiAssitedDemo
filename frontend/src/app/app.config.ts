import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from "@ngrx/store";
import { routes } from './app.routes';
import { taskReducer } from "./components/task/store/task.reducer";

export const appConfig: ApplicationConfig = {
	providers: [
    provideStore({tasks : taskReducer}),
		provideRouter(routes),
		provideHttpClient()
	]
};
