import { Router } from "express";
import { userPost,userUp } from "../controllers/authentication-controller.js";
import { authenticationVerify, authenticationVerifyUp } from "../middlewares/authentication-middleware.js";


export const authRoute = Router();

authRoute.post("/sign-in",authenticationVerify, userPost);

authRoute.post("/sign-up", authenticationVerifyUp, userUp);
