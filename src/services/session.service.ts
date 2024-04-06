import { compare } from "bcryptjs";
import { client } from "../database";
import AppError from "../errors/AppError.error";
import { SessionCreate, SessionReturn } from "../interfaces/session.interface";
import { User, UserResult } from "../interfaces/users.interface";
import { sign } from "jsonwebtoken";

export const loginUserService = async(data:SessionCreate)=>{
    const queryString: string  =
        'SELECT * FROM "users" WHERE "email" = $1;';
      

      const queryResult: UserResult = await client.query(queryString, [data.email])


      if(queryResult.rowCount === 0) {
        throw new AppError("Email or password is incorrect.", 401)
      }
      const user: User = queryResult.rows[0]


      const verifyPass: boolean = await compare(data.password, user.password)
      if(!verifyPass) {
        throw new AppError('Email or password is incorrect.', 401)
      }

      const token: string = sign(
        { email: user.email, admin: user.admin },
        process.env.JWT_SECRET!, 
        { subject: user.id.toString(), expiresIn: process.env.JWT_EXPIRES_IN! }
      )
    
      return {token}
}