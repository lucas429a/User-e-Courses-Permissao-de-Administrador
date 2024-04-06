
import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { UserResult } from "../interfaces/users.interface";
import AppError from "../errors/AppError.error";


export const validateEmail = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    const {email} = req.body
    if(!email) return next()

    const query: UserResult = await client.query(
        'SELECT * FROM "users" WHERE "email" = $1',
        [email]
      );
    
      if (query.rowCount !== 0) {
        throw new AppError("Email already exists", 409);
      }
    
      return next();
}