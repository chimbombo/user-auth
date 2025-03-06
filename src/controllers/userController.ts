import { Request, Response } from "express";
import { status } from "http-status";

export class userController {
    public static async logInUser(req: Request, res: Response): Promise<void> {
        res.send("Hello World").status(status.OK);
    }
}