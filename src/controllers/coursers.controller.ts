import { Request, Response } from "express";
import { coursesCreate, coursesRead } from "../interfaces/courses.interfaces";
import { createCourseService, deleteUserOnCoursesService, getCourseService, getUserOnCourseService, registerUserOnCourseService } from "../services/courses.service";


export const createCourseController = async (req: Request, res: Response): Promise<Response> => {
    const course:coursesCreate = await createCourseService(req.body);
    return res.status(201).json(course);
};

export const getCoursesController = async (req: Request, res: Response): Promise<Response>=>{
    const course: coursesRead = await getCourseService();
    return res.status(200).json(course);
}

export const RegisterUserOnCourseController = async(req:Request,res:Response):Promise<Response>=>{
    const{courseId,userId}= req.params

    await registerUserOnCourseService(courseId,userId)

    return res.status(201).json({
        message: "User successfully vinculed to course"
    })
}

export const deleteUserFromCourseController = async (req: Request,res: Response): Promise<Response> => {
    const { courseId, userId } = req.params;
  
    await deleteUserOnCoursesService(courseId, userId);
    return res.status(204).json();
  };

export const getUseronCourseController = async(req:Request, res:Response) =>{
        const {courseId} = req.params

    const courseUser = await getUserOnCourseService(courseId)

    return res.status(200).json(courseUser);
}
