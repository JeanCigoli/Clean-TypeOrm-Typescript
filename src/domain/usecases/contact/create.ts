import { Contact } from "../../models/Contact";

export interface ContactCreateInterface {
  store(contact: Contact): Promise<Contact>;
}