import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import {signInSchema, signUpSchema} from "../schemas/authentication-schema.js"

export async function authenticationVerify(req: Request, res:Response, next:NextFunction) {
    const dados = req.body;
    const validation = signInSchema.validate(dados, {abortEarly: false })
    if (validation.error) {
        const error = validation.error.details.map((detail) => detail.message)
        res.status(422).send(error)
        return
      }
    
      next();
}

export async function authenticationVerifyUp(req: Request, res:Response, next:NextFunction) {
  const dados = req.body;
  const validation = signUpSchema.validate(dados, {abortEarly: false })
  if (validation.error) {
      const error = validation.error.details.map((detail) => detail.message)
      res.status(422).send(error)
      return
    }
  
    next();
}