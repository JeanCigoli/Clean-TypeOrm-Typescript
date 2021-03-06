import * as yup from 'yup';
import { User } from '../../domain/models/User';
import { string, password } from '..';

export const validateUser = async (params: User) => {

  const schema = yup.object().shape({
    name: string('O nome').required('O nome é obrigatório'),
    password,
  });


  await schema.validate(params, { abortEarly: false, stripUnknown: true });

}