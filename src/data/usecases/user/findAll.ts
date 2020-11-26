import { User } from "../../../domain/models/User";
import { UserFindAllInterface } from "../../../domain/usecases/user/findAll";
import { getCustomRepository } from 'typeorm';
import { UserRepository } from "../../../infra/db/UserRepository";

export class UserFindAll implements UserFindAllInterface {
  async index(): Promise<User[]> {

    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.findAll();

    return users;

  }
}