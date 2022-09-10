import { Response } from 'express';

export class ErrorHTTP {
  statusCode: number;
  message: string;

  constructor(statusCode = 400, message: string) {
    (this.message = message), (this.statusCode = statusCode);
  }
}

export const handleError = (err: ErrorHTTP, res: Response) => {
  const { message, statusCode } = err;

  if (err instanceof ErrorHTTP) {
    return res.status(err.statusCode).json({
      status: 'error',
      statusCode,
      message
    });
  }
};
