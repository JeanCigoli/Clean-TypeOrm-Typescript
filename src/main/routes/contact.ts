import { Router } from 'express';
import { adaptRoute } from '../adapters/routes';
import { makeContactCreateController, makeContactFindAllController } from '../factories/contact';
import { validateContact } from '../../validation/contact/create';
import { validation } from '../middleware/validation';

export default (router: Router): void => {
  router.post('/contacts', validation(validateContact), adaptRoute(makeContactCreateController()));
  router.get('/contacts', adaptRoute(makeContactFindAllController()));
}