import { Router } from "express";
import { getMenuByday } from "../controllers/menu-controller.js";

export const menuRoute = Router();

menuRoute.get("/menu/:date", getMenuByday);


