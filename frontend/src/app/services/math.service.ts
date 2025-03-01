import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MathRequest {
  a: number;
  b: number;
}

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private apiUrl = 'http://localhost:8080/api/math'; // We'll need to update this to match our backend URL

  constructor(private http: HttpClient) {}

  add(a: number, b: number): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/add`, { a, b });
  }

  multiply(a: number, b: number): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/multiply`, { a, b });
  }

  divide(a: number, b: number): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/divide`, { a, b });
  }

  isPrime(number: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/isPrime/${number}`);
  }
}
