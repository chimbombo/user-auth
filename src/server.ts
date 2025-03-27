import express, { Application } from "express";
import { config } from "@config/index";
import UserRouter from "@routes/userRoutes";
import { logger } from "@config/logger";
import { notFoundMiddleware } from "@middlewares/notFound";
import { errorHandlerMiddleware } from "@middlewares/errorHandler";
import "reflect-metadata";
import Database from "@model/DataBase";

export class Server {
    private readonly app: Application;
    private readonly port: number;

    constructor() {
        this.app = express();
        this.port = config.server.port;
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.routes();
    }

    private routes(): void {
        this.app.use("/api/user", UserRouter);
        this.app.use(notFoundMiddleware);
        this.app.use(errorHandlerMiddleware);
    }

    public async start() {
        try {
            logger.info("Connecting to database...");
            await Database.initialize();
            logger.info("Database connected successfully");
            this.app.listen(this.port, () => {
                logger.info(`Server is running on port ${this.port}`);
            });
        } catch (error) {
            logger.error("Failed to start server:", error);
            process.exit(1);
        }
    }
}
