import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { signInSchema, signUpSchema } from "../schemas/authentication-schema"
import  jwt  from "jsonwebtoken";
 type userDados = {
  id: number,
  iat: number,
  exp: number
}
export async function authenticationVerify(req: Request, res: Response, next: NextFunction) {
  console.log("oi")
  const dados = req.body;
  const validation = signInSchema.validate(dados, { abortEarly: false })
  if (validation.error) {
    const error = validation.error.details.map((detail) => detail.message)
    return res.status(422).send(error);
  }

  next();
}
export async function authenticationVerifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if(!authorization){
    console.log("CAI AQUI")
    return res.sendStatus(401);
  }
  try {
    const parts = authorization.split(" ")
    const [schema, token] = parts
    if (schema !== "Bearer") {
      console.log("CAI AQUI 2")
      return res.status(401).send("Token Invalido")
    }
    jwt.verify(token, process.env.JWT_SECRET, async (error, decoded:userDados) => {
      if (error) {
        console.log("CAI AQUI 3", error)
        return res.status(401).send({ message: "Token invalid!!" })
      } else {
        res.locals.userId = decoded.id
      }

      return next()
    })
  } catch (error) {
    return res.status(401).send(error.message)
  }
}

export async function authenticationVerifyUp(req: Request, res: Response, next: NextFunction) {
  const dados = req.body;
  const validation = signUpSchema.validate(dados, { abortEarly: false })
  if (validation.error) {
    const error = validation.error.details.map((detail) => detail.message)
    res.status(422).send(error)
    return
  }

  next();
}