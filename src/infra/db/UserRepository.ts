import { User } from "../../domain/models/User";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  findByName(name: string) {
    return this.findOne({ where: { name } });
  }

  findByNameAndPassword(name: string, password: string) {
    return this.findOne({ where: { name, password } });
  }

  lastUser() {
    return this.findOne({ order: { id: 'DESC' } });
  }

  findAll() {
    return this.find();
  }

  insertUser(user: User) {
    return this.insert(user);
  }
}