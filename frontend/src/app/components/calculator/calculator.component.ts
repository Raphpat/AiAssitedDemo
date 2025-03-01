import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  calculatorForm: FormGroup;
  result: number | null = null;
  error: string | null = null;
  darkMode: boolean = false;
  loading: boolean = false;

  constructor(private mathService: MathService, private fb: FormBuilder) {
    this.calculatorForm = this.fb.group({
      firstNumber: [0],
      selectedOperation: ['add'],
      secondNumber: [0],
    });
  }

  ngOnInit() {
    // Reset result when form values change
    this.calculatorForm.valueChanges.subscribe(() => {
      this.result = null;
      this.error = null;
    });
  }

  calculate() {
    if (this.calculatorForm.invalid) return;

    this.error = null;
    this.result = null;
    this.loading = true;

    const { firstNumber, secondNumber, selectedOperation } =
      this.calculatorForm.value;

    try {
      switch (selectedOperation) {
        case 'add':
          this.mathService.add(firstNumber, secondNumber).subscribe({
            next: (result) => {
              this.result = result;
              this.loading = false;
            },
            error: (error) => {
              this.handleError(error);
            },
          });
          break;
        case 'multiply':
          this.mathService.multiply(firstNumber, secondNumber).subscribe({
            next: (result) => {
              this.result = result;
              this.loading = false;
            },
            error: (error) => {
              this.handleError(error);
            },
          });
          break;
        case 'divide':
          this.mathService.divide(firstNumber, secondNumber).subscribe({
            next: (result) => {
              this.result = result;
              this.loading = false;
            },
            error: (error) => {
              this.handleError(error);
            },
          });
          break;
        default:
          this.error = 'Invalid operation';
          this.loading = false;
      }
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleError(error: any) {
    this.error = error.error?.message || error.message || 'An error occurred';
    this.loading = false;
  }
}
