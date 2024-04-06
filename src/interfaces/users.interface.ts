import {z} from "zod"
import { userCreateSchema, userReadSchema, userReturnSchema, userSchema, userUpdateSchema } from "../schemas/users.schemas"
import { QueryResult } from "pg"

export type User = z.infer<typeof userSchema>

export type UserCreate  = z.infer< typeof userCreateSchema>
export type UserRead = z.infer <typeof userReadSchema>
export type UserUpdate = z.infer <typeof userUpdateSchema>
export type userReturn = z.infer<typeof userReturnSchema>

export type UserResult = QueryResult<User>;