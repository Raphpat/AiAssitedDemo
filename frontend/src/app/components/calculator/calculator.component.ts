import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MathError } from '../../models/api-error.model';
import { CalculationResult, CalculatorState, isValidCalculatorInput, Operation } from '../../models/calculator.model';
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
  state: CalculatorState = {
    calculation: null,
    error: null,
    loading: false
  };
  calculationHistory: CalculationResult[] = [];

  readonly operations: { value: Operation; label: string }[] = [
    { value: 'add', label: 'Add (+)' },
    { value: 'subtract', label: 'Subtract (-)' },
    { value: 'multiply', label: 'Multiply (×)' },
    { value: 'divide', label: 'Divide (÷)' },
  ];

  constructor(private mathService: MathService, private fb: FormBuilder) {
    this.calculatorForm = this.fb.group({
      firstNumber: [null, [Validators.required, Validators.pattern(/^-?\d*\.?\d+$/)]],
      selectedOperation: ['add', Validators.required],
      secondNumber: [null, [Validators.required, Validators.pattern(/^-?\d*\.?\d+$/)]],
    });
  }

  ngOnInit(): void {
    this.calculatorForm.valueChanges.subscribe(() => {
      this.resetState();
    });
  }

  private resetState(): void {
    this.state = {
      calculation: null,
      error: null,
      loading: false
    };
  }

  async onSubmit(): Promise<void> {
    if (this.calculatorForm.invalid) {
      this.state = {
        calculation: null,
        error: new MathError('Please fill in all fields correctly', 'VALIDATION_ERROR'),
        loading: false
      };
      return;
    }

    const rawValue = this.calculatorForm.value;
    const formValue = {
      firstNumber: parseFloat(rawValue.firstNumber),
      secondNumber: parseFloat(rawValue.secondNumber),
      selectedOperation: rawValue.selectedOperation as Operation
    };

    if (!isValidCalculatorInput(formValue) || isNaN(formValue.firstNumber) || isNaN(formValue.secondNumber)) {
      this.state = {
        calculation: null,
        error: new MathError('Invalid input values', 'VALIDATION_ERROR'),
        loading: false
      };
      return;
    }

    this.state = {
      calculation: null,
      loading: true,
      error: null
    };

    try {
      const result = await this.mathService.calculate(
        formValue.firstNumber,
        formValue.secondNumber,
        formValue.selectedOperation
      );

      const calculation = {
        firstNumber: formValue.firstNumber,
        secondNumber: formValue.secondNumber,
        operation: formValue.selectedOperation,
        result
      };

      this.state = {
        calculation,
        error: null,
        loading: false
      };

      this.calculationHistory.unshift({
        ...calculation,
        timestamp: new Date().toISOString()
      });
    } catch (err: any) {
      this.state = {
        calculation: null,
        error: err,
        loading: false
      };
    }
  }

  clearForm(): void {
    this.calculatorForm.reset({
      firstNumber: null,
      selectedOperation: 'add',
      secondNumber: null
    });
    this.resetState();
  }

  get errorMessage(): string {
    if (!this.state.error) return '';

    switch (this.state.error.code) {
      case 'VALIDATION_ERROR':
        return 'Please check your input values';
      case 'DIVISION_BY_ZERO':
        return 'Division by zero is not allowed';
      case 'CLIENT_ERROR':
        return 'Please check your connection and try again';
      default:
        return this.state.error.message;
    }
  }
}
