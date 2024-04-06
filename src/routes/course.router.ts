import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { courseSchema } from "../schemas/courses.schema";
import { verifyPermissions } from "../middlewares/verifyPermission.middleware";
import { RegisterUserOnCourseController, createCourseController, deleteUserFromCourseController, getCoursesController } from "../controllers/coursers.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateIdExists } from "../middlewares/verifyIdExists.middleware";
import { getUserCourseController } from "../controllers/users.controllers";


export const courseRouter : Router = Router()

courseRouter.post("/courses",validateBody(courseSchema),verifyPermissions,createCourseController)
courseRouter.get("/courses",getCoursesController)
courseRouter.post("/courses/:coursesId/users/:userId",verifyPermissions,verifyToken,validateIdExists,RegisterUserOnCourseController)
courseRouter.delete("/courses/:coursesId/users/:userId",verifyPermissions,verifyToken,validateIdExists,deleteUserFromCourseController)
courseRouter.get("/users/:id/courses",verifyPermissions,verifyToken,getUserCourseController)