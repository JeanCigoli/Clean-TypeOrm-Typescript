import { Contact } from "../../../domain/models/Contact";
import { ContactCreateInterface } from "../../../domain/usecases/contact/create";
import { ContactRepository } from "../../../infra/db/ContactRepository";
import { getCustomRepository } from 'typeorm';

export class ContactCreate implements ContactCreateInterface {
  async store(contact: Contact) {

    const contactRepository = getCustomRepository(ContactRepository);

    const lastContact = await contactRepository.lastContact();

    contact.id = lastContact?.id ? lastContact.id + 1 : 1;

    await contactRepository.insertContact(contact);

    return contact;
  }
}