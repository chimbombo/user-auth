import { UserRepository } from "../repositories/UserRepository";
import { CreateUserDTO, UserResponseDTO } from "@dtos/userDTO";
import { User } from "../entities/User";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(user: CreateUserDTO): Promise<UserResponseDTO> {
        const savedUser = await this.userRepository.create(user);
        return savedUser
    }
}
