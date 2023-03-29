import { Router } from "express";
import { authenticationVerifyToken } from "../middlewares/authentication-middleware.js";
import { getUser } from "../controllers/userCount-controller.js";

export const userRoute = Router();

userRoute.get("/userCount",authenticationVerifyToken,getUser);

userRoute.get("/userCount");
