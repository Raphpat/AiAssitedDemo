import { MathError } from './api-error.model';

export interface CalculatorForm {
    firstNumber: number;
    selectedOperation: Operation;
    secondNumber: number;
}

export interface CalculationRequest {
    a: number;
    b: number;
}

export interface CalculationResponse<T> {
    data: T;
    error: MathError | null;
}

export interface Calculation {
    firstNumber: number;
    secondNumber: number;
    operation: Operation;
    result: number;
}

export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export interface CalculationResult extends Calculation {
    timestamp: string;
}

export interface CalculatorState {
    calculation: Calculation | null;
    error: MathError | null;
    loading: boolean;
}

// Type guard for form validation
export function isValidCalculatorInput(value: unknown): value is CalculatorForm {
    return (
        typeof value === 'object' &&
        value !== null &&
        'firstNumber' in value &&
        'selectedOperation' in value &&
        'secondNumber' in value &&
        typeof (value as CalculatorForm).firstNumber === 'number' &&
        typeof (value as CalculatorForm).secondNumber === 'number' &&
        typeof (value as CalculatorForm).selectedOperation === 'string' &&
        ['add', 'subtract', 'multiply', 'divide'].includes((value as CalculatorForm).selectedOperation)
    );
}
