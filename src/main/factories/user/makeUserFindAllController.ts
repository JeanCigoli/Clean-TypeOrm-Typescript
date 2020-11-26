import { UserFindAll } from "../../../data/usecases/user/findAll";
import { UserFindAllController } from "../../../presentation/controller/user/findAllController";

export function makeUserFindAllController() {
  const user = new UserFindAll();
  return new UserFindAllController(user);
}