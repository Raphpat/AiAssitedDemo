import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PrimeCheckerComponent } from './components/prime-checker/prime-checker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CalculatorComponent,
    PrimeCheckerComponent,
  ],
  template: `
    <div class="app-container">
      <header>
        <h1>Math Operations</h1>
      </header>
      <main>
        <app-calculator></app-calculator>
        <app-prime-checker></app-prime-checker>
      </main>
    </div>
  `,
  styles: [
    `
      .app-container {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      header {
        text-align: center;
        margin-bottom: 2rem;
      }
      h1 {
        color: #333;
        font-size: 2.5rem;
      }
      main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
      }
    `,
  ],
})
export class AppComponent {}
