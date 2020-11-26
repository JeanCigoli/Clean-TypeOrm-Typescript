import { User } from "../../../domain/models/User";
import { UserFindAllInterface } from "../../../domain/usecases/user/findAll";
import { UserRepository } from "../../../infra/db/UserRepository";

export class UserFindAll implements UserFindAllInterface {
  async index(): Promise<User[]> {
    const users = await UserRepository.findAll();

    return users;

  }
}