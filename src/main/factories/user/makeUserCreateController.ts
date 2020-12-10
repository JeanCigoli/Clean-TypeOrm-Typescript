import { UserCreate } from "../../../data/usecases/user/create";
import { UserCreateController } from "../../../presentation/controller/user/createController";

export function makeUserCreateController() {
  const userCreate = new UserCreate();
  return new UserCreateController(userCreate);
}