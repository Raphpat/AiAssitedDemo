export type ErrorCode =
  | 'VALIDATION_ERROR'
  | 'DIVISION_BY_ZERO'
  | 'CLIENT_ERROR'
  | 'CALCULATION_ERROR'
  | 'SERVER_ERROR';

export type ErrorSeverity = 'ERROR' | 'WARNING' | 'INFO';

export interface ApiError {
  message: string;
  code: ErrorCode;
  status: number;
  timestamp: string;
  path: string;
  severity: ErrorSeverity;
}

export type ApiResponse<T> = {
  data?: T;
  error?: ApiError;
};

export class MathError extends Error {
  constructor(
    message: string,
    public code: ErrorCode,
    public status: number = 400,
    public timestamp: string = new Date().toISOString(),
    public path: string = '',
    public severity: ErrorSeverity = 'ERROR'
  ) {
    super(message);
    this.name = 'MathError';
  }

  static fromApiError(error: ApiError): MathError {
    return new MathError(
      error.message,
      error.code,
      error.status,
      error.timestamp,
      error.path,
      error.severity
    );
  }
}
