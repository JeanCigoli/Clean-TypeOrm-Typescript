import { UserCreateInterface } from "../../../domain/usecases/user/create";
import { HttpRequest, HttpResponse } from "../../protocols";

export class UserCreateController {
  constructor(private readonly userCreate: UserCreateInterface) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.body;

      await this.userCreate.store(user);

      return {
        statusCode: 201,
        body: {
          message: "Created success",
          payload: user,
        },
      };
    } catch (error) {
      switch (error.message) {
        case "USER_EXIST":
          return {
            statusCode: 409,
            body: {
              message: "User exist",
            },
          };
        default:
          return {
            statusCode: 500,
            body: {
              message: "Internal server",
            },
          };
      }
    }
  }
}
