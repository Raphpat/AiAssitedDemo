import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  private apiUrl = 'http://localhost:8080/api/math'; // We'll need to update this to match our backend URL

  constructor(private http: HttpClient) { }

  add(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/add?a=${a}&b=${b}`);
  }

  multiply(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/multiply?a=${a}&b=${b}`);
  }

  divide(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/divide?a=${a}&b=${b}`);
  }

  isPrime(n: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/isPrime?n=${n}`);
  }
}
