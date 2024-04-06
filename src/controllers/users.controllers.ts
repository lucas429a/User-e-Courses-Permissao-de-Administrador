import { Request, Response } from "express";
import { User, UserRead, userReturn } from "../interfaces/users.interface";
import { createUserService, getUserService } from "../services/users.service";


export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user:userReturn = await createUserService(req.body);
    
    return res.status(201).json(user);
  };

export const getUsersController = async (req: Request, res: Response): Promise<Response>=>{
    const users: UserRead = await getUserService();
    return res.status(200).json(users);
}

export const getUserCourseController = async (req: Request, res: Response): Promise<Response> => {
    const user: User = res.locals.foundUser;
    return res.status(200).json(user);
}