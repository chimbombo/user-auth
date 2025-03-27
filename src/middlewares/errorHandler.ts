import { Request, Response, NextFunction } from "express";
import { logger } from "@config/logger";
import { status } from "http-status";

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(`Error: ${err.message} - Status: ${err.status || status.INTERNAL_SERVER_ERROR}`);

    res.status(err.status || status.INTERNAL_SERVER_ERROR).json({
        error: {
            message: err.message || "Internal Server Error",
            status: err.status || status.INTERNAL_SERVER_ERROR,
        },
    });
};
