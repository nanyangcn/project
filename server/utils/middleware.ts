import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const errorhandler = (err: Error, _req: Request, _res: Response, next: NextFunction): void => {
  logger.error(err.message);
  next(err);
};

export default {
  errorhandler,
};