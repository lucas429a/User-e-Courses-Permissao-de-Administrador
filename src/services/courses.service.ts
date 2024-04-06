
import { courseResult, coursesCreate, coursesRead, coursesReturn } from "../interfaces/courses.interfaces"
import format from "pg-format"
import { client } from "../database"
import { courseCreateSchema, courseReadSchema } from "../schemas/courses.schema"



export const createCourseService = async(data:coursesCreate):Promise<coursesReturn>=>{


    const queryFormat:string= format(
        'INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;',
        Object.keys(data),
        Object.values(data)
    )
    const query: courseResult = await client.query(queryFormat)

    return courseCreateSchema.parse(query.rows[0])
}

export const getCourseService = async():Promise<coursesRead>=>{
    const query: courseResult = await client.query('SELECT * FROM "courses";');
    return courseReadSchema.parse(query.rows);
}

export const registerUserOnCourseService = async(courseId:string,userId:string)=>{

    const queryString = `INSERT INTO "usersCourses" ("courseId","userId")
     VALUES ($1,$2) RETURNING *;`

    return await client.query(queryString,[courseId,userId])
}

export const deleteUserOnCoursesService = async(courseId:string,userId:string)=>{
    const queryString = `DELETE FROM "usersCourses" WHERE courseId = $1 AND userId = $2;`

    await client.query(queryString,[courseId,userId])


}


export const getUserOnCourseService = async(courseId:string)=>{
    const queryString = 'SELECT * FROM "courses" WHERE courseId = $1";'

    return await client.query(queryString,[courseId])
}