import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from "../calculator/calculator.component";
import { PrimeCheckerComponent } from "../prime-checker/prime-checker.component";

@Component({
	selector: 'app-welcome',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		CalculatorComponent,
		PrimeCheckerComponent,
	] as const,
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
	readonly #title = 'Math Operations' as const;

	get title(): string {
		return this.#title;
	}
}
