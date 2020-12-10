import { NextFunction, Request, Response } from "express"
import { formattedErrorsYup } from "../utils/formatters/yupErrorFormatter";

export const validation = (validFunction: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {

    const params = {
      ...req.body,
      ...req.query,
      ...req.params, 
    }

    try {
      await validFunction(params);

      return next();
      
    } catch (error) {
      return res.status(400).json({ 
        message: 'Bad request',
        erros: formattedErrorsYup(error.inner),
      })
    }
  }
}