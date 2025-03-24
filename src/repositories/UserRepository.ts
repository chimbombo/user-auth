import { Repository } from "typeorm";
import Database from "@model/DataBase";
import { User } from "@entities/User";
import { CreateUserDTO, UserResponseDTO } from "@dtos/userDTO";
import { logger } from "@src/config/logger";

export class UserRepository {
  private repo: Repository<User>;

  constructor() {
    this.repo = Database.getRepository(User);
  }

  async findById(id: string): Promise<User | null> {
    return await this.repo.findOne({ where: { _id: id } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return await this.repo.findOne({ where: { username } });
  }

  async create(user: CreateUserDTO): Promise<User> {
    const data = await this.findByUsername(user.username);
    if (data) {
      logger.error(`User:${user.username} - already exists`);
      throw new Error(`User:${user.username} - already exists`);
    }

    const savedUser = this.repo.create(user);
    return await this.repo.save(savedUser);
  }

  async update(id: string, updateData: Partial<User>): Promise<User | null> {
    await this.repo.update(id, updateData);
    return this.findById(id);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }
}
