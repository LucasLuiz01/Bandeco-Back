import { Request, Response } from "express";
import httpStatus from "http-status";
import { dateService } from "../services/menu-service";

export async function getMenuByday(req: Request, res: Response) {
    const date = req.params.date.toString();
  try {
   const datas = await dateService(date)
    res.status(httpStatus.OK).send(datas);
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