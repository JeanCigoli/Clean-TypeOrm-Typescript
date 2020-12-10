import { ContactCreateInterface } from "../../../domain/usecases/contact/create";
import { created, serverError } from "../../../main/utils/response";
import { HttpRequest, HttpResponse } from "../../protocols";

export class ContactCreateController {
  constructor(private readonly contactCreate: ContactCreateInterface) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const contact = httpRequest.body;

      await this.contactCreate.store(contact);

      return created(contact);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError();
      }
    }
  }
}
