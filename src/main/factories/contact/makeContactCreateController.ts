import { ContactCreate } from "../../../data/usecases/contact/create";
import { ContactCreateController } from "../../../presentation/controller/contact/createController";

export function makeContactCreateController() {
  const contactCreate = new ContactCreate();
  return new ContactCreateController(contactCreate);
}