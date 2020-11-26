import { User } from "../../domain/models/User";
import { getRepository } from "typeorm";

export class UserRepository {

  static findByName(name: string) {
    return getRepository(User)
      .createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getOne()
  }

  static lastUser() {
    return getRepository(User)
      .createQueryBuilder('user')
      .orderBy('id', 'DESC')
      .getOne();
  }

  static findAll() {
    return getRepository(User)
      .createQueryBuilder('user')
      .orderBy('id', 'ASC')
      .getMany();
  }

  static create(user: User) {
    return getRepository(User)
      .createQueryBuilder('user')
      .insert()
      .into(User)
      .values([ user ])
      .execute();
  }

}