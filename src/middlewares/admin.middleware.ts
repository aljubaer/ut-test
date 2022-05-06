import { HttpException } from '@exceptions/HttpException';
import { RequestWithUser } from '@modules/auth/auth.interface';
import { NextFunction, Response } from 'express';

const adminMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  if (req.user.role !== 'admin') next(new HttpException(403, 'Forbidden'));

  next();
};
