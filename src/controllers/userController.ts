import { Request, Response, NextFunction } from "express";
import { UserService } from "@services/UserService";
import { UserResponseDTO } from "@src/dtos/userDTO";
import { status } from "http-status";
import createError from "http-errors";

export class UserController {
    private static userService = new UserService();

    static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const savedUser: UserResponseDTO = await this.userService.createUser(req.body);
            return res.status(status.CREATED).json(savedUser);
        } catch (error: any) {
            next(createError(error.status, error.message));
        }
    }
}
