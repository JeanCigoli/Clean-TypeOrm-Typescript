import { UserCreateInterface } from "../../../domain/usecases/user/create";
import { UserFindAllInterface } from "../../../domain/usecases/user/findAll";
import { HttpResponse } from "../../protocols";

export class UserFindAllController {
  constructor(private readonly user: UserFindAllInterface) {}

  async handle(): Promise<HttpResponse> {
    try {

      const users = await this.user.index();

      return {
        statusCode: 200,
        body: {
          message: "Select success",
          payload: users,
        },
      };
    } catch (error) {
      switch (error.message) {
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
