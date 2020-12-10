import { User } from "../../models/User";

export interface UserAutenticationInterface {
  show(user: User): Promise<User>;
}