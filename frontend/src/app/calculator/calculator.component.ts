import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MathService } from '../services/math.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  operation: string = 'add';
  result: number | null = null;
  error: string | null = null;
  loading: boolean = false;

  constructor(private mathService: MathService) {}

  calculate() {
    this.error = null;
    this.result = null;
    this.loading = true;
    
    try {
      switch (this.operation) {
        case 'add':
          this.mathService.add(this.num1, this.num2).subscribe({
            next: (result) => {
              this.result = result;
              this.loading = false;
            },
            error: (error) => {
              this.handleError(error);
            }
          });
          break;
        case 'multiply':
          this.mathService.multiply(this.num1, this.num2).subscribe({
            next: (result) => {
              this.result = result;
              this.loading = false;
            },
            error: (error) => {
              this.handleError(error);
            }
          });
          break;
        case 'divide':
          this.mathService.divide(this.num1, this.num2).subscribe({
            next: (result) => {
              this.result = result;
              this.loading = false;
            },
            error: (error) => {
              this.handleError(error);
            }
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
