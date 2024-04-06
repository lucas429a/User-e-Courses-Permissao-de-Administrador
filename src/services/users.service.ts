import { hash } from "bcryptjs";
import { UserCreate, UserRead, UserResult, userReturn } from "../interfaces/users.interface";
import format from "pg-format";
import { client } from "../database";
import { userReadSchema, userReturnSchema } from "../schemas/users.schemas";



export const createUserService = async(data:UserCreate):Promise<userReturn>=>{
    data.password = await hash(data.password,10)

    const queryFormat:string= format(
        'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
        Object.keys(data),
        Object.values(data)
    )
    const query: UserResult = await client.query(queryFormat)

    return userReturnSchema.parse(query.rows[0])
}

export const getUserService = async():Promise<UserRead>=>{
    const query: UserResult = await client.query('SELECT * FROM "users";');
    return userReadSchema.parse(query.rows);
}

export const getCousersByUser =async(userId:string)=>{
    const queryString =
    `SELECT "c"."id" AS "courseId",
    "c"."name" AS "courseName",
    "c"."description" AS "courseDescription",
    "uc"."active" AS "userActiveInCourse",
    "u"."Id" AS "userId",
    "u"."name" AS "userName" 
     FROM "courses" AS "c" LEFT JOIN "usersCourses" AS "uc" JOIN "users" AS "u" ON "c"."courseId" = "u"."id"; `


const queryResult:UserResult = await client.query(queryString,[userId])

return queryResult.rows[0]
}