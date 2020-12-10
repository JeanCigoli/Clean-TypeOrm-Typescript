import { Router } from 'express';
import { adaptRoute } from '../adapters/routes';
import { makeUserCreateController, makeUserFindAllController, makeAuthenticationController } from '../factories/user';
import { validateUser } from '../../validation/user/create';
import { validateAuthentication } from '../../validation/user/authentication';
import { validation } from '../middleware/validation';

export default (router: Router): void => {
  router.post('/users', validation(validateUser), adaptRoute(makeUserCreateController()));
  router.get('/users', adaptRoute(makeUserFindAllController()));
  router.post('/authentication', validation(validateAuthentication), adaptRoute(makeAuthenticationController()));
}