import { Contact } from "../../../domain/models/Contact";
import { ContactFindAllInterface } from "../../../domain/usecases/contact/findAll";
import { getCustomRepository } from 'typeorm';
import { ContactRepository } from "../../../infra/db/ContactRepository";

export class ContactFindAll implements ContactFindAllInterface {
  async index(): Promise<Contact[]> {

    const contactRepository = getCustomRepository(ContactRepository);

    const contacts = await contactRepository.findAll();

    return contacts;

  }
}