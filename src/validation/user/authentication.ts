import * as yup from 'yup';
import { User } from '../../domain/models/User';
import { string, password } from '..';

export const validateAuthentication = async (params: User) => {

  const schema = yup.object().shape({
    username: string('O usuário').required('O usuário é obrigatório'),
    password,
  });


  await schema.validate(params, { abortEarly: false, stripUnknown: true });

}