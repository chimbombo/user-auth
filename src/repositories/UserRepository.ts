import { Repository } from "typeorm";
import Database from "@model/DataBase";
import { User } from "@entities/User";

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

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.repo.create(user);
    return await this.repo.save(newUser);
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
