import { UserAutenticationInterface } from "../../../domain/usecases/user/autentication";
import { serverError, ok, notFound } from "../../../main/utils/response";
import { HttpRequest, HttpResponse } from "../../protocols";

export class UserAuthenticationController {
  constructor(private readonly autentication: UserAutenticationInterface) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { username, password } = httpRequest.body;

      const user = await this.autentication.show({ name: username, password });

      return ok(user);
    } catch (error) {
      switch (error.message) {
        case "USER_NOT_FOUND":
          return notFound('User', [{
            field: 'user',
            message: 'O usuário não foi encontrado'
          }]);
        default:
          return serverError();
      }
    }
  }
}
