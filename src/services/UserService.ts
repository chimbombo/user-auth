import { UserRepository } from "../repositories/UserRepository";
import { CreateUserDTO, UserResponseDTO } from "../dtos/UserDTO";
import bcrypt from "bcrypt";
import { User } from "../entities/User";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data: CreateUserDTO): Promise<UserResponseDTO> {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = new User();
        user.email = data.email;
        user.password = hashedPassword;

        const savedUser = await this.userRepository.create(user);
        return new UserResponseDTO(savedUser.id, savedUser.email, savedUser.isActive);
    }
}
