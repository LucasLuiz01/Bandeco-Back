import { Request, Response } from "express";
import httpStatus from "http-status";
import { userCountService } from "../services/user-service";
import { userUpdateService } from "../services/user-service";

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
export async function updateUser(req: Request, res: Response) {
  const {  balance, id } = req.body;
  const userId = res.locals.userId
  console.log(parseInt(balance), parseInt(id),"IS A NOT A NUMBER")
  if(!balance || !id){
    return res.status(httpStatus.BAD_REQUEST).send({message: "Dados inválidos"})
  }
  try {
    await userUpdateService(parseInt(balance), parseInt(id), userId)
    res.sendStatus(httpStatus.OK)
  } catch (error) {
    console.log(error);
    if(error.message === "NotFound"){
      console.log("Parei Aqui")
      return res.status(httpStatus.NOT_FOUND).send({
        message: "Not found Error"
      })
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}