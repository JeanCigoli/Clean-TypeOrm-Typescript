import { UserFindAllInterface } from "../../../domain/usecases/user/findAll";
import { ok, serverError } from "../../../main/utils/response";
import { HttpResponse } from "../../protocols";

export class UserFindAllController {
  constructor(private readonly user: UserFindAllInterface) {}

  async handle(): Promise<HttpResponse> {
    try {

      const users = await this.user.index();

      return ok(users);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError();
      }
    }
  }
}
