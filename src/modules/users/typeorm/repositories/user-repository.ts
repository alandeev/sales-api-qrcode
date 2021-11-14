import { EntityRepository, Repository } from "typeorm";
import User from "../entities/user";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async getByUsername(username: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { username }
    })
    
    return user;
  }
}

export default UserRepository;