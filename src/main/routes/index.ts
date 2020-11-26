import { Router } from 'express';
import { adaptRoute } from '../adapters/routes';
import { makeUserCreateController, makeUserFindAllController } from '../factories/user';
import validUserCreated from '../../validation/user/create';

export default (router: Router): void => {
  router.post('/users', validUserCreated, adaptRoute(makeUserCreateController()));
  router.get('/users', adaptRoute(makeUserFindAllController()));
}