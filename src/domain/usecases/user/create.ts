import { User } from "../../models/User";

export interface UserCreateInterface {
  store(user: User): Promise<User>;
}