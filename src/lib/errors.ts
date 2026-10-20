export class AppError extends Error {
  constructor(
    public code: string,
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super('NOT_FOUND', 404, message);
    this.name = 'NotFoundError';
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = 'Invalid request') {
    super('BAD_REQUEST', 400, message);
    this.name = 'BadRequestError';
  }
}

export class MethodNotAllowedError extends AppError {
  constructor(message: string = 'Method not allowed') {
    super('METHOD_NOT_ALLOWED', 405, message);
    this.name = 'MethodNotAllowedError';
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = 'Internal server error') {
    super('INTERNAL_ERROR', 500, message);
    this.name = 'InternalServerError';
  }
}

export function handleError(error: unknown) {
  if (error instanceof AppError) {
    return {
      statusCode: error.statusCode,
      code: error.code,
      message: error.message,
    };
  }

  console.error('Unexpected error:', error);

  return {
    statusCode: 500,
    code: 'INTERNAL_ERROR',
    message: 'An unexpected error occurred',
  };
}
