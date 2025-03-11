import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private static userService = new UserService();

    static async createUser(req: Request, res: Response) {
        try {
            const user = await this.userService.createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ message: "Error al crear usuario" });
        }
    }
}
