import {z} from "zod"

import { QueryResult } from "pg"
import { courseCreateSchema, courseReadSchema, courseSchema, courseUpdateSchema } from "../schemas/courses.schema"


export type courses = z.infer<typeof courseSchema>

export type coursesCreate  = z.infer< typeof courseCreateSchema>
export type coursesRead = z.infer <typeof courseReadSchema>
export type coursesUpdate = z.infer <typeof courseUpdateSchema>
export type coursesReturn = z.infer<typeof courseCreateSchema>

export type courseResult = QueryResult<courses>