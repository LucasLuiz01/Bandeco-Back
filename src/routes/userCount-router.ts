import { Router } from "express";
import { authenticationVerifyToken } from "../middlewares/authentication-middleware.js";
import { getUser, updateUser } from "../controllers/userCount-controller.js";

export const userRoute = Router();

userRoute.get("/userCount",authenticationVerifyToken,getUser);

userRoute.put("/userCount",authenticationVerifyToken,updateUser);
