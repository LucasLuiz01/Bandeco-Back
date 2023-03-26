import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { signInSchema, signUpSchema } from "../schemas/authentication-schema.js"
import  jwt  from "jsonwebtoken";

export async function authenticationVerify(req: Request, res: Response, next: NextFunction) {
  const dados = req.body;
  const validation = signInSchema.validate(dados, { abortEarly: false })
  if (validation.error) {
    const error = validation.error.details.map((detail) => detail.message)
    res.status(422).send(error)
    return
  }

  next();
}
export async function authenticationVerifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  try {
    const parts = authorization.split(" ")
    const [schema, token] = parts
    if (schema !== "Bearer") {
      return res.sendStatus(401)
    }
    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      console.log(decoded);
      if (error) {
        return res.status(401).send({ message: "Token invalid!!" })
      } else {
        res.locals.userId = decoded
      }

      return next()
    })
  } catch (error) {
    res.status(401).send(error.message)
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