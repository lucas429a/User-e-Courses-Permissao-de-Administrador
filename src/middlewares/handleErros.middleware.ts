import {z} from 'zod'
import { JsonWebTokenError } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import AppError from '../errors/AppError.error';


export const handleErrors = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ message: error.message });
  }

  if(error instanceof z.ZodError) {
    return res.status(400).json(error.flatten().fieldErrors)
  }

  if(error instanceof JsonWebTokenError) {
    return res.status(401).json({error: error.message})
  }

  console.error(error);
  return res.status(500).json({ message: "Internal server error" });
};