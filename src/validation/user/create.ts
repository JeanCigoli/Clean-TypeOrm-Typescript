import { Joi, Segments, celebrate } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().min(8).required(),
  })
})