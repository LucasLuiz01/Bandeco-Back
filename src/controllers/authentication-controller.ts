import { Request, Response } from "express";
import httpStatus from "http-status";
import { signInService, signUpService } from "../services/authentication-service.js";

export async function userPost(req: Request, res: Response) {
  const { name, password, ra } = req.body;
  const nome = ra.toString();
  console.log(nome.length)
  if(nome.length !== 6){
    console.log(ra.length !== 6)
    return res.status(httpStatus.BAD_REQUEST).send("RA inválido");
  }
  try {
    await signInService(name,password,nome);
    res.sendStatus(200)
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function userUp (req: Request, res: Response) {
  const {  password, ra } = req.body;
  const nome = ra.toString();
  console.log(nome.length)
  if(nome.length !== 6){
    return res.status(httpStatus.BAD_REQUEST).send("RA inválido");
  }
  try {
 const token = await signUpService(password,nome);
    res.status(httpStatus.OK).send({
      message: "Authenticado com sucesso",
      token: token
    })
  } catch (error) {
    console.log(error,"sadsadasdasdasdasdsadasdsad")
    if(error.message === "NotFound"){
      return res.status(httpStatus.NOT_FOUND).send({
        message: "SENHA INVÁLIDA, OU USUARIO INVALIDO"
      })
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}