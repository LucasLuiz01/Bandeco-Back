import { Router } from "express";
import { getMenuByday } from "../controllers/menu-controller";

export const menuRoute = Router();

menuRoute.get("/menu/:date", getMenuByday);


