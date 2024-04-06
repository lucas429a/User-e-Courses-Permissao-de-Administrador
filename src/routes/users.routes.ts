import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/users.schemas";
import { validateEmail } from "../middlewares/validateEmailExists";
import { createUserController, getUserCourseController, getUsersController } from "../controllers/users.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyPermissions } from "../middlewares/verifyPermission.middleware";

export const userRouter : Router = Router()

userRouter.post("/users",validateBody(userCreateSchema),validateEmail,createUserController)
userRouter.get("/users",verifyToken,verifyPermissions,getUsersController)
userRouter.get("/users/:id/courses",verifyToken,verifyPermissions,getUserCourseController)