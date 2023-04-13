import { Router } from "express";
import { authenticationVerifyToken } from "../middlewares/authentication-middleware";
import { getUser, updateUser } from "../controllers/userCount-controller";

export const userRoute = Router();

userRoute.get("/userCount",authenticationVerifyToken,getUser);

userRoute.put("/userCount",authenticationVerifyToken,updateUser);
