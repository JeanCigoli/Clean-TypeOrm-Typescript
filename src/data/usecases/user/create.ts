import { User } from "../../../domain/models/User";
import { UserCreateInterface } from "../../../domain/usecases/user/create";
import { UserRepository } from "../../../infra/db/UserRepository";
import { getCustomRepository } from 'typeorm';

export class UserCreate implements UserCreateInterface {
  async store(user: User) {

    const userRepository = getCustomRepository(UserRepository);

    const existUser = await userRepository.findByName(user.name);

    if (existUser) {
      throw new Error('USER_EXIST');
    }

    const lastUser = await userRepository.lastUser();

    user.id = lastUser?.id ? lastUser.id + 1 : 1;

    await userRepository.insertUser(user);

    return user;
  }
}