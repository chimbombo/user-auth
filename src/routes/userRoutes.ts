import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "@controllers/UserController";

class UserRoutes {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/register", (req: Request, res: Response, next: NextFunction) => {
            UserController.createUser(req, res, next);
        });
    }

    getRouter() {
        return this.router;
    }
}

export default new UserRoutes().getRouter();
