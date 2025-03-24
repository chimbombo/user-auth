import { Router, Request, Response } from "express";
import { UserController } from "@controllers/UserController";

// export const router = Router();


// router.post("/login", (req: Request, res: Response) => {
//     UserController.createUser(req, res);
// })

class UserRoutes {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/register", (req: Request, res: Response) => {
            UserController.createUser(req, res);
        });
    }

    getRouter() {
        return this.router;
    }
}

export default new UserRoutes().getRouter();
