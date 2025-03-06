import express, { Application } from "express";
import { config } from "@config/index";
import { router } from "@routes/userRoutes";
import { logger } from "@config/logger";
import { notFoundMiddleware } from "@middlewares/notFound";
import "reflect-metadata";

export class Server {
    private readonly app: Application;
    private readonly port: number;

    constructor() {
        this.app = express();
        this.port = config.port;
        this.routes();
        this.app.use(notFoundMiddleware);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes(): void {
        this.app.use("/api", router);
    }

    public start() {
        this.app.listen(this.port, () => {
            logger.info(`Server is running on port ${this.port}`);
        });
    }
}