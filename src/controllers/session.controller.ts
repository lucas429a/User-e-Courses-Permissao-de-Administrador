import { Request, Response } from "express";
import { SessionReturn } from "../interfaces/session.interface";
import { loginUserService } from "../services/session.service";

export const loginController = async (req: Request, res: Response): Promise<Response> => {
  const token: SessionReturn = await loginUserService(req.body)
  return res.status(200).json(token)
}