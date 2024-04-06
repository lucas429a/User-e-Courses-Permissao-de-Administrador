import { Router } from "express";
import { userRouter } from "./users.routes";
import { courseRouter } from "./course.router";
import { sessionRouter } from "./session.router";

export const route : Router = Router()

route.use("/",userRouter)
route.use("/",courseRouter)
route.use("/",sessionRouter)