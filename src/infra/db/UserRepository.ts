import { User } from "../../domain/models/User";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  findByName(name: string) {
    return this.findOne({ where: { name } });
  }

  lastUser() {
    return this.findOne({ order: { id: 'ASC' } });
  }

  findAll() {
    return this.find();
  }

  insertUser(user: User) {
    return this.insert(user);
  }
  
  // findByName(name: string) {
  //   return getRepository(User)
  //     .createQueryBuilder('user')
  //     .where('user.name = :name', { name })
  //     .getOne()
  // }

  // lastUser() {
  //   return getRepository(User)
  //     .createQueryBuilder('user')
  //     .orderBy('id', 'DESC')
  //     .getOne();
  // }

  // create(user: User) {
  //   return getRepository(User)
  //     .createQueryBuilder('user')
  //     .insert()
  //     .into(User)
  //     .values([ user ])
  //     .execute();
  // }
}