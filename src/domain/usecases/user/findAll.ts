import { User } from "../../models/User";

export interface UserFindAllInterface {
  index(): Promise<User[]>;
}