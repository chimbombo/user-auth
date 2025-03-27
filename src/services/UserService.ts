import { UserRepository } from "../repositories/UserRepository";
import { CreateUserDTO, UserResponseDTO } from "@dtos/userDTO";
import { User } from "@src/entities/User";
import { userSchema } from "@validations/userValidation";
import createError from "http-errors";
import { status } from "http-status";
import bcrypt from "bcrypt";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(user: CreateUserDTO): Promise<UserResponseDTO> {
        const parsedData = await userSchema.safeParse(user);
        if (!parsedData.success) {
            throw createError(status.BAD_REQUEST, parsedData.error.errors.map((error) => error.message).join(", "));
        }

        const hashedPassword: string = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;

        const savedUser: User = await this.userRepository.create(user);
        const { username, createdAt, updatedAt } = savedUser;
        const sanitizedUser: UserResponseDTO = {
            username: username,
            createdAt: createdAt,
            updatedAt: updatedAt,
        };
        return sanitizedUser;
    }
}
