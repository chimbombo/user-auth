import { Request, Response } from "express";
import { UserService } from "@services/UserService";
import { CLIENT_RENEG_LIMIT } from "tls";

export class UserController {
    private static userService = new UserService();

    static async createUser(req: Request, res: Response) {
        try {
            const savedUser = await this.userService.createUser(req.body);
            return res.status(201).json(savedUser);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}
