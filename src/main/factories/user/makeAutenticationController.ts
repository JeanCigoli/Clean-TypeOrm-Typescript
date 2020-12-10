import { UserAutentication } from "../../../data/usecases/user/autentication";
import { UserAuthenticationController } from "../../../presentation/controller/user/autenticationController";

export function makeAuthenticationController() {
  const authentication = new UserAutentication();
  return new UserAuthenticationController(authentication);
}