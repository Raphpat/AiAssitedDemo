import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PrimeCheckerComponent } from './components/prime-checker/prime-checker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalculatorComponent,
    PrimeCheckerComponent,
  ] as const,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly #title = 'Math Operations' as const;

  get title(): string {
    return this.#title;
  }
}
