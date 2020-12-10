import { ContactFindAll } from "../../../data/usecases/contact/findAll";
import { ContactFindAllController } from "../../../presentation/controller/contact/findAllController";

export function makeContactFindAllController() {
  const contact = new ContactFindAll();
  return new ContactFindAllController(contact);
}