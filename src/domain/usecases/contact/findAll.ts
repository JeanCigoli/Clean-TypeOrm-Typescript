import { Contact } from "../../models/Contact";

export interface ContactFindAllInterface {
  index(): Promise<Contact[]>;
}