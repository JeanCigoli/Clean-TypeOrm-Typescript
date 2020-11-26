import { UserCreateInterface } from "../../../domain/usecases/user/create";
import { created, serverError, conflict } from "../../../main/utils/response";
import { HttpRequest, HttpResponse } from "../../protocols";

export class UserCreateController {
  constructor(private readonly userCreate: UserCreateInterface) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.body;

      await this.userCreate.store(user);

      return created(user);
    } catch (error) {
      switch (error.message) {
        case "USER_EXIST":
          return conflict('User');
        default:
          return serverError();
      }
    }
  }
}
