import { Contact } from "../../domain/models/Contact";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {

  lastContact() {
    return this.findOne({ order: { id: 'DESC' } });
  }

  findAll() {
    return this.find();
  }

  insertContact(contact: Contact) {
    return this.insert(contact);
  }
}