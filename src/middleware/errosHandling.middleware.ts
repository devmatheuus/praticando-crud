import { Request, Response, NextFunction } from 'express';
import { ErrorHTTP } from '../errors/ErrorHTTP';

const errorsHandlingMiddleware = (
  err: ErrorHTTP,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ErrorHTTP) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode
    });
  }

  return res.status(500).json({
    message: 'Internal server error!'
  });
};

export default errorsHandlingMiddleware;
