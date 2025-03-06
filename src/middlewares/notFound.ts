import { Request, Response, NextFunction } from 'express';
import { logger } from '@config/logger';

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    logger.warn(`Route ot found: ${req.originalUrl} - Method: ${req.method}`);
    res.status(404).send('Route not found');
};
