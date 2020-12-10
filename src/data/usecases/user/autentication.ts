import { User } from "../../../domain/models/User";
import { UserAutenticationInterface } from "../../../domain/usecases/user/autentication";
import { UserRepository } from "../../../infra/db/UserRepository";
import { getCustomRepository } from 'typeorm';

export class UserAutentication implements UserAutenticationInterface {
  async show(user: User) {
    const userRepository = getCustomRepository(UserRepository);

    const existUser = await userRepository.findByNameAndPassword(user.name, user.password);

    if (!existUser) {
      throw new Error('USER_NOT_FOUND');
    }

    return existUser;
  }
}