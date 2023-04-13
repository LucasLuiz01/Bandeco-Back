import { Router } from "express";
import { userPost,userUp } from "../controllers/authentication-controller";
import { authenticationVerify, authenticationVerifyUp } from "../middlewares/authentication-middleware";


export const authRoute = Router();

authRoute.post("/sign-in",authenticationVerify, userPost);

authRoute.post("/sign-up", authenticationVerifyUp, userUp);
