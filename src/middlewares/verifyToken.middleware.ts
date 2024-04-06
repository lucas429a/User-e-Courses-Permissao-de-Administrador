import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError.error";

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const authorization: string | undefined = req.headers.authorization
  if(!authorization) throw new AppError('Missing JWT token', 401)


  const token: string = authorization.split(" ")[1]
  const decoded = verify(token, process.env.JWT_SECRET!)

  res.locals = {...res.locals, decoded}

  return next()
}