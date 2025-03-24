import { Routes } from '@angular/router';
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

export const routes: Routes = [
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'calculator', component: CalculatorComponent }
];
