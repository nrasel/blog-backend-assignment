import { NextFunction, Request, Response } from 'express';

const notFound = (
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode = 404;

  res.status(statusCode).json({
    success: false,
    message: 'API Not Found!!',
    error: ' ',
  });
};

export default notFound;
