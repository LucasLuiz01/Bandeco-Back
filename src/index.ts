import express from "express";
import cors from "cors";
import { authRoute } from "./routes/authentication-router";
import { userRoute } from "./routes/userCount-router";
import { menuRoute } from "./routes/menu-router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoute);
app.use(userRoute);
app.use(menuRoute);


export default app;
