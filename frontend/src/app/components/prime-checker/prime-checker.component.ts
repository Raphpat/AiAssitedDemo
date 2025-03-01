import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-prime-checker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './prime-checker.component.html',
  styleUrls: ['./prime-checker.component.scss'],
})
export class PrimeCheckerComponent {
  primeForm: FormGroup;
  result: boolean | null = null;
  error: string | null = null;
  number: number | null = null;
  loading = false;

  constructor(private fb: FormBuilder, private mathService: MathService) {
    this.primeForm = this.fb.group({
      number: ['', [Validators.required, Validators.min(1)]],
    });
  }

  checkPrime() {
    if (this.primeForm.valid && !this.loading) {
      this.error = null;
      this.result = null;
      this.loading = true;
      const inputNumber = this.primeForm.value.number;
      this.number = inputNumber;

      this.mathService.isPrime(inputNumber).subscribe({
        next: (result) => {
          this.result = result;
          this.loading = false;
        },
        error: (err) => {
          this.error = err.message;
          this.loading = false;
        },
      });
    }
  }
}
