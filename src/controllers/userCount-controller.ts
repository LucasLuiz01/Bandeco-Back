import { Request, Response } from "express";
import httpStatus from "http-status";
import { userCountService } from "../services/user-service.js";

export async function getUser(req: Request, res: Response) {
    const userId = res.locals.userId
        console.log(userId)
  try {
   const user = await userCountService(userId)
   console.log(user)
    res.status(200).send(user)
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}