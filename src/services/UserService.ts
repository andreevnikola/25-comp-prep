import { AppDataSource } from '../database/data-source.js';
import { User } from '../entities/User.js';

export class UserService {
  private repo = AppDataSource.getRepository(User);

  async create(name: string, email: string): Promise<User> {
    const user = this.repo.create({ name, email });
    return await this.repo.save(user);
  }

  async find(id: number): Promise<User | null> {
    return await this.repo.findOneBy({ id });
  }
}
