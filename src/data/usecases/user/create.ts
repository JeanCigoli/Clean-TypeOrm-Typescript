import { User } from "../../../domain/models/User";
import { UserCreateInterface } from "../../../domain/usecases/user/create";
import { UserRepository } from "../../../infra/db/UserRepository";

export class UserCreate implements UserCreateInterface {
  async store(user: User) {

    const existUser = await UserRepository.findByName(user.name);

    if (existUser) {
      throw new Error('USER_EXIST');
    }

    const lastUser = await UserRepository.lastUser();

    user.id = lastUser?.id ? lastUser.id + 1 : 1;

    await UserRepository.create(user);

    return user;
  }
}