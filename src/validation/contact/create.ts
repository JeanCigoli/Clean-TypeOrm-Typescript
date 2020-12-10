import * as yup from 'yup';
import { Contact } from '../../domain/models/Contact';
import { string, email } from '..';

export const validateContact = async (params: Contact) => {

  const schema = yup.object().shape({
    name: string('O nome').required('O nome é obrigatório'),
    email,
    subject: string('O assunto').required('O assunto é obrigatório'),
    message: string('A mensagem').required('A mensagem é obrigatória'),
  });


  await schema.validate(params, { abortEarly: false, stripUnknown: true });

}