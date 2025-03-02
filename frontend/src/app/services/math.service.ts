import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, map, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { MathError } from '../models/api-error.model';
import { CalculationRequest, CalculationResponse, Operation } from '../models/calculator.model';


@Injectable({
  providedIn: 'root',
})
export class MathService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      return throwError(() => new MathError(
        'A client error occurred. Please try again.',
        'CLIENT_ERROR'
      ));
    }
    // Server-side error
    return throwError(() => MathError.fromApiError(error.error));
  }

  private performOperation(operation: Operation, a: number, b: number): Observable<number> {
    const request: CalculationRequest = { a, b };

    return this.http
      .post<CalculationResponse<number>>(`${this.baseUrl}/${operation}`, request)
      .pipe(
        map((response) => {
          if (response.error) {
            throw MathError.fromApiError(response.error);
          }
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  add(a: number, b: number): Observable<number> {
    return this.performOperation('add', a, b);
  }

  subtract(a: number, b: number): Observable<number> {
    return this.performOperation('subtract', a, b);
  }

  multiply(a: number, b: number): Observable<number> {
    return this.performOperation('multiply', a, b);
  }

  divide(a: number, b: number): Observable<number> {
    if (b === 0) {
      throw new MathError('Cannot divide by zero', 'DIVISION_BY_ZERO');
    }
    return this.performOperation('divide', a, b);
  }

  isPrime(number: number): Observable<boolean> {
    return this.http
      .get<CalculationResponse<boolean>>(`${this.baseUrl}/isPrime/${number}`)
      .pipe(
        map((response) => {
          if (response.error) {
            throw MathError.fromApiError(response.error);
          }
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  async calculate(a: number, b: number, operation: Operation): Promise<number> {
    if (operation === 'divide' && b === 0) {
      throw new MathError('Cannot divide by zero', 'DIVISION_BY_ZERO');
    }

    const operationMethod = this[operation] as (a: number, b: number) => Observable<number>;

    try {
      return await firstValueFrom(operationMethod.call(this, a, b));
    } catch (error) {
      if (error instanceof MathError) {
        throw error;
      }
      throw new MathError('Calculation failed', 'CALCULATION_ERROR');
    }
  }
}
