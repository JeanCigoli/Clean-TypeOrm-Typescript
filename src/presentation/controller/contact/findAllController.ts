import { ContactFindAllInterface } from "../../../domain/usecases/contact/findAll";
import { ok, serverError } from "../../../main/utils/response";
import { HttpResponse } from "../../protocols";

export class ContactFindAllController {
  constructor(private readonly contact: ContactFindAllInterface) {}

  async handle(): Promise<HttpResponse> {
    try {

      const contacts = await this.contact.index();

      return ok(contacts);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError();
      }
    }
  }
}
